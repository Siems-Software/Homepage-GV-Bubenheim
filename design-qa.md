# Design QA

- Reference: [GV Bubenheim](https://www.gv-bubenheim.de/).
- Source capture: the homepage at the default desktop viewport, the open choir menu, and the homepage at a 390 × 844 CSS pixel viewport. The source uses a 760 CSS pixel layout, which clips horizontally at the narrow viewport.
- Implementation capture: unavailable. The browser could not connect to the local preview. There is no matched pair of screenshots, so the visual comparison and interactive browser checks remain open.
- Independent verification: the 156 files and the root URL all returned HTTP 200 from a local Python HTTP server. Each response matched the SHA-256 value of the corresponding original response. The four PDF responses also passed media type and file signature checks.
- Source gaps: four EOT fonts listed in the Xara file list returned HTTP 404. The available WOFF fonts are present. Two stylesheet names mentioned only in an inactive legacy script branch also returned HTTP 404.

final result: blocked
