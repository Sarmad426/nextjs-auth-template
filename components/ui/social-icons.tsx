import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center space-x-6 w-full">
      <Button variant="outline" className="w-2/5">
        <FcGoogle className="w-8 h-8" />
      </Button>
      <Button variant="outline" className="w-2/5 h-10">
        <FaGithub className="w-8 h-8" />
      </Button>
    </div>
  );
};
