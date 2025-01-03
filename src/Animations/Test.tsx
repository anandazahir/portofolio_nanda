import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Component/ThemeContext"; // Import the useTheme hook

type Props = {
  width?: string;
  height?: string;
};

const SwitchTheme: React.FC<Props> = ({
  width = "1.5em",
  height = "1.5em",
}) => {
  // Use the useTheme hook to get isDarkMode and toggleTheme
  const { isDarkMode, toggleTheme } = useTheme();

  const variants = {
    initial: { opacity: 0, scale: 0.8, rotate: 90 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.8, rotate: -90 },
  };

  return (
    <div>
      <button
        onClick={toggleTheme} // Use toggleTheme from useTheme
        className="bg-sky-blue rounded-full p-2 dark:hover:bg-white/20 hover:bg-black/20"
      >
        <AnimatePresence mode="wait">
          {!isDarkMode ? ( // Use isDarkMode from useTheme
            <motion.div
              key="moon"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width={width}
                height={height}
              >
                <path
                  d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                  stroke={!isDarkMode ? "#000000" : "#ffffff"} // Black in light mode, white in dark mode
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <svg
                fill={!isDarkMode ? "#000000" : "#ffffff"} // Black in light mode, white in dark mode
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 47.576 47.576"
                width={width}
                height={height}
              >
                <g>
                  <path d="M24.235,12.13c-6.478,0-11.748,5.269-11.748,11.748s5.27,11.747,11.748,11.747s11.748-5.27,11.748-11.747 S30.713,12.13,24.235,12.13z M24.235,33.275c-5.182,0-9.398-4.216-9.398-9.397c0-5.183,4.216-9.397,9.398-9.397 c5.183,0,9.397,4.217,9.397,9.397C33.632,29.06,29.418,33.275,24.235,33.275z M23.06,6.485V1.589c0-0.649,0.526-1.174,1.175-1.174 c0.648,0,1.175,0.525,1.175,1.174v4.896c0,0.648-0.528,1.175-1.175,1.175C23.586,7.66,23.06,7.133,23.06,6.485z M35.095,13.287 c-0.459-0.458-0.459-1.202,0-1.661l4.209-4.209c0.459-0.458,1.203-0.458,1.662,0c0.459,0.459,0.459,1.203,0,1.661l-4.209,4.209 c-0.229,0.229-0.528,0.344-0.83,0.344C35.627,13.631,35.326,13.516,35.095,13.287z M5.63,9.078c-0.458-0.458-0.458-1.202,0-1.661 c0.459-0.458,1.203-0.458,1.661,0l4.21,4.209c0.458,0.459,0.458,1.204,0,1.661c-0.229,0.229-0.53,0.344-0.83,0.344 c-0.301,0-0.602-0.115-0.831-0.344L5.63,9.078z M24.472,41.091v4.896c0,0.649-0.525,1.175-1.173,1.175 c-0.649,0-1.175-0.527-1.175-1.175v-4.896c0-0.649,0.526-1.176,1.175-1.176C23.947,39.915,24.472,40.441,24.472,41.091z M12.437,34.288c0.459,0.458,0.459,1.202,0,1.661l-4.209,4.21c-0.229,0.23-0.53,0.346-0.831,0.346c-0.3,0-0.601-0.117-0.83-0.346 c-0.459-0.458-0.459-1.203,0-1.662l4.209-4.209C11.235,33.829,11.978,33.829,12.437,34.288z M41.902,38.497 c0.459,0.459,0.459,1.202,0,1.662c-0.229,0.23-0.527,0.346-0.83,0.346c-0.299,0-0.601-0.117-0.83-0.346l-4.209-4.21 c-0.459-0.459-0.459-1.202,0-1.661s1.201-0.459,1.66,0L41.902,38.497z M6.461,25.054H1.175C0.526,25.054,0,24.526,0,23.878 s0.526-1.176,1.175-1.176h5.286c0.649,0,1.175,0.527,1.175,1.176C7.635,24.526,7.11,25.052,6.461,25.054z M47.576,23.878 c0,0.649-0.526,1.176-1.174,1.176h-6.267c-0.649,0-1.176-0.527-1.176-1.176s0.526-1.176,1.176-1.176h6.267 C47.05,22.702,47.576,23.228,47.576,23.878z" />
                </g>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default SwitchTheme;
