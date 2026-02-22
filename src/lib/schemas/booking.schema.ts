import { z } from "zod";

// Step A: Visit Type
export const stepA = z.object({
  visitType: z.enum(["clinic", "online"], {
    message: "Please select visit type",
  }),
});

// Step B: Date & Time
export const stepB = z.object({
  date: z.coerce.date({ message: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
});


// Step C: Others && Myself
// Phase 1 fields for "others"
const othersPhase1 = z.object({
  phase: z.literal(1),
  fullName: z.string().min(1, "Full name required"),
  gender: z.enum(["male", "female"], { message: "Select gender" }),
  dateOfBirth: z.string({ message: "Select DOB" }),
  reasonForVisit: z.string().min(1, "Reason required"),
});

// Phase 2 fields for "others"
const othersPhase2 = z.object({
  phase: z.literal(2),
  fullName: z.string().min(1, "Full name required"),
  phoneNumber: z.string().min(1, "Phone number required"),
  emailAddress: z.string().email("Invalid email"),
  relation: z.string().min(1, "Relation required"),
});

//  phases
const othersUnion = z.discriminatedUnion("phase", [othersPhase1, othersPhase2]);

// Main schema
export const stepC = z.discriminatedUnion("for", [
  // Myself
  z.object({
    for: z.literal("myself"),
    fullName: z.string().min(1, "Full name required"),
    phoneNumber: z.string().min(1, "Phone number required"),
    emailAddress: z.string().email("Invalid email"),
    reasonForVisit: z.string().min(1, "Reason required"),
  }),

  // Others
  z.object({
    for: z.literal("others"),
    details: othersUnion,
  }),
]);

export const newMember = z.object({
  fullName: z.string().min(1, "Full name required"),
  phoneNumber: z.string().min(1, "Phone number required"),
  emailAddress: z.string().email("Invalid email"),
  relation: z.string().min(1, "Relation required"),
});