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
          that 🙃)
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
            {`Yeah, I agree. But unfortunately, bills reach my cellphone every month and to keep my job I should improve myself. I guess this should be a life philosophy actually, but I'm not here to talk about that.`}
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
            {`I'm not here to tell you that you should refactor your code, I'm not your mother, not even related to you (Thank god 🙏). `}
            {`But, remember that suspicious package you installed just to do a quick fix? Or that weird function you created just to make it work? Yeah... It stinks, I can smell it from here....`}
          </p>
          <p className="text-lg mb-4">
            {`You should take a look, you should spent 30 SECONDS thinking if you are able to improve it.`}
          </p>
          <p className="text-lg  mb-4">
            {`Trying to recognize code smells (bad code (your code)), and transforming it in a simpler and readable way brings a lot of gifts within itself. Name one? not having to find that fucking `}{' '}
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
          <h2 className="text-5xl font-bold mb-4">
            Techinical Debts (🤝 lazy people)
          </h2>
          <p className="text-lg mb-4">
            {`If you reach this far, you are starting to impress someone, just don't know who yet. Maybe yourself? 🤔`}
          </p>
          <p className="text-lg mb-4">
            {`From what I've studied, people think that developers/programmers try to write excellent or at least good code from scratch.
            Like all the time, always, every time a file ending in .js is born it will be well written.`}
          </p>

          <p className="text-lg mb-4">
            The way I like to think is: <span className='font-bold'> WTF are this guys talking about... </span>
          </p>
          <p className="text-lg mb-4">
            <span className="font-bold">Technical Debt</span> is what the name says, something technical that debts. <span className="font-bold">IMPRESSIVE</span></p>
        <p className="text-lg mb-4"> It emerges from the dark, if you think about it, how can unclean code exist if everybody works trying to write the best code ever right?
          (I think you are starting to get what i think about this)</p> 
          <p className="text-lg mb-4">
            Again philosophy: Think about you and yourself, do you do it? Do you know anyone that does it? Do you know anyone that knows anyone that does it?
            <br />
            {`That's it, you just understood that its impossible. And you may have thought that different levels of development are achieved by different devs. How can people imagine such thing....
          `}</p>
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
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">What creates or generates Technical Debts?</h2>
          <p className="text-2xl mb-4">
            So many things, so little head of mine....
          </p>
          <p className="text-lg mb-4">
            <h2 className="text-xl font-bold mb-4">Job (Business, Pressure, Deliveries, etc)</h2>
            This one is always the first one to blame, every time, we receive a due date for something, it can be a month, a week
            Three hours, or the next World Cup. As a ADHD person, we know we will do it in the last minute
            (This one especially doesnt apply to my job, but for some personal stuff is the modus operandi).
            And just like that, you had to move to the next sprint, so you just copy and paste that function that you wrote, or copy something from the web and ship it. (You know what happens after...)
          </p>
          <p className="text-lg mb-4">
            <h2 className="text-xl font-bold mb-4"> Not understanding Tech Debt</h2>
            {`This one for me is kinda of comical, devs create a concept too show a problem and explain it to their
            employers or whatever, and they dont understand it. And don't let the team "waste" time on refactoring it. Yeah its funny.
            The not so funny part is when shit explodes and its your fault, the employer/client never is at fault.
            never. NEVER, THEY ARE GODS ON EARTH.`}
          </p>
          <p className="text-lg  mb-4">
            <h2 className="text-xl font-bold mb-4"> Lack of tests</h2>
            We haven't even talked about them yet, but yeah they are important (or so they say).
            I'll just say one thing "Just test in prod". That's it you got it. It obvious, and consequences? <span className='font-bold'>Catastrophe</span> on the project/product/service. Even worse: <span className='font-bold'>You caused it </span>
            just cuz you thought that smelly little function wouldn't do anything harmful.
          </p>
          <p className="text-lg  mb-4">
            <h2 className="text-xl font-bold mb-4"> Lack of Documentation</h2>
            Okay, this one I've faced a lot. Documentations usually are left behind or apart of the quality of the project.
            Just not sure why, or if is intended. But for sure, a documentation that is poorly written or not written
            at all will slow down the development of the project. And if you are a new dev on the project, you will have a bad time.
          </p>
          <p className="text-lg  mb-4">
            <h2 className="text-xl font-bold mb-4">Communication</h2>
            Communication is key. Talking is key, gossip is key for the humankind (I'm not joking, its a fact. Don't believe me? Read Sapiens.).
            <br />
            Now think how talking about the project, the code, the architecture, the design, the tests, the documentation, the deadline can bring a lot of benefits to the devs around. Talk about it!
          </p>
          <p className="text-lg  mb-4">
            <h2 className="text-xl font-bold mb-4">Incompetence</h2>
            This one is special. I'm not saying that you are incompetent (or am I?), but you know someone that is (maybe you 🤔?), and you know that person is the one that will create the most technical debts. So think about it, maybe helping earlier may give you some hours back in your day....
          </p>
        </div>
      </motion.section>

    <section className="flex items-center justify-center h-screen w-screen bg-gray-900">
      <div className="max-w-5xl mx-auto p-12 text-white bg-transparent">
        <h1 className="text-7xl font-bold mb-10 text-center leading-tight">
          When to Refactor Code?
        </h1>
        <div className="text-4xl mb-10 leading-snug max-w-3xl overflow-hidden">
          <p>
            Code refactoring is a transformative journey that breathes new life into your codebase. It's a grand quest where you conquer complexity and forge a path towards elegance and efficiency.
          </p>
          <ul className="list-disc pl-10 mb-10 text-3xl leading-relaxed">
            <li className="mb-4">When the code dances between confusion and chaos.</li>
            <li className="mb-4">When you stumble upon tangled webs of repeated incantations.</li>
            <li className="mb-4">When magical moments of innovation are hindered by the chains of legacy code.</li>
            <li className="mb-4">When performance yearns to burst forth in a blaze of glory.</li>
            <li className="mb-4">When code conventions are but a distant dream and chaos reigns supreme.</li>
          </ul>
        </div>
        <p className="mt-6 text-4xl text-center leading-snug">
          Let your code ascend to greatness through the art of refactoring. Embrace the chaos and create harmony.
        </p>
      </div>
    </section>
    </>
  )
}
