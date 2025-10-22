import { motion } from "framer-motion";
import { css } from "@emotion/css";
import { colors } from "../lib/theme";
import { AnimatePresence } from "../lib/animate-presence";
import { store } from "../store/store";

export function Countdown() {
  return (
    <AnimatePresence>
      <div
        className={css({
          color: store.isWarning ? colors.error : colors.text,
          fontSize: 48,
          fontWeight: 300,
        })}
      >
        <motion.div
          key={store.secondsLeft}
          exit={{
            opacity: 0,
            position: "absolute",
            scale: 1,
          }}
          animate={{ opacity: 1, scale: 1.1 }}
          initial={{ opacity: 0, scale: 1 }}
        >
          {store.secondsLeft}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
