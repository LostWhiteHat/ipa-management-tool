import { Outlet } from "react-router";
import { FloatingNav } from "components/floating-nav";
import { title } from "process";
import { NebulaBackground } from "components/nebula-background";

export const meta = () => [
  { title: "IPA Management" },
  { name: "description", content: "Your IPA assistant" },
];

export default function AppLayout() {
  return (
    <main className="relative min-h-screen overflow-hidden ">
      <NebulaBackground />
      <FloatingNav/>
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 pt-24 md:p-8 md:pt-32">
        <div className="w-full max-w-7xl">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
