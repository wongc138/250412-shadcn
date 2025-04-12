import { Button } from "@/components/ui/button"
import { PersonStandingIcon } from "lucide-react"

export default function Page() {
  return (
    <>
      <h1 className="flex gap-2 items-center"> <PersonStandingIcon size={50} className="text-pink-500" /> Support Me 😀</h1>
      <p>The best dashboard to manage customer support</p>
      <div className="flex gap-2 items-center mt-4">

        <Button>        Log in      </Button>
        <Button>        Sign Up      </Button>
      </div>
    </>
  );
}