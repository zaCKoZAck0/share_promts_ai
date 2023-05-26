'use client'
import React from 'react'
import { useState } from 'react'
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/router'
import Form from '@components/Form';
import {Post} from '@interfaces/Post'

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState<Post>({
    prompt: '',
    category:'',
    heading: '',
    post_type: 'text',
    tags: []
  });

  const createPrompt =  async (e: React.FormEvent<HTMLFormElement>) => {

  }

  return (
    <div>
        <Form
        type="create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
        />
    </div>
  )
}

export default CreatePrompt;