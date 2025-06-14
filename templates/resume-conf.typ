#let skillsData = json("/src/data/skills.json")

#let margin = 1.2cm

#let textColor = black
#let accentColor = rgb(93, 23, 37)
#let taglineColor = gray.darken(50%)
#let linkColor = rgb(16, 77, 135)
#let titleColor = rgb(62, 49, 40)
#let titleIconSize = 12pt
#let titleTextSize = 13pt
#let jobDateColor = rgb(124, 123, 116)
#let jobLineColor = rgb(181, 179, 173)
#let jobDutyColor = rgb(72, 72, 72)
#let skillBorder = rgb(181, 179, 173)
#let skillBackground = rgb(238, 238, 236)
#let skillText = rgb(49, 49, 46)
#let institutionColor = accentColor

#let stripHttps(url) = url.replace(regex("^https://"), "")

#let iconText(icon, baseline: 2.5pt, body) = [
  #set text(fill: linkColor)
  #box(image(icon, width: 11pt), baseline: baseline) #h(1pt) #body
]

#let sectionTitle(icon, body) = [
  #grid(
    columns: (auto, 1fr),
    gutter: 0.8em,
    align: left + horizon,
    circle(fill: titleColor, inset: 2pt)[
      #box(width: titleIconSize, height: titleIconSize, clip: true, image(
        icon,
        width: titleIconSize,
        height: titleIconSize,
      ))
    ],
    text(titleTextSize, weight: "extrabold", fill: titleColor)[#body],
  )
]

#let employment(job) = [
  #set par(spacing: 0.8em)
  #set list(spacing: 1em)
  #text(11pt, weight: "bold")[#job.company]
  // I only want to change the spacing just above the line so put it in a scoped block
  #[
    #set par(spacing: 6pt)
    #grid(
      columns: (1fr, auto),
      [
        #text(10pt)[#job.title]
      ],
      [
        #text(9pt, fill: jobDateColor)[
          #let endDate = if "monthEnd" in job [
            #job.monthEnd #job.yearEnd
          ] else [
            Present
          ]
          #job.monthStart #job.yearStart - #endDate
        ]
      ],
    )
    #line(length: 100%, stroke: 0.2pt + jobLineColor)
  ]
  #set text(9.5pt, fill: jobDutyColor)
  #for duty in job.duties [
    - #duty
  ]
]

#let skillLabel(name) = {
  let matched = skillsData.find(skill => skill.name == name)
  if matched != none {
    return matched.label
  } else {
    return ""
  }
}

#let skillBlocks(label, skills) = {
  grid(
    columns: (auto, 1fr),
    text(9.5pt, weight: "bold", baseline: 0.5em)[#label: #h(8pt)],
    for skill in skills [
      #set text(8pt, fill: skillText)
      #box(
        fill: skillBackground,
        stroke: (paint: skillBorder, thickness: 0.3pt),
        radius: 4pt,
        inset: 6pt,
        skillLabel(skill),
      )
      #h(4pt)
    ],
  )
}
