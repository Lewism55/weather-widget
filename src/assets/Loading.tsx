import React from 'react'
import { motion } from 'framer-motion'

const rotateAnimation = {
    animate: {
        rotate: 360,
        transition: {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      },
    },
      
}

const Loading = () => (
    <motion.div
        style={{
            width: 50,
            height: 50,
            backgroundImage: 'linear-gradient(to right, white, white, grey, white, white)',
            borderRadius: '50%',
        }}
        variants={rotateAnimation}
        animate='animate'
    />
)

export default Loading
