import { z } from "zod";

const otpCodeSchema = z.object({
  otp: z
    .string()
    .min(4, "OTP must be 4 digits")
    .max(4, "OTP must be 4 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"), // only digits
});

export default otpCodeSchema;
export type otpCodeFormValues = z.infer<typeof otpCodeSchema>;
