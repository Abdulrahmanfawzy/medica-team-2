
import { z } from "zod";

const signUpSchema = z.object({
    name: z
    .string()
    .nonempty("Name is required.")
    .min(3, "Name must be at least 3 characters.")
    .max(30, "Name must not exceed 30 characters.")
    .regex(/^[A-Za-z\s]+$/, "Name must contain only letters."),
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Please enter a valid email address."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character."
    ),
});

export default signUpSchema;
export type signUpFormValues = z.infer<typeof signUpSchema>;

