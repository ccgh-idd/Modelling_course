# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective participants (epidemiologists and health professionals who want to review models critically, and data scientists who want to build infectious disease models) decide whether to apply. Enrolled participants use the timetable during the course to find sessions, learning objectives and materials. Students of the Charité MSc in International Health (MScIH) take the course as a module. Faculty check their sessions and the overall programme.

## Product Purpose

The website of the short course "Infectious Disease Dynamics: Data Analytics and Mathematical Modelling" (course.ccgh-idd.de), run by the IDD group at the Charité Center for Global Health. It explains what the course covers and who it is for, and serves as the working timetable during the course.

## Positioning

A two-week, 3 ECTS course in Berlin (next run 19 to 30 April 2027) that takes participants from surveillance data and transmission concepts to model fitting, interpretation and policy-relevant communication, through lectures, hands-on R practicals and group work, taught by IDD faculty and invited modellers. It also runs as a module of the Charité MSc in International Health (confirmed).

## Operating Context

Prospective participants arrive from the IDD site, CCGH and MScIH pages or colleagues. During the course, participants open the timetable daily, often on phones, to select a session and see its objectives and materials. Content is edited in `course-data.js` (sessions) and `faculty-data.js` (faculty).

## Capabilities and Constraints

- Static HTML (inline CSS and JS), `course-data.js`, `faculty-data.js` on GitHub Pages; no build step.
- Sections: hero with a live SIR chart, about, timetable (lecture, practical, group work; per-day rows; session pop-ups with objectives and materials; "tbd" sessions show a placeholder sentence), faculty grid with pop-ups.
- Applying is by email to a course contact. Open: the contact address is not yet on the site and has not been supplied; fees and deadlines are not published.
- GDPR: no third-party fonts or tracking; any web font must be self-hosted.
- Cache-busting: bump the `?v=` query on any changed CSS or JS file.
- Faculty titles confirmed (October 2026): Prof. Gesine Meyer-Rath (BU Research Professor), Prof. Johannes Bracher (KIT tenure-track professor), Dr Matthieu Domenech de Cellès, Dr Frank Sandmann. "Dr" without a full stop, "Prof." with one.
- Open: Adriana Tibaduiza Torres is listed as faculty but teaches no session; Frank Sandmann's photo has built-in white bars and needs replacing.

## Brand Commitments

- Official spelling "Charité Center for Global Health"; CCGH navy `#002552` with teal `#0d9aa9` (`#0a7682` for small text), shared with the IDD site.
- Titles (Prof., Dr.) on faculty cards; plain names in running text; no middle names except Adriana Tibaduiza Torres.
- UK English, plain register, no em dashes, no marketing clichés.
- The user has made a minimal, professional direction binding across the three sister sites (IDD, B-IDDE, course): no gradients, drop shadows, glass, pills, hover lifts, scroll reveals, eyebrow labels, side-tab borders, icon tiles or numbered section labels; system font stack with semibold headings (a self-hosted title font is undecided; no serif).

## Evidence on Hand

The full timetable, session objectives and materials, faculty profiles and photos (`assets/`). There are no participant testimonials, completion figures or ratings, and none should be invented.

## Product Principles

- A prospective participant can tell within one screen what the course is, when it runs, who it suits and how to apply.
- During the course, the right session and its materials are one tap away, including on a phone.
- Course content stays editable in two plain data files.
- Restraint over decoration; the site reads as part of the same family as IDD and B-IDDE.
