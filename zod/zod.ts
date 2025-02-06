import { z } from "zod";

export const FormSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    country: z.string().min(1, "Please select a country"),
  });
  