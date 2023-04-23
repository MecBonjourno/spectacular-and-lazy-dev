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
      <div className="flex justify-between w-3/4 gap-2" ref={ref}>
        <motion.div className="w-1/3" variants={columnVariants}>
          <h2 className="text-3xl font-bold mb-4">Benefits</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            feugiat, mauris a sollicitudin rutrum, dolor est tristique tortor,
            eget iaculis nisi elit a odio.
          </p>
          <p className="text-lg mb-4">
            Vivamus hendrerit massa ut eros auctor, ac euismod lacus bibendum.
            Suspendisse nec enim at justo ullamcorper fringilla.
          </p>
          <p className="text-lg">
            Quisque ut metus dapibus, sodales odio at, placerat mi. Praesent
            faucibus leo et mauris aliquet interdum.
          </p>
        </motion.div>
        <motion.div className="w-1/3" variants={columnVariants}>
          <h2 className="text-3xl font-bold mb-4">Challenges</h2>
          <p className="text-lg mb-4">
            Fusce vestibulum malesuada erat, a posuere mauris pulvinar ac. Sed
            tincidunt metus nec sapien interdum pharetra.
          </p>
          <p className="text-lg mb-4">
            Integer cursus tellus ac ligula sagittis, quis rhoncus dolor
            efficitur. Nunc hendrerit lobortis tellus.
          </p>
          <p className="text-lg">
            Curabitur in lorem ac libero dictum ornare in sed eros. Vivamus
            gravida sapien eget quam aliquam, ut ultrices nisl dictum
          </p>
        </motion.div>
        <motion.div className="w-1/3" variants={columnVariants}>
          <h2 className="text-3xl font-bold mb-4">Testing</h2>
          <p className="text-lg mb-4">
            Morbi rutrum diam velit, vel tempor purus aliquam vel. Proin sit
            amet elit in nisl rhoncus varius.
          </p>
          <p className="text-lg mb-4">
            Etiam in dolor tincidunt, lobortis velit eu, lobortis massa. Sed
            fringilla orci eu lobortis pharetra.
          </p>
          <p className="text-lg">
            Suspendisse eu quam ut nibh vestibulum fermentum. Maecenas ac urna
            vel velit bibendum commodo non quis eros.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
export default ThreeColumnSection
