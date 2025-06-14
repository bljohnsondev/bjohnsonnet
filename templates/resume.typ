#import "resume-conf.typ": *

#let infoData = json("/src/data/info.json")

#set page(paper: "us-letter", margin: margin, background: context {
  if counter(page).get().first() == 1 {
    place(top, rect(fill: accentColor, width: 100%, height: 3mm))
  }
})

#set par(justify: true)
#set text(font: "Inter", size: 11pt, fill: textColor)

#let seeking = if "seeking" in sys.inputs.keys() and "seeking" in infoData.resume {
  infoData.resume.seeking.find(rec => rec.id == sys.inputs.seeking)
} else {
  none
}

#block()[
  #text(size: 22pt, weight: 800, fill: accentColor)[#infoData.site.name]
  #if infoData.site.tagline != "" { text(10pt, fill: taglineColor)[\ #infoData.site.tagline] }
]

#v(0.5em)

#block()[
  #set par(spacing: 10pt)
  #infoData.resume.summary #if seeking != none [
    Seeking challenging senior engineering role in the #seeking.name.
  ]

  #box()[
    #set text(9pt)
    #if "email" in infoData.site [
      #iconText("icons/mail.svg", link(
        "mailto:" + infoData.site.email,
        infoData.site.email,
      ))
      #h(10pt)
    ]
    #if "websiteUrl" in infoData.site [
      #iconText("icons/external-link.svg", link(
        infoData.site.websiteUrl,
        stripHttps(infoData.site.websiteUrl),
      ))
      #h(10pt)
    ]
    #if "linkedinUrl" in infoData.site [
      #iconText("icons/linkedin.svg", link(
        infoData.site.linkedinUrl,
        stripHttps(infoData.site.linkedinUrl),
      ))
      #h(10pt)
    ]
    #if "githubUrl" in infoData.site [
      #iconText("icons/github.svg", baseline: 3pt, link(
        infoData.site.githubUrl,
        stripHttps(infoData.site.githubUrl),
      ))
    ]
  ]
]

#sectionTitle("icons/building.svg")[Work Experience]

#for job in infoData.employment [
  #block(breakable: false)[
    #employment(job)
    #v(0.875em)
  ]
]

#sectionTitle("icons/list-checks.svg")[Skills]

#skillBlocks("Frontend", infoData.resume.skills.frontend)
#skillBlocks("Backend", infoData.resume.skills.backend)
#skillBlocks("Database", infoData.resume.skills.database)
#skillBlocks("Tools", infoData.resume.skills.tools)
#skillBlocks("Methodologies", infoData.resume.skills.methodologies)

#if "education" in infoData.resume [
  #sectionTitle("icons/graduation-cap.svg")[Education]
  #grid(
    columns: (auto, 1fr),
    [
      #box(image("icons/college-logo.svg", width: 40pt))
      #h(10pt)
    ],
    [
      #set par(spacing: 8pt)
      #box()[
        #text(11pt, weight: "bold", fill: institutionColor)[
          #infoData.resume.education.institution
        ]

        #text(
          10pt,
        )[#infoData.resume.education.degree in #infoData.resume.education.major]
      ]
    ],
  )
]
