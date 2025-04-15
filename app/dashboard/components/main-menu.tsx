import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import MenuItem from "./menu-item";
import MenuTitle from "./menu-title";
import Link from "next/link";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

export default function MainMenu() {
  return (
    <div className="bg-muted overflow-auto p-4 flex flex-col">
      <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </div>
      <div className="py-4 grow">
        <MenuItem href="/dashboard">My Dashboard</MenuItem>
        <MenuItem href="/teams">Teams</MenuItem>
        <MenuItem href="/employees">Employees</MenuItem>
        <MenuItem href="/account">Account</MenuItem>
        <MenuItem href="/settings">Settings</MenuItem>
      </div>
      {/* Footer side */}
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TP
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">Logout</Link>
        <LightDarkToggle className="ml-auto" />
      </div>
    </div >
  )


}  