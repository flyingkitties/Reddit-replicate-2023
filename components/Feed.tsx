import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from "../graphql/queries";
import Post from "../components/Post";
import { PostType } from "../typings";

type Props = {
  topic?: string;
};

function Feed({ topic }: Props) {
  const { data, error, loading } = !topic
    ? useQuery(GET_ALL_POSTS)
    : useQuery(GET_ALL_POSTS_BY_TOPIC, {
        variables: {
          topic: topic,
        },
      });

  const posts: PostType[] = !topic
    ? data?.getPostList
    : data?.getPostListByTopic;

  return (
    <div className="mt-5 w-full space-y-4 ">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
