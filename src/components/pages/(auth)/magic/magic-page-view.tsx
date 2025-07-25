'use client';

import { db } from '$/lib/instant-db/db';
import { User } from '@instantdb/react';
import React, { useState } from 'react';

export const MagicPageView = () => {
  const { isLoading, user, error } = db.useAuth();

  if (isLoading) {
    return;
  }

  if (error) {
    return <div className="p-4 text-red-500">Uh oh! {error.message}</div>;
  }

  if (user) {
    // The user is logged in! Let's load the `Main`
    return <Main user={user} />;
  }
  // The use isn't logged in yet. Let's show them the `Login` component
  return <Login />;
};

function Main({ user }: { user: User }) {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Hello {user.email}!</h1>
      <button
        onClick={() => db.auth.signOut()}
        className="bg-blue-600 px-3 py-1 font-bold text-white hover:bg-blue-700"
      >
        Sign out
      </button>
    </div>
  );
}

function Login() {
  const [sentEmail, setSentEmail] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-sm">
        {!sentEmail ? <EmailStep onSendEmail={setSentEmail} /> : <CodeStep sentEmail={sentEmail} />}
      </div>
    </div>
  );
}

function EmailStep({ onSendEmail }: { onSendEmail: (email: string) => void }) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputEl = inputRef.current!;
    const email = inputEl.value;
    onSendEmail(email);
    db.auth.sendMagicCode({ email }).catch((err) => {
      alert('Uh oh :' + err.body?.message);
      onSendEmail('');
    });
  };
  return (
    <form key="email" onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <h2 className="text-xl font-bold">Let's log you in</h2>
      <p className="text-gray-700">
        Enter your email, and we'll send you a verification code. We'll create an account for you
        too if you don't already have one.
      </p>
      <input
        ref={inputRef}
        type="email"
        className="w-full border border-gray-300 px-3 py-1"
        placeholder="Enter your email"
        required
        autoFocus
      />
      <button
        type="submit"
        className="w-full bg-blue-600 px-3 py-1 font-bold text-white hover:bg-blue-700"
      >
        Send Code
      </button>
    </form>
  );
}

function CodeStep({ sentEmail }: { sentEmail: string }) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputEl = inputRef.current!;
    const code = inputEl.value;
    db.auth.signInWithMagicCode({ email: sentEmail, code }).catch((err) => {
      inputEl.value = '';
      alert('Uh oh :' + err.body?.message);
    });
  };

  return (
    <form key="code" onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <h2 className="text-xl font-bold">Enter your code</h2>
      <p className="text-gray-700">
        We sent an email to <strong>{sentEmail}</strong>. Check your email, and paste the code you
        see.
      </p>
      <input
        ref={inputRef}
        type="text"
        className="w-full border border-gray-300 px-3 py-1"
        placeholder="123456..."
        required
        autoFocus
      />
      <button
        type="submit"
        className="w-full bg-blue-600 px-3 py-1 font-bold text-white hover:bg-blue-700"
      >
        Verify Code
      </button>
    </form>
  );
}
