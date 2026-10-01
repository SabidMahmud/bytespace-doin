import type { Metadata } from "next";
import { LoginForm } from "@/components/authentication/LoginForm";

export const metadata: Metadata = {
  title: "Sign in - ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

export default function LoginPage() {
  return <LoginForm />;
}
