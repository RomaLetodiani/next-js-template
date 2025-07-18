import { Tweet } from '$/types/tweet.types';

type TweetItemProps = {
  tweet: Tweet;
};

export const TweetItem = ({ tweet }: TweetItemProps) => {
  return (
    <div className="flex flex-col gap-2 border-b p-4">
      <div className="flex items-center gap-2">
        <div>
          <p>{tweet.author.name}</p>
          <p>{tweet.author.username}</p>
        </div>
      </div>
      <p>{tweet.content}</p>
    </div>
  );
};
