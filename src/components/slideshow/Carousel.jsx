import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import eye from "../../assets/Groupeye.svg"

const Carousel = ({ data, view, title }) => {
  console.log("data", data)
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
      x: "-20vw",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      backgroundImage: "url(" + data[leftId] + ")",
      zIndex: "4",
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.0)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      backgroundImage: "url(" + data[rightId] + ")",
      x: "20vw",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.0)",
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightHidden: {
      x: "40vw",
      scale: 0,
      opacity: 0,
    },
    leftHidden: {
      x: "-40vw",
      scale: 0,
      opacity: 0,
    },
  }

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex items-center justify-center pt-8 px-8 gap-4">
        {data.map((d, i) => (
          <div
            className={`h-1 w-full rounded-md ${i <= centerId ? "bg-white" : "bg-gray-800"
              }`}
          ></div>
        ))}
      </div>

      <div className="flex justify-between px-8 mt-4">
        <h1 className="font-bold text-3xl text-white">{title}</h1>
        <div className="text-white flex items-center gap-2">
          <img src={eye} /> {view}
        </div>
      </div>

      <motion.div className="grid place-content-center rounded-2xl h-full">
        <motion.div className="relative h-frame aspect-[9/16]">
          <AnimatePresence initial={false}>
            <motion.div
              key={leftId}
              variants={variants}
              initial={flowDirection ? "center" : "leftHidden"}
              animate="left"
              exit={"leftHidden"}
              className="absolute h-frame aspect-[9/16] bg-center bg-cover rounded-2xl bg-no-repeat"
            ></motion.div>
            <motion.div
              variants={variants}
              key={centerId}
              initial={flowDirection ? "right" : "left"}
              animate="center"
              className="absolute h-frame aspect-[9/16] bg-center bg-cover rounded-2xl bg-no-repeat"
            >
              <div className="flex justify-between z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%]">
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="bwd-btn w-7 h-7 rounded-full bg-slate-700 text-white font-bold"
                  onClick={prevBtn}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
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
                  className="fwd-btn w-7 h-7 rounded-full bg-slate-700 text-white font-bold"
                  onClick={nextBtn}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              key={rightId}
              variants={variants}
              initial={flowDirection ? "rightHidden" : "center"}
              animate="right"
              exit={"rightHidden"}
              className="absolute h-frame aspect-[9/16] bg-center bg-cover rounded-2xl bg-no-repeat"
            ></motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Carousel
