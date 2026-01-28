"use client";

import * as React from "react";

type EmailSignupFormRenderProps = {
  emailValue: string;
  setEmailValue: (value: string) => void;
  inputName: string;
};

type EmailSignupFormProps = {
  className?: string;
  children: (props: EmailSignupFormRenderProps) => React.ReactNode;
};

const GOOGLE_FORMS_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScvPKpEypkWjSk1VSJfEiDnmejWpgTRUBFaWQzFQS8xhPNeGg/formResponse";
const GOOGLE_FORMS_EMAIL_FIELD = "entry.99358177";

export default function EmailSignupForm({
  className,
  children,
}: EmailSignupFormProps) {
  const iframeName = React.useId().replaceAll(":", "");
  const [isSuccessOpen, setIsSuccessOpen] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState("");

  return (
    <>
      <form
        action={GOOGLE_FORMS_ACTION}
        method="POST"
        target={iframeName}
        onSubmit={() => {
          // Optimistic success (can't reliably confirm cross-origin response).
          setIsSuccessOpen(true);
          // Defer clear so the browser serializes the form (with email) before React re-renders.
          setTimeout(() => setEmailValue(""), 0);
        }}
        className={className}
      >
        {children({
          emailValue,
          setEmailValue,
          inputName: GOOGLE_FORMS_EMAIL_FIELD,
        })}
      </form>

      <iframe name={iframeName} style={{ display: "none" }} />

      {isSuccessOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Subscription success"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsSuccessOpen(false)}
            aria-label="Close"
          />
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-black">Success</div>
              <p className="mt-2 text-sm text-gray-600">
                You&apos;re subscribed.
              </p>
              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-base font-semibold text-white hover:bg-neutral-800"
                onClick={() => setIsSuccessOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

