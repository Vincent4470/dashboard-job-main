"use client"
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({ }) => {
  
  const router = useRouter()

  const navCreateJobPage = () => router.push('/post-a-job')

  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
      <div>
        <div>Company</div>
        <div className="font-semibold">Twitter</div>
      </div>
      <Button onClick={navCreateJobPage} className="rounded-none py-3 px-3">
        <PlusIcon className="mr-2 w-4 h-4"/>
        Post a Job
      </Button>
    </div>
  );
};

export default Header;
