import React from 'react'
import { motion } from "framer-motion";
// import {txt,txt2} from './animation';
import * as all from './animation';

export default function Framer() {
  // 여기 있던거 animation.js로 옮김
  
  return (
    <>
      <article>
        <h2>Framer Motion</h2>
        <motion.div 
        variants={all.txt}
        initial="init"
        animate="play"
        >
          npm install framer-motion<br/>
          ㄴimport { motion } from "framer-motion";<br/>
        </motion.div>
      </article>
    </>
  )
}
