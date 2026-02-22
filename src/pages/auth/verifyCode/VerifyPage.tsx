import { Button } from "@/components/ui/button";
import { Overlay } from "@/components/common/Overlay";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { otpCodeFormValues } from "@/lib/schemas/otpCode.schema";
import otpCodeSchema from "@/lib/schemas/otpCode.schema";
import { Title } from "@/components/common/Title";
import { useForm } from "react-hook-form";

export default function VerifyPage() {
  const form = useForm<otpCodeFormValues>({
    resolver: zodResolver(otpCodeSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit(data: otpCodeFormValues) {
    console.log("data", data);
  }

  return (
    <div
      className="relative -rotate-180 min-h-screen w-full flex items-center justify-center px-4 sm:p-16 bg-cover bg-center"
      style={{
        backgroundImage: `url("/src/assets/auth/landing.jpg")`,
      }}
    >
      {/* Overlay */}
      <Overlay />
      {/* Card */}
      <Card className="rotate-180 w-full border-none max-w-2xl bg-white/10 backdrop-opacity-10 rounded-3xl shadow-1xl p-12">
        {/* Logo + Title */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/src/assets/auth/logo.png"
            alt="Logo"
            className="w-12 h-12 sm:w-25 sm:h-25 object-contain mb-8"
          />
          <Title title="One More Step" info="we send to you an OTP" />
          <p className="text-xs sm:text-sm text-teal-700 mt-3">
            Time Left: 15:23
          </p>
        </div>
        <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FieldGroup>
              {/* OTP Field */}
              <Field className="w-full mb-3 mt-5">
                <Controller
                  name="otp"
                  control={form.control}
                  rules={{
                    required: "OTP is required",
                    minLength: { value: 4, message: "OTP must be 4 digits" },
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <InputOTP
                        {...field}
                        maxLength={4}
                        pattern={REGEXP_ONLY_DIGITS}
                        onChange={(value: string) => field.onChange(value)}
                        value={field.value}
                      >
                        <InputOTPGroup className="flex justify-center w-full gap-5">
                          {Array.from({ length: 4 }).map((_, i) => (
                            <InputOTPSlot
                              key={i}
                              index={i}
                              className="w-10 h-10 sm:w-14 sm:h-14 text-center text-lg sm:text-xl font-semibold rounded-[10px]! border-2 border-[#097178] bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-600 transition"
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                      {fieldState.error && (
                        <FieldError
                          className="text-center"
                          errors={[fieldState.error]}
                        />
                      )}
                      <p className="text-center text-[#333] mt-5">
                        Didn’t receive OTP?{" "}
                        <span className=" cursor-pointer font-semibold text-[#097178]">
                          Resend Code
                        </span>
                      </p>
                    </>
                  )}
                />
              </Field>
            </FieldGroup>
          </CardContent>
          <CardFooter className="flex flex-col mt-6">
            <Field className="flex flex-col" orientation="horizontal">
              <Button
                type="submit"
                size={"lg"}
                className="cursor-pointer w-full h-14 text-base bg-teal-700 hover:bg-teal-800"
                variant="default"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Verifying..." : "Verify"}
              </Button>
            </Field>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
