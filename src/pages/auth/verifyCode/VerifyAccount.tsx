import { Phone } from "lucide-react";
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
import type { PhoneValues } from "@/lib/schemas/phone.schema";
import phoneSchema from "@/lib/schemas/phone.schema";
import { Overlay } from "@/components/common/Overlay";
import { Title } from "@/components/common/Title";
import { Link } from "react-router-dom";

export default function VerifyAccount() {
  const form = useForm<PhoneValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: "",
    },
  });

  function onSubmit(data: PhoneValues) {
    console.log("Valid phone:", data.phone);
  }

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url("/src/assets/auth/landing.jpg")`,
      }}
    >
      {/* Overlay */}
      <Overlay />
      {/* Card */}
      <div className=" w-full max-w-2xl bg-white/10 backdrop-opacity-10 rounded-3xl shadow-1xl p-12">
        {/* Logo + Title */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/src/assets/auth/logo.png"
            alt="Logo"
            className="w-12 h-12 sm:w-25 sm:h-25 object-contain mb-8"
          />
          <Title
            title="Verify Account"
            info="Enter your phone to receive OTP to Verify Your Account."
          />
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-10"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => {
                const { onChange, ...restField } = field;

                return (
                  <FormItem>
                    <FormLabel className="text-[#333] text-[16px] font-semibold">
                      Phone Number
                    </FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 h-4 w-5 text-gray-500" />

                        <Input
                          {...restField}
                          placeholder="Enter Your Phone Number"
                          inputMode="numeric"
                          className="pl-9 text-[#333] font-semibold h-10 sm:h-11 bg-white text-sm rounded-md"
                          onChange={(e) =>
                            onChange(e.target.value.replace(/\D/g, ""))
                          }
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Link to="/verify-otp">
              <Button
                type="submit"
                className="cursor-pointer w-full h-14 text-base bg-teal-700 hover:bg-teal-800"
              >
                Continue
              </Button>
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
}
