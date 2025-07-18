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
    author: i.entity({
      id: i.string(),
      name: i.string(),
      username: i.string(),
    }),
  },
});

export type Tweet = InstaQLEntity<typeof schema, 'tweets'>;
export type Author = InstaQLEntity<typeof schema, 'author'>;

export const db = init({ appId: APP_ID, schema });
