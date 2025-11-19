import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("", "routes/_app.tsx", [
    index("routes/dashboard/dashboard.tsx"),
    route("tasks", "routes/tasks/tasks.tsx"),
    route("files", "routes/files/files.tsx"),
    route("criteria", "routes/criteria/criteria.tsx"),
    route("settings", "routes/settings/settings.tsx"),
  ]),
  route("auth", "routes/auth/_layout.tsx", [
    index("routes/auth/login.tsx"),
    route("register", "routes/auth/register.tsx"),
  ]),
  route("*", "routes/_not-found.tsx"),
] satisfies RouteConfig;
