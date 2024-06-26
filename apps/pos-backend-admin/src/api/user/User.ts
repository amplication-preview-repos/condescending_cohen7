import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  systemPassword: string | null;
  systemUsername: string | null;
  updatedAt: Date;
  username: string;
  userRole?: "Option1" | null;
};
