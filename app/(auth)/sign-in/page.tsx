import { CardWrapper } from "@/components/ui/card-wrapper";
import { Heading } from "@/components/ui/heading";
import { SignInForm } from "@/components/ui/sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in (🔐 Auth)",
};

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full">
      <Heading title="🔐 Auth" />
      <CardWrapper
        title="Welcome back"
        accountText="Don't have an account? "
        url="sign-up"
      >
        <SignInForm />
      </CardWrapper>
    </div>
  );
}
