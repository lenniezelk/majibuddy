"use client";

import { onSignIn } from "~/lib/actions";
import { useFormState, useFormStatus } from "react-dom";

const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(onSignIn, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={dispatch}>
      <button
        className="btn btn-primary text-2xl text-white"
        disabled={pending}
      >
        Login with Google
      </button>
      <div className="mt-4" aria-live="polite" aria-atomic="true">
        {errorMessage && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
