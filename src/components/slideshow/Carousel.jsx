import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
// import "./carousel.scss"
import { useEffect } from "react"
const Carousel = ({ data }) => {
  const [flowDirection, setFlowDirection] = useState(true)
  const [centerId, setCenterId] = useState(0)
  const [leftId, setLeftId] = useState(data.length - 1)
  const [rightId, setRightId] = useState(1)

  const nextBtn = () => {
    if (leftId === data.length - 1) {
      setLeftId(0)
    } else {
      setLeftId(leftId + 1)
    }
    if (centerId === data.length - 1) {
      setCenterId(0)
    } else {
      setCenterId(centerId + 1)
    }

    if (rightId === data.length - 1) {
      setRightId(0)
    } else {
      setRightId(rightId + 1)
    }
    setFlowDirection(true)
  }

  const prevBtn = () => {
    setFlowDirection(false)
    if (leftId === 0) {
      setLeftId(data.length - 1)
    } else {
      setLeftId(leftId - 1)
    }
    if (centerId === 0) {
      setCenterId(data.length - 1)
    } else {
      setCenterId(centerId - 1)
    }
    if (rightId === 0) {
      setRightId(data.length - 1)
    } else {
      setRightId(rightId - 1)
    }
  }

  // useEffect(() => {

  //   const timerId = setInterval(() => nextBtn(), 2000)
  //     return () => clearInterval(timerId)
  // });

  const variants = {
    center: {
      x: "0rem",
      opacity: 1,
      scale: 1.2,
      zIndex: "5",
      filter: "brightness(100%)",
      backgroundImage: "url(" + data[centerId] + ")",
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: "-100%",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      backgroundImage: "url(" + data[leftId] + ")",
      zIndex: "4",
      boxShadow: "unset",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      backgroundImage: "url(" + data[rightId] + ")",
      x: "100%",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      boxShadow: "unset",
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightHidden: {
      x: "150%",
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: "-150%",
      scale: 0,
      opacity: 0,
    },
  }

  return (
    <motion.div className="grid place-content-center rounded-2xl h-screen">
      <motion.div className="relative h-96 aspect-[9/16]">
        <AnimatePresence initial={false}>
          <motion.div
            key={leftId}
            variants={variants}
            initial={flowDirection ? "center" : "leftHidden"}
            animate="left"
            exit={"leftHidden"}
            className="absolute h-96 aspect-[9/16] bg-center bg-cover rounded-2xl bg-no-repeat"
          ></motion.div>
          <motion.div
            variants={variants}
            key={centerId}
            initial={flowDirection ? "right" : "left"}
            animate="center"
            className="absolute h-96 aspect-[9/16] bg-center bg-cover rounded-2xl bg-no-repeat"
          ></motion.div>
          <motion.div
            key={rightId}
            variants={variants}
            initial={flowDirection ? "rightHidden" : "center"}
            animate="right"
            exit={"rightHidden"}
            className="absolute h-96 aspect-[9/16] bg-center bg-cover rounded-2xl bg-no-repeat"
          ></motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="flex justify-center gap-4 z-10">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="bwd-btn w-20 bg-slate-700 text-white font-bold"
          onClick={prevBtn}
        >
          Back
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="fwd-btn w-20 bg-slate-700 text-white font-bold"
          onClick={nextBtn}
        >
          Next
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Carousel