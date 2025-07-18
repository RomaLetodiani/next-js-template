'use client';

import { Button } from '$/components/ui/button';
import { Textarea } from '$/components/ui/textarea';
import useTweetStore from '../stores/tweet-store';
// TODO: use zustand to handle the form state

export const Input = () => {
  const addTweet = useTweetStore((state) => state.addTweet);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const content = formData.get('content') as string;
    addTweet({
      id: crypto.randomUUID(),
      content,
      createdAt: new Date().toISOString(),
      author: { id: '1', name: 'John Doe', username: 'john_doe' },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea name="content" placeholder="What's happening?" className="resize-none" />
      <Button type="submit">Tweet</Button>
    </form>
  );
};
