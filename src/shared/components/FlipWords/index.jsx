/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import cn from '../../../utils/cn'

const FlipWords = ({
  words,
  duration = 3000,
  className
}) => {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState(false)

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0]
    setCurrentWord(word)
    setIsAnimating(true)
  }, [currentWord, words])

  useEffect(() => {
    if (!isAnimating) {
      setTimeout(() => {
        startAnimation()
      }, duration)
    }
  }, [isAnimating, duration, startAnimation])

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false)
      }}>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          rotateX: 90
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0
        }}
        exit={{
          opacity: 0,
          y: -20,
          rotateX: -90,
          scale: 1.2,
          position: 'absolute',
          filter: 'blur(8px)'
        }}
        transition={{
          duration: 1.2,
          ease: 'easeInOut'
        }}
        className={cn(
          'z-10 relative text-neutral-900 dark:text-neutral-100 px-1',
          className
        )}
        key={currentWord}>
        {currentWord.split(' ').map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: wordIndex * 0.5,
              duration: 0.6,
              ease: 'easeInOut'
            }}
            className="inline-block whitespace-nowrap">
            {word.split('').map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: wordIndex * 0.5 + letterIndex * 0.07,
                  duration: 0.5,
                  ease: 'easeOut'
                }}
                className="inline-block">
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence >
  )
}

export default FlipWords
