# Design QA

The redesign uses the Xara snapshot in commit `4661226` as its content source. The 17 original URLs remain available. `index.htm` forwards to `index.html`, which also serves as the default document for `/`.

- A local Python static server returned HTTP 200 for the root, all 18 HTML files, the shared stylesheet, all 102 source images, and all four PDFs. Each image and PDF matched its tracked source file.
- Chrome rendered all 17 content pages at 320, 390, 768, and 1440 CSS pixels without horizontal overflow or console errors. The homepage was visually reviewed at 390 and 1440 CSS pixels.
- Browser interactions verified the legacy homepage redirect, the keyboard skip link, the rehearsal link on the homepage, the three mobile choir links, full-size image navigation, and byte-identical downloads of the old statute, draft statute, chronicle, and Tabaluga flyer.
- Static checks verified heading and main landmarks, document nesting, image attributes, and all local URL and fragment targets. The tested text and background combinations had a minimum contrast ratio of 5.80:1.

The event schedule, roles, and contact details reflect the supplied snapshot, including differences between the choir leadership page and the historical timeline.
