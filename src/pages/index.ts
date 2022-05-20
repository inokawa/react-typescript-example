import { withLazy } from "./helpers";

export const Main = withLazy(() => import("./Main"));
export const SignIn = withLazy(() => import("./SignIn"));
