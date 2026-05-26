import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("services", "routes/services.tsx"),
] satisfies RouteConfig;
