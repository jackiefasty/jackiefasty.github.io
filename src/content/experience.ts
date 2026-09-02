import type { Experience } from "@/lib/types";

/**
 * Professional history.
 *
 * The order of this array is not significant: `experiences` below sorts by end
 * date so the timeline is always newest first. Achievement bullets keep the
 * CV's result-first phrasing, where the measurable outcome leads and the
 * method follows. Every figure is traceable to the CV.
 */
const roles: Experience[] = [
  {
    id: "google-meet",
    role: "Senior Software Engineer",
    company: "HCLTech Sweden AB / Codemill AB",
    client: "Google Sweden AB",
    location: "Stockholm, Sweden",
    period: "Sep 2023 – May 2026",
    start: "2023-09-01",
    end: "2026-05-31",
    type: "Full-time",
    summary:
      "Embedded engineer in the Google Meet Video team, working directly on real-time video quality at global scale. Hired by Codemill AB, whose team transferred to HCLTech Sweden AB in a business transfer during my tenure. Promoted from Software Engineer to Senior after 16 months.",
    achievements: [
      "Improved compression efficiency and end-to-end latency in Google Meet for hundreds of millions of users, by running codec testing and parameter tuning across VP8, VP9 and AV1 against objective video quality targets.",
      "Cut video codec test cycle time by 30% and expanded coverage with 50+ new test cases spanning VP8 and AV1, by designing and automating the regression testing pipeline in Python.",
      "Improved real-time communication reliability under packet loss and constrained bandwidth, by tuning WebRTC internals in production C++ code: bandwidth estimation, jitter buffer behaviour and congestion control.",
      "Enabled reliable media processing and format handling across the team's test and analysis tooling, by integrating FFmpeg and GStreamer pipelines for transcoding, container handling and stream ingest.",
      "Reached 87–92% accuracy in video quality prediction, by tuning ML model parameters and rebuilding the training and evaluation loop in Python.",
      "Drove OKR planning for H1/H2 2025 across 4 concurrent projects, by running 1:1s and weekly syncs and authoring quarterly and annual reviews presented to Google stakeholders.",
      "Reduced ramp-up time for new team members, by driving recruitment and onboarding and mentoring 2 junior engineers through their first 3 months.",
    ],
    tech: [
      "C++",
      "Python",
      "WebRTC",
      "libwebrtc",
      "VP8",
      "VP9",
      "AV1",
      "FFmpeg",
      "GStreamer",
      "ML",
    ],
    featured: true,
  },
  {
    id: "elvy-geofy",
    role: "Senior Software Engineer",
    company: "Elvy AB (Geofy)",
    location: "Stockholm, Sweden",
    period: "May 2026 – Aug 2026",
    start: "2026-05-01",
    end: "2026-08-31",
    type: "Full-time",
    summary:
      "Backend, infrastructure and full-stack ownership at an early-stage energy subscription provider. Role eliminated in a company-wide budget reduction.",
    achievements: [
      "Delivered a production installer portal plus adjacent admin dashboards in 4 weeks, onboarding 30+ installers, by owning technical design through release across 4 repositories (Next.js frontends, Python/FastAPI backend) with role-scoped JWT authorisation and a lead → approval → credential-issuance flow validated in a 2-installer pilot.",
      "Eliminated broad service-account access from client applications following a security review, by moving password hashing and datastore writes behind a single authenticated server-side REST endpoint.",
      "Migrated communications and installer data from Firestore to a 10+ table PostgreSQL schema on Cloud SQL with no downtime, by designing the relational model around a shared person entity and building one-time backfill tooling, and managed all GCP infrastructure (Cloud Run, IAM, Firestore) as code with Terraform.",
      "Reduced feature lead time on multi-repository work by an estimated 20+ engineering hours per month, by designing a multi-agent AI development workflow (LLMs, MCP servers, RAG retrieval, specialised planner/coder/reviewer agents) and codifying it as a shared team engineering standard.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Terraform",
      "GCP",
      "Cloud Run",
      "LLMs",
    ],
  },
  {
    id: "kth-ta",
    role: "Teaching Assistant",
    company: "KTH Royal Institute of Technology",
    location: "Stockholm, Sweden",
    period: "Mar 2023 – Sep 2024",
    start: "2023-03-01",
    end: "2024-09-30",
    type: "Part-time",
    summary:
      "Taught lab sessions on the Computer Graphics and Database Technology master's courses.",
    achievements: [
      "Supported approximately 30 master's students per semester in Computer Graphics (C++, C#) and Database Technology (Python), by running lab sessions and delivering structured code review feedback.",
    ],
    tech: ["C++", "C#", "Python", "SQL"],
  },
  {
    id: "telenor",
    role: "Data Scientist Intern (Master's Thesis)",
    company: "Telenor Sweden AB",
    location: "Stockholm, Sweden",
    period: "Jan 2023 – Sep 2023",
    start: "2023-01-01",
    end: "2023-09-30",
    type: "Internship",
    summary:
      "Master's thesis work predicting support case resolution time from CRM history.",
    achievements: [
      "Cut average diagnosis effort for TV support teams by 74–86% depending on model, by building and evaluating ML models in Python/SQL on AWS that predict case resolution time from CRM ticket history.",
    ],
    tech: ["Python", "SQL", "AWS", "Machine Learning"],
  },
  {
    id: "edgeware",
    role: "Test Engineer Intern",
    company: "Agile Content / Edgeware AB",
    location: "Stockholm, Sweden",
    period: "Jun 2022 – Oct 2022",
    start: "2022-06-01",
    end: "2022-10-31",
    type: "Internship",
    summary:
      "Test automation for C++ media streaming components in a CDN and video delivery product.",
    achievements: [
      "Reduced manual test execution by 20% for C++ media streaming components, by writing automated Python test cases integrated into Jenkins CI.",
    ],
    tech: ["Python", "C++", "Jenkins", "Media streaming"],
  },
  {
    id: "worldline",
    role: "Automation Testing & QA Engineer",
    company: "Worldline Global S.A.",
    location: "Barcelona, Spain",
    period: "Feb 2021 – Sep 2021",
    start: "2021-02-01",
    end: "2021-09-30",
    type: "Full-time",
    summary:
      "Regression and API test automation across payment platforms and mobile clients.",
    achievements: [
      "Cut manual regression testing time by 30% across payment APIs and mobile clients, by automating test suites in Cucumber (Ruby) and Python.",
      "Caught 20+ critical defects before release, by building Postman-based API validation and regression coverage for payment flows.",
    ],
    tech: ["Python", "Ruby", "Cucumber", "Postman", "REST APIs"],
  },
  {
    id: "cttc",
    role: "Research Intern",
    company: "CTTC / Universitat Politècnica de Catalunya",
    location: "Castelldefels, Spain",
    period: "Dec 2019 – Jul 2020",
    start: "2019-12-01",
    end: "2020-07-31",
    type: "Research",
    summary:
      "Bachelor's thesis research on Intelligent Transport Systems interoperability.",
    achievements: [
      "Evaluated interoperability across open-source Intelligent Transport Systems platforms as Bachelor's thesis work, by designing the comparison methodology and running the test campaign.",
    ],
    tech: ["C++", "Linux", "ITS protocols", "Research methodology"],
  },
  {
    id: "cellnex",
    role: "Broadcast Engineering Intern",
    company: "Cellnex Telecom S.A.",
    location: "Barcelona, Spain",
    period: "Mar 2019 – Sep 2019",
    start: "2019-03-01",
    end: "2019-09-30",
    type: "Internship",
    summary:
      "RF planning support for Spain's Second Digital Dividend frequency migration.",
    achievements: [
      "Delivered RF and signal coverage calculations across 350+ broadcast stations for Spain's Second Digital Dividend frequency migration, supporting DTT emission legalisation projects.",
    ],
    tech: ["RF planning", "DTT", "Signal coverage analysis"],
  },
];

/** Sentinel for an ongoing role, so it sorts ahead of every finished one. */
const ONGOING = "9999-12-31";

/**
 * Professional history, sorted newest first by end date.
 *
 * Sorting rather than trusting the array order matters here because the
 * tenures overlap: the Google Meet role ran to May 2026 while Elvy ran May to
 * August 2026, so the CV's order is not the chronological one.
 */
export const experiences: Experience[] = [...roles].sort((a, b) =>
  (b.end ?? ONGOING).localeCompare(a.end ?? ONGOING),
);
