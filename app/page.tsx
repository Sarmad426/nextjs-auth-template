"use client";

export default function Home() {
  const redirect = window.location.assign("/sign-in");
  return redirect;
}
