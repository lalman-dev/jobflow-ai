export type Application = {
  id: string;
  company: string;
  role: string;
  status: "applied" | "interview" | "rejected";
  date: string;
};
