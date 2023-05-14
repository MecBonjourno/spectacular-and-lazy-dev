import React from 'react'
import type { FC } from 'react'

type OutstandingSectionProps = {
  title: string
  backgroundImage: string
  content: string
}

const OutstandingSection: FC<OutstandingSectionProps> = ({
  title,
  backgroundImage,
  content,
}) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center"
      style={{ backgroundImage: `url(${backgroundImage})`, opacity: 1 }}
    >
      <h1 className="text-5xl text-white font-bold pt-40 pb-10">{title}</h1>
      <div className="max-w-4xl mx-auto p-10 text-2xl text-white">
        <p className="mb-4">
          Clean code, for some devs, this works as a magical word.
          Big Dev says keep the Clean Code, Little Dev creates variables named 'a' & 'b'
          and function 'function()'.
        </p>
        <p className="mb-4">
          The idea behind such a concept is basically BE OBVIOUS,
          and trust me, this is really hard.
        </p>
        <br />
        <p className="mb-4">Based on this, try to remember these incredible sentences or just try to understand what they mean:</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Clean Code is obvious, not sophisticated or clever. Make it pop the eyes, not the brain.</li>
          <li className="mb-2">Clean Code !== Duplication, but this doesn't mean you should repeat yourself. (DRY link)</li>
          <li className="mb-2">Clean Code is small code, fewer parts, fewer problems. (This one is gold.)</li>
          <li className="mb-2">Clean Code passes all tests. (Tests are the big enemy; we'll talk about them later.)</li>
        </ul>
      </div>
    </div>
  )
}

export default OutstandingSection
