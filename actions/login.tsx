"use server";

import bcrypt from "bcryptjs";
import { typeLoginSchema, loginSchema } from "@/schema";

export const login = async (data: typeLoginSchema) => {
  const validatedData = loginSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Something went wrong!" };
  }
};
