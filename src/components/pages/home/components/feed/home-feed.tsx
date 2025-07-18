import { Input } from './components/input';
import { TweetList } from './components/tweet-list/tweet-list';

export const HomeFeed = () => {
  return (
    <div className="border-x p-4">
      <Input />
      <TweetList />
    </div>
  );
};
