import React, { useRef } from 'react'

const IndexPageSelfInfo = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl md:text-7xl mb-4">
        Hi, I am <span className="text-blue-500">Jack Fan</span>
      </h1>
      <h2 className="font-bold text-4xl h-12 flex items-center">
        I am
        <div className="scroll-text-mask flex-1 px-2 ">
          <span style={{ ['--order' as any]: 0 }}>a Web Developer</span>
          <span style={{ ['--order' as any]: 1 }}>a Student</span>
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
