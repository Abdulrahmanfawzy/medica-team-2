import { z } from "zod";

export const forgetPasswordSchema = z.object({
  emailOrPhone: z
    .string()
    .min(1, "Email or phone is required")
    .refine(
      (value) => {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        const isPhone = /^\d{8,15}$/.test(value);
        return isEmail || isPhone;
      },
      {
        message: "Enter a valid email or phone number (8-15 digits)",
      },
    ),
});

export default forgetPasswordSchema;
export type forgetPasswordFormValues = z.infer<typeof forgetPasswordSchema>;
