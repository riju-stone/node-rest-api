import { object, string, TypeOf } from "zod";
import validate from "../middleware/validate";

export const createUserSchema = object({
  body: object({
    name: string({ required_error: "Name is required" }),
    password: string({ required_error: "Password is required" }).min(
      6,
      "Password too Short - 6 characters or higher"
    ),
    passwordConfirmation: string({
      required_error: "Passwords Confirmation is required",
    }),
    email: string({ required_error: "Email is required" }).email(
      "Not a valid email"
    ),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
