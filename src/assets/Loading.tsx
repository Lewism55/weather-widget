import React from 'react'
import { motion } from 'framer-motion'

const rotateAnimation = {
    animate: {
        opacity: 1,
        rotate: 360,
        transition: {
            duration: 1,
            ease: 'linear',
            repeat: Infinity,
        },
    },
}

const Loading = () => (
    <motion.div
        style={{
            width: 25,
            height: 25,
            backgroundColor: '#DCDDDD',
            borderRadius: '3%',
        }}
        variants={rotateAnimation}
        exit={{ opacity: 0 }}
        animate='animate'
    />
)

export default Loading
