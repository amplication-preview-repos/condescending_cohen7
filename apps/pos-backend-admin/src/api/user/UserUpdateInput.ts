import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  systemPassword?: string | null;
  systemUsername?: string | null;
  username?: string;
  userRole?: "Option1" | null;
};
