import prisma from '@/lib/prisma';
import type { ContactMessage } from '@/types/contact-message';
import type { ContactPayload } from '@/types/contact-payload';
import { getContactUrl } from '@/utils';

export async function POST(request: Request) {
  const message: ContactMessage = await request.json();

  if (!message.message) {
    return Response.json({});
  }

  const ip = (request.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0];

  try {
    await sendAppriseNotification(message);
    await saveMessage(message, ip);

    return Response.json({ error: false, message: 'Message sent' });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occured';
    console.log(`error sending contact message: ${errorMessage}`);
    return Response.json({ error: true, message: `Error sending message: ${errorMessage}` });
  }
}

async function sendAppriseNotification(message: ContactMessage) {
  const contactUrl = getContactUrl();

  if (!contactUrl) return;

  const payload: ContactPayload = {
    title: 'Website Message',
    body: `Message received from website:
Name:    ${message.name}
Email:   ${message.email}
Message:
${message.message}
`,
  };

  // the ky library had issues sending valid JSON to the apprise endpoint
  // so a regular fetch call it is
  const response = await fetch(contactUrl, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
}

async function saveMessage(message: ContactMessage, ipAddress: string | undefined) {
  if (!process.env.DATABASE_URL) return;

  await prisma.message.create({
    data: {
      ipaddress: ipAddress,
      name: message.name,
      email: message.email,
      message: message.message,
      createdAt: new Date(),
    },
  });
}
