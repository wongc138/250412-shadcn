import { Button } from "@/components/ui/button"
import { PersonStandingIcon } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <h1 className="flex gap-2 items-center"> <PersonStandingIcon size={50} className="text-pink-500" /> Support Me 😀</h1>
      <p>The best dashboard to manage customer support</p>
      <div className="flex gap-2 items-center mt-4">

        <Button asChild>
          <Link href="/login"> Log in </Link>
        </Button>
        <span> or </span>
        <Button asChild variant="outline">
          <Link href="/login"> Sign Up </Link>
        </Button>
      </div>
    </>
  );
}