'use client';

import useTweetStore from '../../stores/tweet-store';
import { TweetItem } from './components/tweet-item';

export const TweetList = () => {
  const tweets = useTweetStore((state) => state.tweets);
  return (
    <div className="flex flex-col space-y-4">
      {tweets.map((tweet) => (
        <TweetItem key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};
