import type { Metadata } from "next";
import { RegisterForm } from "@/components/authentication/RegisterForm";

export const metadata: Metadata = {
  title: "Register - ByteSpace",
  description: "Create your ByteSpace account and start learning today.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
