import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Feed from '../components/Feed';
import Header from '../components/Header';
import PostBox from '../components/PostBox';
import SubredditRow from '../components/SubredditRow';
import { GET_SUBREDDIT_LIST_LIMIT } from '../graphql/queries';
import { gql, useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { Subreddit } from '../typings';

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(GET_SUBREDDIT_LIST_LIMIT, {
    variables: {
      limit: 10,
    },
  });

  const subreddits: Subreddit[] = data?.getSubredditListLimit;

  return (
    <div className=" max-w-5xl my-7 lg:mx-auto mx-5 ">
      <Head>
        <title>Rita&apos;s Reddit</title>
        <meta
          name="description"
          content="Reddit Replica - Post - Comment - Laugh - Join a community - Rita Guilherme Web Engineer Portfolio"
          key="desc"
        />
      </Head>

      {/* PostBox */}
      <PostBox />

      <div className="flex">
        <Feed />

        <div
          className="sticky top-16 hover:overflow-auto mx-5 mt-7 hidden h-fit min-w-[300px]
        rounded-md border border-gray-300 bg-white lg:inline"
        >
          <p className="text-base mb-1 p-4 pb-3 font-bold">Top Comunities</p>
          <div>
            {/* subreddits list */}
            {subreddits?.map((subreddit, index) => (
              <SubredditRow
                key={subreddit.id}
                topic={subreddit.topic}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
