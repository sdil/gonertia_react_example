import React from 'react';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export default function LoginPage() {

  const { text } = usePage().props;

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <Head title="Login" />

      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>{text}</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}