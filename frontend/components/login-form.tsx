import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Lock, Mail } from "lucide-react";

export function LoginForm() {
  return (
    <div className="glass-strong nebula-glow rounded-3xl p-8 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-6 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 to-blue-600">
          <Lock className="h-8 w-8 text-foreground" />
        </div>
        <h2 className="mb-2 text-3xl font-bold text-foreground">
          {"Welcome Back"}
        </h2>
        <p className="text-muted-foreground">
          {"Sign in to your account to continue"}
        </p>
      </div>

      <form className="space-y-6">
        {/* Email Input */}
        <div className="space-y-2">
          <Label htmlFor="login-email" className="text-foreground">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="login-email"
              type="email"
              placeholder="your@email.com"
              className="glass-card border-white/20 bg-white/5 pl-10 text-foreground placeholder:text-muted-foreground focus:border-nebula-purple focus:ring-nebula-purple/20"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <Label htmlFor="login-password" className="text-foreground">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              className="glass-card border-white/20 bg-white/5 pl-10 text-foreground placeholder:text-muted-foreground focus:border-nebula-purple focus:ring-nebula-purple/20"
            />
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              className="border-white/20 data-[state=checked]:bg-nebula-purple data-[state=checked]:border-nebula-purple"
            />
            <Label
              htmlFor="remember"
              className="cursor-pointer text-sm font-normal text-muted-foreground"
            >
              {"Remember me"}
            </Label>
          </div>
          <a
            href="#"
            className="text-sm text-nebula-purple hover:text-nebula-blue transition-colors"
          >
            {"Forgot password"}
          </a>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          size={"lg"}
          className="w-full bg-linear-to-r from-violet-600 toto-blue-600 hover:opacity-90"
        >
          {"Sign in"}
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex-1 border-t border-white/20" />
          <span className="px-2 rounded-2xl">{"Or continue with"}</span>
          <div className="flex-1 border-t border-white/20" />
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            type="button"
            variant={"outline"}
            className="glass-card border-white/20 hover:bg-white/10"
          >
            {"Google"}
          </Button>
          <Button
            type="button"
            variant={"outline"}
            className="glass-card border-white/20 hover:bg-white/10"
          >
            {"GitHub"}
          </Button>
        </div>

        {/* Sign up link */}
        <div className="text-center text-sm text-muted-foreground">
          {"Don't have an account? "}
          <a
            href="#"
            className="text-nebula-purple hover:text-nebula-blue transition-colors font-medium"
          >
            {"Sign up"}
          </a>
        </div>
      </form>
    </div>
  );
}
