import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ThreeColumnSection = () => {
  const sectionRef = useRef(null)
  const { ref, inView } = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      // @ts-ignore
      sectionRef.current?.classList.add('animate')
    }
  }, [inView])

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        ease: 'easeInOut',
      },
    },
  }

  const columnVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.section
      ref={sectionRef}
      className="h-screen flex justify-center items-center"
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="flex justify-between w-3/4 gap-6" ref={ref}>
        <motion.div className="w-1/3" variants={columnVariants}>
          <h2 className="text-3xl font-bold mb-4">Benefits</h2>
          <p className="text-lg mb-4">
            Refactoring brings a lot of benefits along the way. Code Quality, improves the readability for example.
          </p>
          <p className="text-lg mb-4">
            But not only that, Maintainability, Scalability, Performance, Sharing and Collaborating, all of these are benefits of refactoring.
          </p>
          <p className="text-lg mb-4">
            Imagine that project, with colorful folders, colorful files, colorful functions, colorful variables, colorful comments, colorful everything.
            Everything in the right place, files in the right folders, functions in the right files, variables with the right names, comments that make sense.
            Organization is a gift, and refactoring is the way to get it.
          </p>
          <p className="text-lg mb-4">
            And as gift, we improve our skills, we learn new things, we become better developers. Just like riding a bike.
          </p>
          <p className="text-lg font-bold">
            The list of benefits is not short, and for sure can't have all of them, there are benefits not measurable, like the feeling of accomplishment or finally taking care of that warning. This all comes with refactoring.
          </p>
        </motion.div>
        <motion.div className="w-1/3" variants={columnVariants}>
          <h2 className="text-3xl font-bold mb-4">Challenges</h2>
          <p className="text-lg mb-4">
            Everything in life is a choice. What you will eat today? Will I get out of bed today even though its so cold outside? (risking your job and carrer for an extra 10 minutes in bed.)
          </p>
          <p className="text-lg mb-4">
            Choices, harder choices, easier choices. Refactoring is a choice. And as every choice, it has its challenges.
          </p>
          <p className="text-lg">
            And the most important one, the start part. Once you move a finger and do a click, you are already on the way.
            Starting this big challenge (big for me at least, an ADHD guy who hates to redo things), feels like a nightmare, which may break the project, or even worse, break the developer.
          </p>
          <p className="text-lg font-bold">
            But never forget whats on the other side of the road. The benefits, the good things, the good feelings. 
            That magic compliment that you will remember for the rest of your life since the you've been complimented three times in your life and none were from your mom.
          </p>
        </motion.div>
        <motion.div className="w-1/3" variants={columnVariants}>
          <h2 className="text-3xl font-bold mb-4">Testing</h2>
          <p className="text-lg mb-4">
            The worst of all, the demon, the fiend, the torturer of all others,
            TESTS. The tests are the worst of all. I hate it, you hate it,
            I never met someone with head in place that enjoyed this kind of torture.
          </p>
          <p className="text-lg mb-4">
            Take the vision: If you wrote, a function that does something, and it works, why would you write a test for it? It works, right? IT WORKS I TESTED IT.
          </p>
          <p className="text-lg mb-4">
            Everybody says they are important, we will give them meaning, for better or worse. If needed, we will have a fight with them. But we will understand why they exist. I promise.
          </p>
          <p className="text-lg mb-4">
            We will talk about them soon. Believe me, there is a remote chance of salvation for this topic.
          </p>
          <p className="text-lg font-bold">
            (For real now, Tests are important, we know that, we hate that. This doesnt mean we should do a crap job at them)
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
export default ThreeColumnSection
