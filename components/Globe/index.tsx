"use client";
import React from "react";
import { motion } from "framer-motion";
import InfiniteScrollText from './InfiniteScroll'; // Adjust the import path as needed

export function Globe() {
  return (
    <div className="relative w-full bg-transparent">
      <div className="mx-auto relative h-[25rem] md:h-[40rem] px-0 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            {/* Your Title Here */}
          </h2>
          <p className="text-center text-base md:text-2xl font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            {/* Your Description Here */}
          </p>
        </motion.div>
        {/* Add InfiniteScrollText component here */}
        <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-transparent">
          <InfiniteScrollText />
        </div>
      </div>
    </div>
  );
}
