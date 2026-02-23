import { z } from "zod";

// Step A: Visit Type
export const stepA = z.object({
  visitType: z.enum(["clinic", "online"], {
    message: "Please select visit type",
  }),
});

// Step B: Date & Time
export const stepB = z.object({
  date: z.string({ message: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
});

// Step C: Others && Myself
export const othersPhase1 = z.object({
  fullName: z.string().min(1, "Full name required"),
  gender: z.enum(["male", "female"], { message: "Select gender" }),
  dateOfBirth: z.string().min(1, "Select DOB"),
  reasonForVisit: z.string().min(1, "Reason required"),
});

export const othersPhase2 = z.object({
  fullName: z.string().min(1, "Full name required"),
  phoneNumber: z.string().min(1, "Phone number required"),
  emailAddress: z.string().email("Invalid email"),
  relation: z.string().min(1, "Relation required"),
});

export const myselfSchema = z.object({
  fullName: z.string().min(1, "Full name required"),
  phoneNumber: z.string().min(1, "Phone number required"),
  emailAddress: z.string().email("Invalid email"),
  reasonForVisit: z.string().min(1, "Reason required"),
});

export const newMember = z.object({
  fullName: z.string().min(1, "Full name required"),
  phoneNumber: z.string().min(1, "Phone number required"),
  emailAddress: z.string().email("Invalid email"),
  relation: z.string().min(1, "Relation required"),
});
