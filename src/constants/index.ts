import { EnumValues } from "zod";

export type optionType = {
  id: string;
  label: string;
};

export const JOBTYPES: EnumValues = [
  "Full-Time",
  "Part Time",
  "Remote",
  "Intership",
];

export const JOB_APPLICANT_COLOMS: string[] = ["Name", "Applied Date"];

export const JOB_APPLICANT_DATA = [
  {
    name: "Vincent Etwin Mangapul",
    appliedDate: "15 Maret 2024",
  },
];

export const JOB_LISTINGS_COLUMS: string[] = [
  "Roles",
  "Status",
  "Date Posted",
  "Due Date",
  "Job Type",
  "Applicants",
  "Needs",
];

export const JOB_LISTINGS_DATA = [
  {
    roles: "Software Engineer",
    status: "Live",
    datePosted: "5 Maret 2024",
    dueDate: "12 september 2024",
    jobType: "Full-Time",
    applicants: 1,
    needs: 10,
  },
];

export const LOCATION_OPTION: optionType[] = [
  {
    id: "Indonesia",
    label: "Indonesia",
  },
  {
    id: "Malaysia",
    label: "Malaysia",
  },
  {
    id: "Singapura",
    label: "Singapura",
  },
  {
    id: "Thailand",
    label: "Thailand",
  },
];

export const EMPLOYEE_OPTIONS: optionType[] = [
  {
    id: "1-50",
    label: "1-50",
  },
  {
    id: "151-250",
    label: "151-250",
  },
  {
    id: "251-500",
    label: "251-500",
  },
  {
    id: "501-1000",
    label: "501-1000",
  },
  {
    id: "1000-above",
    label: "1000-above",
  },
];
