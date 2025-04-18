"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

const fornSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});


export default function LoginPage() {
  const form = useForm<z.infer<typeof fornSchema>>({
    resolver: zodResolver(fornSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = () => {
    console.log("login validation passed");
  }

  return (
    // <div> Login </div>
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle> Login </CardTitle>
          <CardDescription>
            Login to your SupportMe account
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
                      This is your email address you sign up to SupportMe with.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small> {`Don't have an account?`} </small>
          <Button asChild variant="outline" size={"sm"} >
            <Link href="/sign-up" >Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
