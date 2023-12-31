import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation MyMutation(
    $post_id: ID!
    $username: String!
    $text: String!
    $created_at: DateTime
  ) {
    insertComment(
      post_id: $post_id
      text: $text
      username: $username
      created_at: $created_at
    ) {
      created_at
      id
      post_id
      text
      username
    }
  }
`;

export const ADD_VOTE = gql`
  mutation MyMutation(
    $post_id: ID!
    $username: String!
    $upvote: Boolean!
    $created_at: DateTime
  ) {
    insertVote(
      post_id: $post_id
      username: $username
      upvote: $upvote
      created_at: $created_at
    ) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`;

export const ADD_POST = gql`
  mutation MyMutation(
    $body: String!
    $image: String!
    $subreddit_id: ID!
    $title: String!
    $username: String!
  ) {
    insertPost(
      body: $body
      image: $image
      subreddit_id: $subreddit_id
      title: $title
      username: $username
    ) {
      body
      image
      subreddit_id
      title
      username
    }
  }
`;

export const ADD_SUBREDDIT = gql`
  mutation MyMutation($topic: String!) {
    insertSubreddit(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;
