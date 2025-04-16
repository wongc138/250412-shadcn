import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangleIcon, BadgeCheckIcon, LaptopIcon, PartyPopperIcon, UserCheck2, UserCheck2Icon, UserIcon, UserRoundXIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cm from "@/public/images/6.1cm.jpg";
import WorkLocationsTrends from "./work-locations-trends";

export default function EmployeesStats() {

  const totalEmployees = 100;
  const employeesPresent = 80;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">{totalEmployees}</div>
            </div>
            <div>
              <Button size="xs" asChild>
                <Link href="/dashboard/employees">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* Card 2 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employees present (%)</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <div className="flex gap-2">
              {employeesPresentPercentage > 75 ? <UserCheck2Icon /> : <UserRoundXIcon />}
              {/* <UserCheck2 /> */}
              <div className="text-5xl font-bold">{employeesPresent}</div>
            </div>
          </CardContent>
          <CardFooter>
            {employeesPresentPercentage > 75 ?
              <span className="text-xs text-green-300 flex gap-1 items-center">
                <BadgeCheckIcon />
                {employeesPresentPercentage}% of employees are present</span> :
              <span className="text-xs text-red-300 flex gap-1 items-center">
                <AlertTriangleIcon />
                Only {employeesPresentPercentage}% of employees are present</span>
            }
          </CardFooter>
        </Card>
        {/* Card 3 */}
        <Card className="border-pink-500 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employee of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <Image src={cm} alt="Employee of the month avatar" />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Colin Murray!</span>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            <PartyPopperIcon className="text-pink-300" />
            <span> Congratlations, Colin!</span>
          </CardFooter>
        </Card>
      </div>
      {/* Card Matrix */}
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <WorkLocationsTrends />
        </CardContent>
      </Card>
    </>
  );
}