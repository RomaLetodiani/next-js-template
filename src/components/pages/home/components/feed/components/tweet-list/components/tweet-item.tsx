import { Tweet } from '$/lib/instant-db/db';

type TweetItemProps = {
  tweet: Tweet;
};

export const TweetItem = ({ tweet }: TweetItemProps) => {
  return (
    <div className="flex flex-col gap-2 border-b p-4">
      <div className="flex items-center gap-2">
        <div>
          <p>{tweet.authorId}</p>
        </div>
      </div>
      <p>{tweet.content}</p>
    </div>
  );
};
