import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Title } from "@/components/common/Title";
import { Overlay } from "@/components/common/Overlay";
import { useNavigate } from "react-router-dom";
import type { forgetPasswordFormValues } from "@/lib/schemas/forgetPassword.schema";
import forgetPasswordSchema from "@/lib/schemas/forgetPassword.schema";

export default function ForgetPasswordPage() {
  const navigate = useNavigate();
  const form = useForm<forgetPasswordFormValues>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      emailOrPhone: "",
    },
  });

  function onSubmit(data: forgetPasswordFormValues) {
    console.log("data", data);
    navigate("/verify-account");
  }

  return (
    <div
      className="relative -rotate-180 min-h-screen w-full flex items-center justify-center px-4 sm:p-16  bg-cover bg-center"
      style={{
        backgroundImage: `url("/src/assets/auth/landing.jpg")`,
      }}
    >
      {/* Overlay */}
      <Overlay />
      {/* Card */}
      <div className="rotate-180 w-full max-w-2xl bg-white/10 backdrop-opacity-10 rounded-3xl shadow-1xl  p-12">
        {/* Logo + Title */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/src/assets/auth/logo.png"
            alt="Logo"
            className="w-12 h-12 sm:w-25 sm:h-25 object-contain mb-10"
          />
          <Title
            title="Forget Password"
            info="Enter your email or phone to receive OTP."
          />
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-5 mt-14"
          >
            <FormField
              control={form.control}
              name="emailOrPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#333] text-[16px] font-semibold">
                    Email or Phone Number
                  </FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        placeholder="Enter Email or Phone Number"
                        className=" h-10 sm:h-11 bg-white text-sm rounded-md"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Continue Button */}
            <Button
              type="submit"
              className="cursor-pointer w-full h-10 sm:h-11 bg-teal-700 hover:bg-teal-800 text-sm sm:text-base"
            >
              Continue
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
