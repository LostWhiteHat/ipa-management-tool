import { LoginForm } from "components/login-form";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login" }, { name: "description", content: "Login" }];
}

export default function Home() {
  return (
    <div className="mb-8 flex justify-center md:mb-12">
      <LoginForm />
    </div>
  );
}
