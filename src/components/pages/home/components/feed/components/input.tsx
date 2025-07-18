'use client';

import { Button } from '$/components/ui/button';
import { Textarea } from '$/components/ui/textarea';
import { db } from '$/lib/instant-db/db';
import { id } from '@instantdb/react';
// TODO: use zustand to handle the form state

export const Input = () => {
  // transact! 🔥

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const content = formData.get('content') as string;
    db.transact(db.tx.tweets[id()].create({ content, authorId: '1' }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea name="content" placeholder="What's happening?" className="resize-none" />
      <Button type="submit">Tweet</Button>
    </form>
  );
};
