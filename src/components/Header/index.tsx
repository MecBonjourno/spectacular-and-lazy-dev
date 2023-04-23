import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import 'tailwindcss/tailwind.css'

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState({
    refactoring: false,
    patterns: false,
    ai: false,
  })

  const handleMouseEnter = (dropdown: string) => {
    setShowDropdown({ ...showDropdown, [dropdown]: true })
  }

  const handleMouseLeave = (dropdown: string) => {
    setShowDropdown({ ...showDropdown, [dropdown]: false })
  }

  const slideIn = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-400 text-white z-10">
      <div className="container mx-2 px-4 py-3">
        <nav className="flex items-center">
          <h1 className="mx-4 text-lg font-bold">
            <Link href="/">Patterns</Link>
          </h1>
          <div
            onMouseEnter={() => handleMouseEnter('refactoring')}
            onMouseLeave={() => handleMouseLeave('refactoring')}
            className="relative"
          >
            <Link href="/refactoring">
              <p>Refactoring</p>
            </Link>
            {showDropdown.refactoring && (
              <motion.div
                className="absolute left-0 mt-2 w-48 p-4 bg-black text-white rounded"
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h3 className="text-lg font-semibold mb-2">
                  Refactoring Content
                </h3>
                <ul>
                  <li>What is Refactoring</li>
                  <li>Clean Code</li>
                  <li>Dirty Code</li>
                  <li>Code Smells</li>
                  <li>Refactoring Process</li>
                  <li>Refactoring Techniques</li>
                </ul>
              </motion.div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('patterns')}
            onMouseLeave={() => handleMouseLeave('patterns')}
            className="relative ml-4"
          >
            <Link href="/patterns">
              <p>Patterns</p>
            </Link>
            {showDropdown.patterns && (
              <motion.div
                className="absolute left-0 mt-2 w-48 p-4 bg-black text-white rounded"
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h3 className="text-lg font-semibold mb-2">Design Patterns</h3>
                <ul>
                  <li>What is a Design Pattern</li>
                  <li>Patterns</li>
                  <li>Benefits</li>
                  <li>Classification</li>
                  <li>History of Patterns</li>
                  <li>Criticism of Patterns</li>
                </ul>
              </motion.div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('ai')}
            onMouseLeave={() => handleMouseLeave('ai')}
            className="relative ml-4"
          >
            <Link href="/patterns">
              <p>AI</p>
            </Link>
            {showDropdown.ai && (
              <motion.div
                className="absolute left-0 mt-2 w-48 p-4 bg-black text-white rounded"
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h3 className="text-lg font-semibold mb-2">
                  AI Related Content
                </h3>
                <ul>
                  <li>What do you mean AI?</li>
                  <li>AI</li>
                  <li>GPT</li>
                  <li>LLM</li>
                  <li>So what?</li>
                </ul>
              </motion.div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
