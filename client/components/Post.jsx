import React from 'react'

const Post = ({post}) => (
  <div>
    <h1>{post.title}</h1>
    <h2>{`Post created: ${post.created}`}</h2>
    <p>{post.selftext}</p>
  </div>
)

export default Post
