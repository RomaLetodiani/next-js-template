import { Tweet } from '$/types/tweet.types';

const dummyAuthor = {
  id: '1',
  name: 'John Doe',
  username: 'john_doe',
};

export const dummyTweets: Tweet[] = [
  {
    id: '1',
    content: 'Hello, world!',
    createdAt: new Date().toISOString(),
    author: dummyAuthor,
  },
  {
    id: '2',
    content: 'Hello, world!',
    createdAt: new Date().toISOString(),
    author: dummyAuthor,
  },

  {
    id: '3',
    content: 'Hello, world!',
    createdAt: new Date().toISOString(),
    author: dummyAuthor,
  },
  {
    id: '4',
    content: 'Hello, world!',
    createdAt: new Date().toISOString(),
    author: dummyAuthor,
  },
];
