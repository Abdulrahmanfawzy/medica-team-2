import { z } from "zod";

// Step A: Visit Type
export const stepA = z.object({
  visitType: z.enum(["clinic", "online"], { message: "Please select visit type" }),
});

// Step B: Date & Time
export const stepB = z.object({
  date: z.coerce.date({ message: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
});

// Step C: Personal / Other Info
export const stepC = z.discriminatedUnion("for", [
  z.object({
    for: z.literal("myself"),
    fullName: z.string().min(1, "Full name required"),
    phoneNumber: z.string().min(1, "Phone number required"),
    emailAddress: z.string().email("Invalid email"),
    reasonForVisit: z.string().min(1, "Reason required"),
  }),
  z.object({
    for: z.literal("others"),
    patientName: z.string().min(1, "Patient name required"),
    gender: z.enum(["male", "female"]),
    dateOfBirth: z.coerce.date({ message: "Select DOB" }),
    relation: z.string().min(1, "Relation required"),
  }),
]);