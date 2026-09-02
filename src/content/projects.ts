import type { Project } from "@/lib/types";

/**
 * Project portfolio.
 *
 * Featured entries lead with current, self-directed work in real-time media
 * and AI tooling. Entries flagged `archive` are earlier master's coursework,
 * grouped separately so they support the timeline rather than dilute it.
 */
export const projects: Project[] = [
  {
    id: "webrtc-playground",
    title: "WebRTC Playground",
    summary:
      "Two static WebRTC test apps for experimenting with simulcast, codec selection and camera capture — a full sender/receiver call simulated in a single page, with no signalling server.",
    details: [
      "The simulcast playground simulates a complete call in one page by pairing two RTCPeerConnections and exchanging ICE candidates and SDP locally. That removes the need for any signalling or media server and makes the whole tool deployable as static files — at the cost of not being a real network test, which is the trade-off it is designed around.",
      "Adds and removes simulcast layers at runtime and tunes each one independently — maxBitrate, scaleResolutionDownBy, maxFramerate and scalabilityMode — so the effect of a single encoding parameter can be isolated and observed on both the sender and receiver side.",
      "Forces specific codecs across VP8, VP9, AV1 and H.264 and applies degradation preferences, making cross-codec comparisons reproducible in the browser. Received layers can be recorded to WebM for offline inspection.",
      "Polls getStats() periodically and surfaces per-layer bitrate, framerate, quantisation parameter, keyframes and encoder time, turning the browser into a lightweight instrument for encoder behaviour.",
      "The companion camera-controls app enumerates devices and exercises local capture from VGA up to 8K, reporting aspect ratio, framerate and resolution and applying advanced MediaTrack constraints such as exposure and zoom.",
    ],
    category: "Real-Time Media",
    tech: [
      "WebRTC",
      "TypeScript",
      "JavaScript",
      "Simulcast",
      "VP8",
      "VP9",
      "AV1",
      "H.264",
      "getStats",
      "MediaTrack constraints",
    ],
    period: "2026",
    repo: "https://github.com/jackiefasty/webrtc-playground",
    demo: "https://jackiefasty.github.io/webrtc-playground/",
    featured: true,
  },
  {
    id: "multi-agent-framework",
    title: "Multi-Agent AI Development Framework",
    summary:
      "A role-specialised agent system — planner, backend and frontend coders, tester, reviewer — built on an LLM CLI and adopted as a shared team engineering standard.",
    details: [
      "Splits development work across specialised agents with distinct responsibilities and tool access, so planning, implementation, testing and review each run against their own constraints instead of one generalist prompt.",
      "Integrates MCP servers for tool access and RAG retrieval over the codebase, letting agents ground their changes in the repositories they are editing rather than in the prompt alone.",
      "Codifies agent behaviour in a written specification, which made the workflow reviewable and transferable — it was adopted as a shared engineering standard across the team.",
      "Cut an estimated 20+ engineering hours per month of feature lead time on multi-repository work at Elvy (Geofy).",
    ],
    category: "AI Tooling",
    tech: [
      "Python",
      "TypeScript",
      "LLMs",
      "MCP servers",
      "RAG",
      "Agentic workflows",
    ],
    period: "2026",
    featured: true,
  },
  {
    id: "its-interoperability",
    title: "ITS Platform Interoperability Evaluation",
    summary:
      "Comparative evaluation of open-source Intelligent Transport Systems stacks at CTTC / Universitat Politècnica de Catalunya, with findings contributing to a research publication.",
    details: [
      "Designed the comparison methodology and ran the test campaign across open-source Intelligent Transport Systems platforms, assessing how well independent implementations interoperate over shared V2X protocol stacks.",
      "Completed as Bachelor's thesis work; the findings contributed to a research publication.",
    ],
    category: "Research",
    tech: ["C++", "Linux", "ITS protocols", "V2X", "Research methodology"],
    period: "2020",
  },
  {
    id: "orbiteye",
    title: "Orbit Eye",
    summary:
      "An interactive visualisation of artificial satellite orbits built in React, TypeScript and D3, with three linked views over real orbital element data.",
    details: [
      "Built for the Information Visualization course (DT2212) at KTH as a team project, presenting the satellites currently orbiting Earth through three coordinated modes: Orbits, Ground Tracks and Origins.",
      "Combines the Union of Concerned Scientists satellite database with CelesTrak SATCAT and TLE data, processed in Pandas into a form the client can render, and lets users filter and inspect individual satellites.",
      "Rendered with D3 and ThreeJS inside a React and TypeScript application, with the design iterated against a structured UX evaluation.",
    ],
    category: "Data Visualisation",
    tech: [
      "React",
      "TypeScript",
      "D3",
      "ThreeJS",
      "Pandas",
      "Data visualisation",
    ],
    period: "2022",
    repo: "https://github.com/jakifasty/orbiteye",
    demo: "https://www.youtube.com/watch?v=FUG2TbvaDvs",
    image: "/projects/orbiteye_logo.webp",
    gallery: ["/projects/orbiteye_1.webp", "/projects/orbiteye_2.webp"],
    archive: true,
  },
  {
    id: "compound-activity-prediction",
    title: "Chemical Compound Activity Prediction",
    summary:
      "A model comparison study predicting biological activity of chemical compounds, evaluated under stratified k-fold cross-validation with tuned hyperparameters.",
    details: [
      "Compared Random Forest, Multi-Layer Perceptron, Multinomial Naive Bayes and Bernoulli Naive Bayes classifiers on a chemical compound dataset, holding the evaluation protocol constant so the comparison was meaningful.",
      "Used stratified k-fold cross-validation with GridSearchCV for hyperparameter selection, and compared models on ROC/AUC rather than raw accuracy given the class balance.",
      "The Multi-Layer Perceptron trained on the molecular fingerprint representation gave the strongest performance.",
    ],
    category: "Machine Learning",
    tech: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "GridSearchCV",
      "ROC/AUC",
    ],
    period: "2022",
    repo: "https://github.com/jakifasty/ID2214ProgrammingDataScience",
    image: "/projects/datascience_logo.webp",
    gallery: [
      "/projects/datascience_1.webp",
      "/projects/datascience_3.webp",
      "/projects/datascience_4.webp",
    ],
    archive: true,
  },
];
