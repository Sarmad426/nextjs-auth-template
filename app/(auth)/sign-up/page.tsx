import { CardWrapper } from "@/components/ui/card-wrapper";
import { Heading } from "@/components/ui/heading";
import { SignUpForm } from "@/components/ui/sign-up-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Sign up (🔐 Auth)",
};

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full">
      <Heading title="🔐 Auth" />
      <CardWrapper
        title="Welcome"
        accountText="Already have an account?"
        url="sign-in"
      >
        <SignUpForm />
      </CardWrapper>
    </div>
  );
}
