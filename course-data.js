 // Define course sessions and metadata for the timetable layout. 
 // The schedule is defined as a matrix of session indices, which allows the visual layout to be manually arranged while keeping the underlying session metadata in one place.
window.courseData = {
  sessions: [
    { title: "Welcome and introductions", speaker: "Stefan Flasche", content: "This opening session introduces participants, faculty, and the overall structure of the short course. We also provide a practical orientation to Excel and R workflows that will be used throughout the hands-on components." },
    { title: "Outbreak response I", speaker: "Hugo Soubrier", content: "We cover key delay distributions used in outbreak analytics, including reporting delays, incubation periods, and serial intervals. The session focuses on how these quantities shape interpretation of surveillance data in real time." },
    { title: "Outbreak response II", speaker: "Hugo Soubrier", content: "We introduce nowcasting, time-varying reproduction numbers, and short-term forecasting for operational decision support. Participants will learn how these methods connect to actionable outbreak response planning." },
    { title: "Practical", speaker: "Hugo Soubrier & Lukas Hemmers-Pauly", content: "Participants implement renewal-equation-based outbreak models and work with tools such as EpiEstim. The practical emphasizes translating incidence data into interpretable transmission metrics." },
    { title: "Serological models I", speaker: "David Hodgson", content: "This session introduces population-level serological modeling, with a focus on catalytic models. We discuss how seroprevalence by age can be used to infer transmission intensity over time." },
    { title: "Practical", speaker: "David Hodgson & Augustine Masinde", content: "Participants estimate age-dependent force of infection from serological data. The exercise emphasizes model assumptions, parameter interpretation, and quality checks." },
    { title: "Serological models II", speaker: "David Hodgson", content: "We move to individual-level serological models to infer infection histories from longitudinal data. The session highlights how repeated measurements improve inference on immune dynamics." },
    { title: "Practical", speaker: "David Hodgson & Lucy Mbone Ingaiza", content: "Participants infer IgG dynamics for RSV using data from The Gambia. The practical focuses on linking antibody trajectories to infection and exposure processes." },
    { title: "SIR and SIS models", speaker: "Julia Mayer", content: "This session introduces the foundations of SIR and SIS models, including the meaning of R0 and Re. We build intuition for threshold behavior and epidemic control in simple compartmental systems." },
    { title: "Practical", speaker: "Julia Mayer & Lucy Mbone Ingaiza", content: "Participants explore a simple transmission model to test R0-based threshold concepts. The practical reinforces how parameter changes alter epidemic trajectories." },
    { title: "Model choice", speaker: "Julia Mayer", content: "We compare deterministic and stochastic models, difference and differential equations, dynamic and static frameworks, and individual-based models. The session discusses when each model class is most appropriate for policy-relevant questions." },
    { title: "Practical", speaker: "Julia Mayer & Lucy Mbone Ingaiza", content: "Participants run and compare stochastic model variants to understand variability and uncertainty. The exercise emphasizes interpretation beyond single deterministic trajectories." },
    { title: "Heterogeneity I: age", speaker: "Billy Quilty", content: "We examine age-structured transmission using contact matrices, including POLYMOD-style data. The session shows how age mixing patterns influence reproduction numbers and intervention impact." },
    { title: "Practical", speaker: "Billy Quilty & Lukas Hemmers-Pauly", content: "Participants identify which age groups drive transmission under age-dependent mixing assumptions. The practical links contact structure directly to R0 and targeted control strategies." },
    { title: "Heterogeneity II: space, risk & networks", speaker: "Dirk B?", content: "This session broadens transmission heterogeneity beyond age, covering spatial mixing through gravity and commuter-based models, risk-group structured mixing, and contact network topology. We also introduce superspreading and overdispersion in transmission, and discuss how movement, risk behaviour, network structure, and superspreading events jointly reshape transmission risk and control strategies." },
    { title: "Practical", speaker: "Dirk B?", content: "tbd" },
    { title: "Fitting a model", speaker: "David Hodgson", content: "We introduce objective functions and metrics for model calibration, with emphasis on likelihood-based inference. The session explains why likelihood is useful and how optimization is used to estimate parameters." },
    { title: "Practical", speaker: "David Hodgson & Dexin Gong", content: "Participants compute likelihoods and fit a simple transmission model to data. The practical focuses on implementation details and diagnostics of fit quality." },
    { title: "Identifying a fit model", speaker: "David Hodgson", content: "We review model fit diagnostics, including trace plots and Rhat, and signs that inference needs adjustment. The session also contrasts overfitting and underfitting in applied infectious disease modeling." },
    { title: "Practical", speaker: "David Hodgson & Dexin Gong", content: "Participants work with intentionally poorly fitting models and iteratively improve them. The exercise develops intuition for practical tuning and troubleshooting." },
    { title: "Vaccine models", speaker: "Stefan Flasche", content: "This lecture will cover conceptual differences in how vaccine protection can be included in mathematical models and their implications for population protection.<br><br>At the end of the lecture the students should understand:<ul><li>The differences in modelling all or nothing and leaky vaccine protection</li><li>The differences in modelling vaccine protection against infection and disease</li><li>How to model waning of vaccine protection</li><li>Drivers of indirect protection from vaccination</li><li>Other indirect effects of vaccination</li></ul><br><strong>Resources:</strong> <a href='assets/session%20materials/Vaccines/lecture-slides.html' target='_blank'>Lecture Slides</a>" },
    { title: "Practical", speaker: "Stefan Flasche & Augustine Masinde", content: "In this practical students will explore the effects of vaccination in mathematical model using the example of influenza vaccination in children. <br><br>By the end of the practical will have:<ul><li> Explored how vaccination can be integrated into a model</li><li> Estimated the effect of coverage and indirect protection on vaccine impact</li><li> Compared alternative vaccination strategies and explored the susceptibility of impact estimates to key model assumptions</li></ul><br><strong>Resources:</strong> <a href='assets/session%20materials/Vaccines/practical-guide.html' target='_blank'>Interactive Worksheet</a>" },
    { title: "Health Economics I", speaker: "Gesine Meyer-Rath", content: "Principles of health economic evaluation: We introduce core health economic evaluation methods including metrics such as QALY, DALY, and ICER, as well as the basic principles of health financing. The first practical connects epidemiological model outputs to economic decision-making, while the second practical uses simple cost analysis to estimate the budget needed for the introduction of a new health intervention." },
    { title: "Practical", speaker: "Gesine Meyer-Rath & Julia Mayer", content: "Designing and interpreting an economic evaluation" },
    { title: "Identifying a good model", speaker: "Stefan Flasche", content: "We use the WHO IVIR framework to assess model quality, transparency, and policy relevance. The session provides a structured approach to judging whether a model is fit for decision support." },
    { title: "Group work I", speaker: "Stefan Flasche", content: "Participants form groups, define topics, and start scoping their modeling question. The session sets expectations for outputs and group workflow." },
    { title: "Health Economics II", speaker: "Gesine Meyer-Rath", content: "Principles of health financing" },
    { title: "Practical", speaker: "Gesine Meyer-Rath & Julia Mayer", content: "Budget impact analysis" },
    { title: "Climate sensitive models", speaker: "Matthieu Domenech de Cellès", content: "tbd" },
    { title: "Practical", speaker: "Matthieu Domenech de Cellès & Cana Kussmaul", content: "tbd" },
    { title: "Accesible and collaborative modeling", speaker: "Julia F?", content: "We review the Lancet Commission perspective and reporting guidelines for transparent and reproducible modeling. The session emphasizes communication standards that improve trust and uptake." },
    { title: "Group work II", speaker: "Stefan Flasche & Gesine Meyer-Rath", content: "Groups discuss key insights from assigned readings and refine their project direction. The session supports peer feedback and stronger framing of policy questions." },
    { title: "Phylogenetic inference", speaker: "Matej Kriznar", content: "We introduce the principles of phylogenetic inference and how sequence data can inform transmission modeling. The session highlights where phylogenetics adds value and where limits remain." },
    { title: "Practical", speaker: "Matej Kriznar & Kaige Dong", content: "Participants work through a simple phylogenetic modeling example. The exercise focuses on interpretation of outputs for epidemiological use." },
    { title: "AI and the future of models", speaker: "Billy Quilty", content: "tbd" },
    { title: "Group work III", speaker: "Stefan Flasche", content: "Groups prepare policy-facing presentations for the following day. The session focuses on clear argumentation, assumptions, and uncertainty communication." },
    { title: "Group presentations I", speaker: "Stefan Flasche", content: "Groups present their work in a NITAG-style discussion format. Feedback centers on technical quality, relevance, and clarity for decision-makers." },
    { title: "Group presentations II", speaker: "Stefan Flasche", content: "Additional groups present and discuss findings in a NITAG-style format. The session emphasizes constructive critique and synthesis across projects." },
    { title: "Use and abuse of models", speaker: "Frank Sandmann", content: "This closing lecture reflects on responsible and irresponsible uses of models in public health. We discuss common pitfalls, misuse in communication, and practical safeguards." },
    { title: "End of course & MC exam", speaker: "Stefan Flasche", content: "The final session closes the course, awards certificates, and summarizes key take-home messages. Participants reflect on next steps for applying methods in their own work." }
  ],

  dates: [
    "19 April", "20 April", "21 April", "22 April", "23 April",
    "26 April", "27 April", "28 April", "29 April", "30 April"
  ],

  weekSections: [
    { title: "Week 1: 19-23 April", rows: [0, 1, 2, 3, 4], theme: "blue" },
    { title: "Week 2: 26-30 April", rows: [5, 6, 7, 8, 9], theme: "gold" }
  ],

  breakLetters: ["B", "R", "E", "A", "K"],
  lunchLetters: ["L", "U", "N", "C", "H"],

  // The timetable layout is intentionally defined by a day-by-day matrix rather than by
  // the original array order. Each row corresponds to a day, and each cell points to a
  // session index. This allows the visual layout to be manually arranged while keeping
  // the underlying session metadata in one place.
  schedule: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [16, 17, 18, 19],
    [12, 13, 24, 25],
    [20, 21, 22, 23],
    [26, 27, 30, 31],
    [28, 29, 14, 15],
    [32, 33, 34, 35],
    [36, 37, 38, 39]
  ]
};
