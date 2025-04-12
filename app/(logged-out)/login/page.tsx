"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
    return (
        // <div> Login </div>
        <>
            <Card>
                <CardHeader>
                    <CardTitle> Login </CardTitle>
                    <CardDescription>
                        Login to your SupportMe account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    login form
                </CardContent>
                <CardFooter>
                    <small> Don't have an account? </small>
                    <Button asChild variant="outline" size={"sm"} >
                        <Link href="/sign-up" >Sign Up</Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}
