import React from 'react'

const IndexPageSelfInfo = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl md:text-7xl mb-4">
        Hi, I am <span className="text-blue-500">Jack Fan</span>
      </h1>
      <h2 className="font-bold text-4xl flex flex-wrap items-center">
        <p className="whitespace-pre">I am </p>
        <div className="scroll-text-mask flex-1 ">
          <span>a Web Developer</span>
          <span>a Student</span>
        </div>
      </h2>
      <p>
        Welcome to My personal blog where I share my thoughts and learnings.
        <br />
        In my free time,I like developing side projects and learning new technologies.
        <br />
        This is my place for thoughts, reflections & everything in between. Have a good read!
      </p>
    </div>
  )
}

export default IndexPageSelfInfo
