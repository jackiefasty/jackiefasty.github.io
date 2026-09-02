import type { Education, Language } from "@/lib/types";

/** Degrees, newest first. */
export const education: Education[] = [
  {
    id: "kth",
    degree: "MEng",
    field: "ICT Innovation — Visual Computing track",
    institution: "KTH Royal Institute of Technology",
    location: "Stockholm, Sweden",
    period: "2021 – 2023",
  },
  {
    id: "upf",
    degree: "BEng",
    field: "Audiovisual Systems Engineering of Telecommunications",
    institution: "Universitat Pompeu Fabra",
    location: "Barcelona, Spain",
    period: "2015 – 2020",
  },
];

/** Spoken languages with CEFR levels where applicable. */
export const languages: Language[] = [
  { name: "Spanish", level: "Native" },
  { name: "Catalan", level: "Native" },
  { name: "English", level: "C1 — professional" },
  { name: "Swedish", level: "B1" },
  { name: "French", level: "A1" },
];
