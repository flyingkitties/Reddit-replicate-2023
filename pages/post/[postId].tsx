import { useQuery, gql, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import Avatar from '../../components/Avatar';
import Post from '../../components/Post';
import { GET_POST_BY_POST_ID } from '../../graphql/queries';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ADD_COMMENT } from '../../graphql/mutations';
import { toast } from 'react-hot-toast';
import TimeAgo from 'react-timeago';
import { now } from 'next-auth/client/_utils';
import { PostType } from '../../typings';

type FormData = {
  comments: string;
};

function PostPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_POST_BY_POST_ID, 'getPostByPostId'],
  });

  const {
    loading,
    error,
    data = {},
  } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: router.query.postId,
    },
  });

  const post: PostType = data?.getPostByPostId;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // post comment here
    const notification = toast.loading('Posting your comment...');

    await addComment({
      variables: {
        post_id: router.query.postId,
        username: session?.user?.name,
        text: data.comments,
        created_at: new Date(),
      },
    });

    setValue('comments', '');

    toast.success('Comment successfully posted!', {
      id: notification,
    });
  };

  return (
    <div className="mx-auto my-7 max-w-5xl px-5 lg:px-0 ">
      <Post post={post} />

      <div
        className="-mt-3 rounded-b-md border border-t-0 border-gray-300
      bg-white px-10 p-5"
      >
        <p className="text-sm ">
          Comment as{' '}
          <span className="text-blue-400">{session?.user?.name}</span>
        </p>
        <form
          className="flex flex-col space-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <textarea
            {...register('comments')}
            disabled={!session}
            className="h-24 rounded-md border border-gray-200 p-2
          pl-4 outline-none disabled:bg-gray-50 w-full font-light "
            placeholder={session ? 'What are your thoughts?' : 'Please sign in'}
          />
          <button
            type="submit"
            aria-label="Submit Button"
            tabIndex={0}
            className="w-full p-2  rounded-full bg-blue-400 text-white
            disabled:bg-gray-200"
          >
            Comment
          </button>
        </form>
      </div>

      <div
        className="-my-5 rounded-b-md border border-t-0 border-gray-300
       bg-white py-5 px-10"
      >
        <hr className="py-2" />
        {post?.comments.map((comment) => (
          <div
            className="relative flex items-center space-x-2 space-y-5 m-2"
            key={comment?.id}
          >
            <hr className="absolute top-10 h-16 border left-7 z-0 text-slate-200" />
            <div className="z-5">
              <Avatar seed={comment?.username} />
            </div>
            <div className="flex flex-col">
              <p className="py-2 text-xs text-gray-400">
                <span className="font-semibold text-gray-500">
                  {comment?.username}
                </span>{' '}
                •
                <TimeAgo date={comment?.created_at} />
              </p>
              <p className="">{comment?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPage;
