import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ListCheckIcon, PieChartIcon, StarIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import cm from "@/public/images/6.1cm.jpg";
import tf from "@/public/images/6.3 tf.jpg";
import rl from "@/public/images/6.2 rl.jpg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import TeamDistributionChart from "./team-distribution-chart";
import SupportTicketsResolved from "./support-tickets-resolved";

const teamLeaders = [
	{
		firstName: "Colin",
		lastName: "Murray",
		avatar: cm,
	},
	{
		firstName: "Tom",
		lastName: "Phillips",
	},
	{
		firstName: "Liam",
		lastName: "Fuentes",
	},
	{
		firstName: "Tina",
		lastName: "Fey",
		avatar: tf,
	},
	{
		firstName: "Katie",
		lastName: "Johnson",
	},
	{
		firstName: "Tina",
		lastName: "Jones",
	},
	{
		firstName: "Amy",
		lastName: "Adams",
	},
	{
		firstName: "Ryan",
		lastName: "Lopez",
		avatar: rl,
	},
	{
		firstName: "Jenny",
		lastName: "Jones",
	},
];


export default function TeamStats() {

	return (
		<>
			<div className="grid lg:grid-cols-3 gap-4">
				{/* Card 1 */}
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-base">Total teams
						</CardTitle>
					</CardHeader>
					<CardContent className="flex justify-between items-center">
						<div className="flex gap-2">
							<UsersIcon />
							<div className="text-5xl font-bold">8</div>
						</div>
						<div>
							<Button size="xs" asChild>
								<Link href="/dashboard/teams">View all</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
				{/* Card 2 */}
				<Card>
					<CardHeader className="pb-2">
						<CardTitle className="text-base flex justify-between items-center ">
							<span>Team leaders</span>
							<StarIcon className="text-yellow-500" />
						</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-wrap gap-2">
						{teamLeaders.map(teamLeaders => (
							<TooltipProvider key={`${teamLeaders.firstName}${teamLeaders.lastName}`}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Avatar>
											{!!teamLeaders.avatar && <Image src={teamLeaders.avatar} alt={`${teamLeaders.firstName} ${teamLeaders.lastName} avatar`} />
											}
											<AvatarFallback
											>{teamLeaders.firstName[0]}{teamLeaders.lastName[0]}
											</AvatarFallback>
										</Avatar>
									</TooltipTrigger>
									<TooltipContent>
										{teamLeaders.firstName} {teamLeaders.lastName}
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						))}
					</CardContent>
				</Card>
				{/* Card 3 */}
				<Card >
					<CardHeader className="pb-2">
						<CardTitle className="text-base flex justify-between items-center ">
							<span>Team distribution</span>
							<PieChartIcon />
						</CardTitle>
					</CardHeader>
					<CardContent className="pb=0">
						<TeamDistributionChart />
					</CardContent>

				</Card>
			</div >
			{/* Card Matrix */}
			< Card className="my-4" >
				<CardHeader>
					<CardTitle className="text-lg flex items-center gap-2">
						<ListCheckIcon />
						<span>Support tickets resolved</span>
					</CardTitle>
				</CardHeader>
				<CardContent className="pl-0">
					<SupportTicketsResolved />
				</CardContent>
			</ Card >
		</>
	);
}