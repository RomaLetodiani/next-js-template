'use client';

import { db } from '$/lib/instant-db/db';
import { TweetItem } from './components/tweet-item';

export const TweetList = () => {
  const { user } = db.useAuth();
  const query = {
    tweets: {
      $: {
        where: {
          authorId: user?.id,
        },
        limit: 10,
        // Similar to limit, order is limited to top-level namespaces right now
        order: {
          serverCreatedAt: 'desc',
        },
      },
    },
  };

  // @ts-expect-error
  const { isLoading, error, data } = db.useQuery(query);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col space-y-4">
      {/* @ts-expect-error */}
      {data?.tweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};
