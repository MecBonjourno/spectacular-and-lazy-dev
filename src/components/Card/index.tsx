import { FC } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type CardProps = {
  title: string
  description: string
  imageUrl: string
}

const Card: FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

export default Card
