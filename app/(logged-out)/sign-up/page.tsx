"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

const fornSchema = z.object({
  email: z.string().email(),
  accountType: z.enum(["personal", "company"]),
  companyName: z.string().optional(),
  numberOfEmployees: z.coerce.number().optional(),
  // password: z.string(),
}).superRefine((data, ctx) => {
  if (data.accountType === "company" && !data.companyName) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Company name is required", path: ["companyName"] });
  }

  if (data.accountType === "company" && (!data.numberOfEmployees || data.numberOfEmployees < 1)) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Number of Employees is required", path: ["numberOfEmployees"] });
  }
});


export default function SignupPage() {
  const form = useForm<z.infer<typeof fornSchema>>({
    resolver: zodResolver(fornSchema),
    defaultValues: {
      email: "",
      // password: "",
    },
  });

  const handleSubmit = () => {
    console.log("login validation passed");
  }

  const accountType = form.watch("accountType");


  return (
    // <div> Login </div>
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle> Sign Up </CardTitle>
          <CardDescription>
            Sign up for your new SupportMe account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(handleSubmit)}>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@doe.com" {...field} />
                    </FormControl>
                    <FormDescription>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem >
                    <FormLabel>Account Type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl className="w-full">
                        <SelectTrigger >
                          <SelectValue placeholder="Select an account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent >
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {accountType === "company" &&
                <>
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem >
                        <FormLabel>CompanyName</FormLabel>
                        <FormControl>
                          <Input placeholder="Company Name" {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="numberOfEmployees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employees</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={0}
                            placeholder="Employees" {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                </>
              }

              <Button type="submit"> Sign Up </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="justify-between">
          <small> Already have an account? </small>
          <Button asChild variant="outline" size={"sm"} >
            <Link href="/login" >Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
