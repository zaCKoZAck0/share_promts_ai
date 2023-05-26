import { Post } from '@interfaces/Post';
import React, { FC } from 'react';
import TagsInput from '@components/TagsInput';

interface FormProps {
  type: string;
  post: Post;
  setPost: (post: Post) => void;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: FC<FormProps> = ({
  type,
  post,
  submitting,
  handleSubmit,
  setPost,
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text_left">
        <span className="blue_gradient">{type.toUpperCase()} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type.toUpperCase()} and share amazing prompts with the world, and let
        your imagination run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="prompt">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            name="prompt"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>

        <label htmlFor="tags">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tags
          </span>
          <TagsInput />
        </label>
      </form>
    </section>
  );
};

export default Form;