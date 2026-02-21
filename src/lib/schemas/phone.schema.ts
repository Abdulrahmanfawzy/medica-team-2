import { z } from "zod";

const phoneSchema = z.object({
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^\d{8,15}$/,
      "Phone number must contain only numbers (8-15 digits)",
    ),
});

export default phoneSchema;
export type PhoneValues = z.infer<typeof phoneSchema>;
