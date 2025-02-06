import { FormSchema } from "@/zod/zod";

export const formAction = async (_: any, formData: FormData) => {
  const username = formData.get("username") as string;
  const country = formData.get("country") as string;

  const validatedFields = FormSchema.safeParse({ username, country });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors,
      values: { username, country }, // Preserve input values
    };
  }

  console.log("Form Submitted Successfully:", validatedFields.data);
  return { success: true, message: {}, values: { username: "", country: "" } }; // Reset values on success
};
