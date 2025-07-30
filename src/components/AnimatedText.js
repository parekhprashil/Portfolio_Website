import React from 'react'
import {animate, delay, motion, stagger} from 'framer-motion'

const quoteAnimation = {
    initial:{
        opacity:1
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08,
        }
    }
}

const singleword = {
    initial:{
        opacity:0,
        y:50
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}

const AnimatedText = ({text,className=""}) => {
  return (
    <div className='w-full mx-auto py-2 items-center justify-center text-center overflow-hidden'>
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={quoteAnimation} initial="initial" animate="animate"
        >
        {
            text.split(" ").map((word, index) => 
                <motion.span key={word+"-"+index} className='inline-block'
                variants={singleword}>
                    {word}&nbsp;
                </motion.span>
            )
        }
        </motion.h1>
    </div>
  )
}

export default AnimatedText