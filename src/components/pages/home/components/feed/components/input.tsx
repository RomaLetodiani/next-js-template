'use client';

import { Button } from '$/components/ui/button';
import { Textarea } from '$/components/ui/textarea';
import { db } from '$/lib/instant-db/db';
import { id } from '@instantdb/react';

export const Input = () => {
  const { isLoading, user, error } = db.useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div>Please login to tweet</div>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const content = formData.get('content') as string;

    if (!user) {
      return;
    }

    db.transact(
      db.tx.authors[id()].create({
        id: user.id,
        name: user.email,
        username: user.email,
      }),
    );

    db.transact(db.tx.tweets[id()].create({ content, authorId: user.id }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea name="content" placeholder="What's happening?" className="resize-none" />
      <Button type="submit">Tweet</Button>
    </form>
  );
};
