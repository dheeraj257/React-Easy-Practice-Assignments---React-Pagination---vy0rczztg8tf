import React from 'react';
const Post = ({heading, para }) => {
  return (
    <div className="container post">
      <h1>{heading}</h1>
      <p>{para}</p>
    </div>
  )

}

export { Post }