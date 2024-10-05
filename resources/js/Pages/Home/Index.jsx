import React from 'react';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function LoginPage() {

  const { text } = usePage().props;

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <Head title="Login" />

      <div className="w-full max-w-md">
        { text }
      </div>
    </div>
  );
}