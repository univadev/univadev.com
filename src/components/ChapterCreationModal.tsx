"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScmsnXzfFy8-ysrCFtgJVl_dWRaDUqgK6aVq2Xbru59y4ioNw/formResponse";
const HIDDEN_IFRAME_NAME = "chapter_creation_form_iframe";

export interface ChapterCreationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChapterCreationModal({
  open,
  onOpenChange,
}: ChapterCreationModalProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const submittedRef = React.useRef(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const successShownRef = React.useRef(false);

  const handleIframeLoad = React.useCallback(() => {
    if (submittedRef.current && isSubmitting && !successShownRef.current) {
      successShownRef.current = true;
      submittedRef.current = false;
      setIsSubmitting(false);
      onOpenChange(false);
      toast.success("Application submitted successfully");
    }
  }, [isSubmitting, onOpenChange]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    submittedRef.current = true;
    setIsSubmitting(true);
    successShownRef.current = false;
    form.submit();
    // Fallback: close and show success after delay (iframe load may be cross-origin).
    setTimeout(() => {
      if (submittedRef.current && !successShownRef.current) {
        successShownRef.current = true;
        submittedRef.current = false;
        setIsSubmitting(false);
        onOpenChange(false);
        toast.success("Application submitted successfully");
      }
    }, 2500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="sm:max-w-md rounded-2xl p-6 md:p-8 gap-6"
          showCloseButton={true}
          onPointerDownOutside={(e) => {
            if (isSubmitting) e.preventDefault();
          }}
          onEscapeKeyDown={(e) => {
            if (isSubmitting) e.preventDefault();
          }}
        >
          <iframe
            ref={iframeRef}
            name={HIDDEN_IFRAME_NAME}
            title="Form submission target"
            className="absolute w-0 h-0 border-0 opacity-0 pointer-events-none overflow-hidden"
            src="about:blank"
            onLoad={handleIframeLoad}
            tabIndex={-1}
            aria-hidden
          />
          <DialogHeader>
            <DialogTitle
              id="chapter-modal-title"
              className="text-2xl font-bold text-gray-900"
            >
              Apply to Start a Chapter
            </DialogTitle>
            <DialogDescription
              id="chapter-modal-description"
              className="text-gray-600"
            >
              Fill out the form below and we&apos;ll get back to you soon.
            </DialogDescription>
          </DialogHeader>

          <form
            ref={formRef}
            action={GOOGLE_FORM_ACTION}
            method="POST"
            target={HIDDEN_IFRAME_NAME}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="chapter-email" className="text-gray-900">
                Email
              </Label>
              <Input
                id="chapter-email"
                type="email"
                name="entry.1301870564"
                required
                placeholder="you@example.com"
                className="rounded-lg"
                disabled={isSubmitting}
                autoComplete="email"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="chapter-name" className="text-gray-900">
                Full Name
              </Label>
              <Input
                id="chapter-name"
                type="text"
                name="entry.296666161"
                required
                placeholder="Your full name"
                className="rounded-lg"
                disabled={isSubmitting}
                autoComplete="name"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="chapter-school" className="text-gray-900">
                School
              </Label>
              <Input
                id="chapter-school"
                type="text"
                name="entry.1083289901"
                required
                placeholder="School or institution name"
                className="rounded-lg"
                disabled={isSubmitting}
                autoComplete="organization"
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="chapter-members" className="text-gray-900">
                Expected Members
              </Label>
              <Input
                id="chapter-members"
                type="number"
                name="entry.763847401"
                min={1}
                required
                placeholder="e.g. 10"
                className="rounded-lg"
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="chapter-socials" className="text-gray-900">
                Socials{" "}
                <span className="font-normal text-gray-500">(optional)</span>
              </Label>
              <Textarea
                id="chapter-socials"
                name="entry.1449396046"
                placeholder="Include your LinkedIn profile link and Discord username if you have one."
                className="rounded-lg min-h-[100px] resize-y"
                disabled={isSubmitting}
                rows={3}
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                className="rounded-lg"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="rounded-lg bg-black text-white hover:bg-gray-800"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
  );
}
