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
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col  items-center"
      style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.1 }}
    >
      <h1 className="text-5xl text-white font-bold pt-40 pb-10">{title}</h1>
      <div className="max-w-4xl mx-auto p-10 text-2xl text-white">
        {content}
      </div>
    </div>
  )
}
export default OutstandingSection
