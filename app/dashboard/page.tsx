import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeesStats from "./components/employees/employees-stats";
import TeamStats from "./components/teams/teams-stats";

export default function Dashboard() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employee stats</TabsTrigger>
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees"><EmployeesStats /></TabsContent>
      <TabsContent value="teams"><TeamStats /></TabsContent>
    </Tabs>

  );

}