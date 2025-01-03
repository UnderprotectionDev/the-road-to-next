import { LucideLoaderCircle } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type SubmitButtonProps = {
  label: string;
};

const SubmitButton = ({ label }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending && <LucideLoaderCircle className="size-4 animate-spin" />}
      {label}
    </Button>
  );
};

export { SubmitButton };
