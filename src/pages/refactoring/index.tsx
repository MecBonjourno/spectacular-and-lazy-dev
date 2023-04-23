import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import ThreeColumnSection from '@/components/ThreeColumnSection'

const inter = Inter({ subsets: ['latin'] })

export default function Refactoring() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="h-screen w-screen flex flex-col justify-center items-center bg-gray-800 text-white"
      >
        <h1 className="text-4xl font-bold mb-8">Refactoring</h1>
        <p className="text-xl">
          All the content about refactoring and why it is what it is
        </p>
      </motion.div>

      <motion.section
        className="flex flex-col-reverse md:flex-row items-center justify-center py-16 px-6 md:px-12 bg-gray-800"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">Title</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, metus ac viverra vestibulum, metus tortor auctor dolor, ut
            malesuada sapien lectus et metus. Sed commodo, arcu ut facilisis
            blandit, eros purus convallis tortor, eget egestas urna nunc non
            risus. Sed ut interdum velit. Nulla ut tellus massa. Morbi tempus
            felis vitae sapien dignissim malesuada.
          </p>
          <p className="text-lg mb-4">
            Proin et enim nec purus mollis bibendum quis vel enim. Etiam at diam
            tincidunt, bibendum velit eu, viverra odio. Sed malesuada suscipit
            lectus, sit amet aliquet turpis imperdiet at. Integer venenatis
            malesuada purus in malesuada.
          </p>
          <p className="text-lg">
            Nunc euismod, ex quis varius feugiat, libero ante fermentum massa, a
            gravida sapien magna eget quam. Ut vel fermentum ipsum. Praesent non
            lorem non sem placerat efficitur. Ut euismod sapien ac massa
            pharetra, vel bibendum lorem convallis. Nullam sit amet erat eget
            tellus ullamcorper ullamcorper. Duis eget elit nec elit bibendum
            bibendum. Curabitur egestas risus vitae enim sagittis, eu blandit
            est hendrerit.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/grug.png"
            width={500}
            height={500}
            className="mx-auto"
            alt="An image"
          />
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col-reverse md:flex-row items-center justify-center py-16 px-6 md:px-12 bg-gray-800"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2">
          <Image
            src="/grug.png"
            width={500}
            height={500}
            className="mx-auto"
            alt="An image"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">Title</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, metus ac viverra vestibulum, metus tortor auctor dolor, ut
            malesuada sapien lectus et metus. Sed commodo, arcu ut facilisis
            blandit, eros purus convallis tortor, eget egestas urna nunc non
            risus. Sed ut interdum velit. Nulla ut tellus massa. Morbi tempus
            felis vitae sapien dignissim malesuada.
          </p>
          <p className="text-lg mb-4">
            Proin et enim nec purus mollis bibendum quis vel enim. Etiam at diam
            tincidunt, bibendum velit eu, viverra odio. Sed malesuada suscipit
            lectus, sit amet aliquet turpis imperdiet at. Integer venenatis
            malesuada purus in malesuada.
          </p>
          <p className="text-lg">
            Nunc euismod, ex quis varius feugiat, libero ante fermentum massa, a
            gravida sapien magna eget quam. Ut vel fermentum ipsum. Praesent non
            lorem non sem placerat efficitur. Ut euismod sapien ac massa
            pharetra, vel bibendum lorem convallis. Nullam sit amet erat eget
            tellus ullamcorper ullamcorper. Duis eget elit nec elit bibendum
            bibendum. Curabitur egestas risus vitae enim sagittis, eu blandit
            est hendrerit.
          </p>
        </div>
      </motion.section>
      <ThreeColumnSection />
    </>
  )
}
