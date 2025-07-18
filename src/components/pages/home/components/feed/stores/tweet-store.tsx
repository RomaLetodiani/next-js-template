import { Tweet } from '$/types/tweet.types';
import { create } from 'zustand';
import { dummyTweets } from '../components/tweet-list/utils/dummy.data';

type TweetStore = {
  tweets: Tweet[];
  addTweet: (tweet: Tweet) => void;
  removeTweet: (id: string) => void;
  updateTweet: (id: string, tweet: Tweet) => void;
};

const useTweetStore = create<TweetStore>((set) => ({
  tweets: dummyTweets,
  addTweet: (tweet) => set((state) => ({ tweets: [...state.tweets, tweet] })),
  removeTweet: (id) =>
    set((state) => ({ tweets: state.tweets.filter((tweet) => tweet.id !== id) })),
  updateTweet: (id, tweet) =>
    set((state) => ({ tweets: state.tweets.map((t) => (t.id === id ? tweet : t)) })),
}));

export default useTweetStore;
