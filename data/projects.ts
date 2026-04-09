export type SystemProject = {
  id: string;
  title: string;
  summary: string; // 1 sentence — used on home page cards
  description: string; // 2–3 sentences — used on systems page
  whyBuilt: string; // 1–2 sentences
  howItWorks: string[]; // ordered steps
  keyDecisions: string[]; // design choices
};

export type CaseStudy = {
  id: string;
  title: string;
  summary: string; // 1 sentence — used on home page cards
  context: string; // 1–2 sentences
  problem: string; // 1–2 sentences
  whatIDid: string[]; // bullet points of concrete actions
  outcome: string; // 1–2 sentences
};

export const systems: SystemProject[] = [
  // ⚠️ OWNER TO FILL IN — see docs/spec.md Section 11
];

export const caseStudies: CaseStudy[] = [
  // ⚠️ OWNER TO FILL IN — see docs/spec.md Section 11
];
