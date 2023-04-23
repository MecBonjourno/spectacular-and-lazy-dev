import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import ThreeColumnSection from '@/components/ThreeColumnSection'
import OutstandingSection from '@/components/OutstandingSection'

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
        <p className="text-4xl px-20 leading-snug">
          ¹ Refactoring, a process of (or trying to) improving the code without
          necessarily changing, creating or updating its behavior. Basically
          resolving mess into organization and simplicity. (But this doesnt mean
          that)
        </p>
      </motion.div>

      <motion.section
        className="flex flex-col-reverse md:flex-row items-center justify-center py-16 px-6 md:px-12 bg-gray-800"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">From the beginning</h2>
          <p className="text-lg mb-4">
            {`If you reach this far, congratulations, you've read the title.`}
          </p>
          <p className="text-lg mb-4">
            {`I'm a developer, and I'm lazy. Just like you,`}{' '}
            <span className="font-bold">refactoring</span>{' '}
            {`can be a
            nightmare for us, if its working, its working.`}
          </p>

          <p className="text-lg mb-4">
            {`Yeah, I agree. But unfortunately, bills reach my cellphone every month and to keep my job I should improve my self. I guess this should be a life phisolophy actually, but I'm not here to talk about that.`}
          </p>
          <p className="text-lg mb-4">
            <span className="font-bold">Refactoring</span> {`, in`}{' '}
            <span className="font-bold">ADHD words</span>{' '}
            {`means: Washing the dishes you left on the sink 3 weeks ago and now it has some weird stuff going around it.`}
          </p>
          <p className="text-lg">
            {`In `}
            <span className="font-bold">Wikipedia words</span>{' '}
            {`, Refactoring means: the process of restructuring (reorganizing, moving, rewriting) existing computer code—changing the factoring—without changing its external behavior. Refactoring is intended to improve the design, structure, and/or implementation of the software (its non-functional attributes), while preserving its functionality.`}
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
          <h2 className="text-3xl font-bold mb-4">Motivation to do it</h2>
          <p className="text-lg mb-4">
            {`I know, boring stuff. But HEAR ME OUT, it MAY be worth it.`}
          </p>
          <p className="text-lg mb-4">
            {`I'm not here to tell you that you should refactor your code, I'm not your mother, not even related to you.
            `}
            {`But, remember that suspicious package you installed just to do a quick fix? Or that weird function you created just to make it work? Yeah... It stinks, I can smell it from here....`}
          </p>
          <p className="text-lg mb-4">
            {`You should take a look, you should spent 30 SECONDS thinking if you are able to improve it.`}
          </p>
          <p className="text-lg  mb-4">
            {`Trying to recognize code smells (bad code), and transforming it in a simpler and readable way brings a lot of gifts within itself. Name one? not having to find that fucking `}{' '}
            <span className="text-bold italic bg-slate-950 rounded mx-1">
              const tset{' '}
            </span>{' '}
            {` that you wrote wrong and now you spent 3 days debugging...`}
          </p>
          <p className="text-lg ">
            <s>{`(We know you meant "test")`}</s>
          </p>
        </div>
      </motion.section>
      <ThreeColumnSection />
      <OutstandingSection
        title="Clean Code"
        backgroundImage="/image.png"
        content="Clean code, for some devs this work as a magical word. 
              Big Dev says keep the Clean Code, Little Dev creates variables named 'a' & 'b' 
              and function 'function()'. \n 
              The idea behind such concept is basically BE OBVIOUS, 
              and trust me, this is really hard.
              
              Based on this, try to remember this incridible sentences, or just try to understand what they mean.

              - Clean Code is obvious, not sophisticated or clever. Make it pop the eyes, not the brain.

            - Clean Code !== Duplication, but this doesnt mean you should repeat yourself. (DRY link)

            - Clean Code is small code, less parts, less problems. (this one is gold.)

            - Clean Code passes all tests. (Tests are big enemy, we talk about them later.)
        "
      />
      <motion.section
        className="flex flex-col-reverse md:flex-row items-center justify-center py-16 px-6 md:px-12 bg-gray-800"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">
            Techinical Debts (🤝 lazy people)
          </h2>
          <p className="text-lg mb-4">
            {`If you reach this far, congratulations, you've read the title.`}
          </p>
          <p className="text-lg mb-4">
            {`I'm a developer, and I'm lazy. Just like you,`}{' '}
            <span className="font-bold">refactoring</span>{' '}
            {`can be a
            nightmare for us, if its working, its working.`}
          </p>

          <p className="text-lg mb-4">
            {`Yeah, I agree. But unfortunately, bills reach my cellphone every month and to keep my job I should improve my self. I guess this should be a life phisolophy actually, but I'm not here to talk about that.`}
          </p>
          <p className="text-lg mb-4">
            <span className="font-bold">Refactoring</span> {`, in`}{' '}
            <span className="font-bold">ADHD words</span>{' '}
            {`means: Washing the dishes you left on the sink 3 weeks ago and now it has some weird stuff going around it.`}
          </p>
          <p className="text-lg">
            {`In `}
            <span className="font-bold">Wikipedia words</span>{' '}
            {`, Refactoring means: the process of restructuring (reorganizing, moving, rewriting) existing computer code—changing the factoring—without changing its external behavior. Refactoring is intended to improve the design, structure, and/or implementation of the software (its non-functional attributes), while preserving its functionality.`}
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
    </>
  )
}
