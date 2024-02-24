"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
import { SocialIcons } from "@/components/ui/social-icons";
import Link from "next/link";

interface CardWrapperProps {
  title: "Welcome back" | "Welcome";
  children?: React.ReactNode;
  accountText: "Don't have an account? " | "Already have an account";
  url: "sign-in" | "sign-up";
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
  title,
  children,
  accountText,
  url,
}) => {
  return (
    <Card className="flex flex-col justify-center items-center lg:w-1/4">
      <CardHeader>
        <CardDescription className="my-2 text-xl">{title}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="w-full flex flex-col space-y-4">
        <SocialIcons />
        <div className="my-2">
          <Link href={url} className="text-blue-500">
            {accountText}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
