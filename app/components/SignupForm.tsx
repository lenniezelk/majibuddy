"use client";

import { onSignUp } from "~/lib/actions";
import { useFormState, useFormStatus } from "react-dom";

const SignupForm = () => {
  const [errorMessage, dispatch] = useFormState(onSignUp, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={dispatch}>
      <button
        className="btn btn-primary text-2xl text-white"
        disabled={pending}
      >
        Sign Up with Google
      </button>
      <div className="mt-4" aria-live="polite" aria-atomic="true">
        {errorMessage && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}
      </div>
    </form>
  );
};

export default SignupForm;
