import { i, init, InstaQLEntity } from '@instantdb/react';

// Visit https://instantdb.com/dash to get your APP_ID :)
const APP_ID = '158a4128-7573-4560-a2e2-24f89090fce6';

// Optional: Declare your schema!
const schema = i.schema({
  entities: {
    tweets: i.entity({
      content: i.string(),
      authorId: i.string(),
    }),
    authors: i.entity({
      id: i.string(),
      name: i.string(),
      username: i.string(),
    }),
    $users: i.entity({
      email: i.string().unique().indexed(),
      name: i.string(),
      username: i.string(),
    }),
  },
  links: {
    // `$users` is in the reverse direction for all these links!
    tweetAuthor: {
      forward: { on: 'tweets', has: 'one', label: 'author' },
      reverse: { on: '$users', has: 'many', label: 'tweets' },
    },
    userAuthors: {
      forward: { on: 'authors', has: 'one', label: 'user' },
      reverse: { on: '$users', has: 'one', label: 'authors' },
    },
  },
});

export type Tweet = InstaQLEntity<typeof schema, 'tweets'>;
export type Author = InstaQLEntity<typeof schema, 'authors'>;

export const db = init({ appId: APP_ID, schema });
