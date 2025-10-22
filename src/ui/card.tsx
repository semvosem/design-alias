import { motion, MotionProps } from "framer-motion";
import { css } from "@emotion/css";
import { colors, theme } from "../lib/theme";

type FramerMotionProps = Pick<MotionProps, "style" | "onDragEnd" | "animate">;

type Props = {
  word: string;
} & FramerMotionProps;

export function Card({ word, style, onDragEnd, animate }: Props) {
  return (
    <motion.div
      className={css({
        cursor: "grab",
        position: "absolute",
        left: "50%",
        top: 0,
        height: 400,
        width: 290,
        borderRadius: theme.borderRadius,
        color: colors.text,
        display: "grid",
        marginLeft: -155,
        placeItems: "center center",
        padding: 10,
      })}
      drag={"x"}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={onDragEnd}
      animate={animate}
      style={{ ...style, background: colors.card }}
      transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <p
        className={css({
          textAlign: "center",
          fontSize: 36,
          fontWeight: 600,
          wordBreak: "break-all",
          padding: 32,
        })}
      >
        {word}
      </p>
    </motion.div>
  );
}
