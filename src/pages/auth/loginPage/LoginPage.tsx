import { Mail, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import loginSchema, { type LoginValues } from "@/lib/schemas/login.schema";
import { Separator } from "@/components/ui/separator";
import { Title } from "@/components/common/Title";
import { Overlay } from "@/components/common/Overlay";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginValues) {
    console.log("Login Data:", data);
  }

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:p-16 bg-cover bg-center"
      style={{
        backgroundImage: `url("/src/assets/auth/landing.jpg")`,
      }}
    >
      {/* Overlay */}
      <Overlay />
      {/* Card */}
      <div className=" w-full max-w-2xl bg-white/10 backdrop-opacity-10 rounded-3xl shadow-1xl px-12 py-4">
        {/* Logo + Title */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/src/assets/auth/logo.png"
            alt="Logo"
            className="w-12 h-12 sm:w-25 sm:h-25 object-contain"
          />
          <Title
            title="Welcome Back!"
            info="Enter your email and password to access your account."
          />
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-5 mt-14"
          >
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#333] text-[16px] font-semibold">
                    Email or Phone Number
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        placeholder="Enter Email or Phone Number"
                        className="text-[#333] pl-9 h-10 sm:h-11 bg-white text-sm rounded-md"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#333] mt-4 text-[16px] font-semibold">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                      <Input
                        type="password"
                        placeholder="Password"
                        className="text-[#333] pl-9 h-10 sm:h-11 bg-white text-sm rounded-md"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Remember + Forgot */}
            <div className="flex items-center mt-8 justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Checkbox
                  className="cursor-pointer border-[#097178]"
                  id="remember"
                />
                <label
                  htmlFor="remember"
                  className="cursor-pointer font-semibold text-[#333]"
                >
                  Remember Me
                </label>
              </div>
              <Link to="/forget-password">
                <button
                  type="button"
                  className="cursor-pointer text-teal-800 hover:underline"
                >
                  Forgot password?
                </button>
              </Link>
            </div>

            {/* Login Button */}
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="mt-6 cursor-pointer w-full h-10 sm:h-11 bg-teal-700 hover:bg-teal-800 text-sm sm:text-base"
            >
              {form.formState.isSubmitting ? "Logging in..." : "Login"}
            </Button>

            {/* Divider */}
            <div className="flex items-center mt-3 gap-3">
              <Separator className="flex-1 h-px bg-[#666]" />
              <span className="text-xs sm:text-sm text-gray-600">OR</span>
              <Separator className="flex-1 h-px bg-[#666]" />
            </div>

            {/* Social Btns */}
            <div className="flex justify-center gap-3 sm:gap-4">
              <Button
                className="w-[56px] p-[10px] h-[56px] rounded-full cursor-pointer"
                variant={"outline"}
                type="submit"
                size={"icon-sm"}
              >
                <img
                  className="w-[24px] h-[24px]"
                  src="src/assets/auth/google.png"
                  alt="google button"
                />
              </Button>
              <Button
                className="w-[56px] p-[10px] h-[56px] rounded-full cursor-pointer"
                variant={"outline"}
                type="submit"
                size={"icon-sm"}
              >
                <img
                  className="w-[24px] h-[24px]"
                  src="src/assets/auth/facebook.png"
                  alt="facebook button"
                />
              </Button>
              <Button
                className="w-[56px] p-[10px] h-[56px] rounded-full cursor-pointer"
                variant={"outline"}
                type="submit"
                size={"icon-sm"}
              >
                <img
                  className="w-10 h-10"
                  src="src/assets/auth/email.png"
                  alt="email button"
                />
              </Button>
            </div>

            <p className="text-center text-xs text-[#666666] font-semibold sm:text-sm mt-2">
              Don't have account?{" "}
              <Link to="/sign-up">
                <span className="cursor-pointer text-teal-800 font-medium cursor-pointer hover:underline">
                  Create Account
                </span>
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
