import { setupServer } from "msw/node";
import { signupHandlers } from "./signup";

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...signupHandlers);
