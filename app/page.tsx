"use client";

import { formAction } from "@/actions/formAction";
import { useActionState } from "react";

export default function Home() {
  const [state, formActionTrigger, isPending] = useActionState(formAction, {
    success: false,
    message: {},
    values: { username: "", country: "" },
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form
        action={formActionTrigger}
        className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-md"
      >
        <h2 className="text-center text-2xl font-bold text-gray-700">Register</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            name="username"
            defaultValue={state.values.username}
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-300"
          />
          {state?.message?.username && (
            <p className="mt-1 text-sm text-red-500">{state.message.username[0]}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select
            name="country"
            defaultValue={state.values.country}
            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-300"
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
          {state?.message?.country && (
            <p className="mt-1 text-sm text-red-500">{state.message.country[0]}</p>
          )}
        </div>

        <button
          type="submit"
          disabled = {isPending}
          className="w-full rounded-md bg-blue-600 p-2 text-white transition hover:bg-blue-700"
        >
         {isPending ? "Loading..." : "Submit" }
        </button>

        {state?.success && (
          <p className="mt-3 text-center text-green-600"> Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
}
