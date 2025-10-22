import { css } from "@emotion/css";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { colors } from "../lib/theme";
import { motion } from "framer-motion";
import { store } from "../store/store";

export function StartScreen() {
  return (
    <Modal marginTop={"32px"}>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        })}
      >
        <span className={css({ fontSize: 48, fontWeight: 600, fontFamily: "Arial, sans-serif" })}>Алиас</span>
        <span className={css({ fontSize: 18, fontWeight: 300, fontFamily: "Arial, sans-serif", color: "#E53D00" })}>для дизайнеров</span>
        
        <p className={css({ fontSize: 18, lineHeight: 1.4, marginBottom: 8, })} >
          <strong>Нельзя</strong> использовать однокоренные слова, показывать
          на предметы или рисовать.
        </p>

        <p className={css({ fontSize: 18, lineHeight: 1.4, marginBottom: 8, marginTop: 0, })} >
          <strong>Можно</strong> объяснять синонимами, аналогиями,
          контекстом. Слова можно пропускать.
        </p>        

        <p className={css({ fontSize: 18, marginBottom: 0, marginTop: 8, paddingBottom: 8 })}>
          <strong>Раунд продлится</strong>
        </p>

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: 10,
          fontSize: 18,
        })}
      >
        {[10, 30, 60, 90].map((item) => {
          const isActive = store.secondsPerRound === item;
          return (
            <label
              key={item}
              className={css({
                display: "flex",
                alignItems: "center",
                gap: 12,
                cursor: "pointer",
                userSelect: "none",
              })}
            >
              <span
                className={css({
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  border: `2px solid ${isActive ? colors.success : "#aaa"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                })}
              >
                {isActive && (
                  <span
                    className={css({
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: colors.success,
                    })}
                  />
                )}
              </span>
              <input
                type="radio"
                name="time"
                checked={isActive}
                onChange={() => store.changeSecondsPerRound(item)}
                className={css({ display: "none" })}
              />
              <span>{item} секунд</span>
            </label>
          );
        })}
      </div>


        <div className={css({ marginTop: 24 })} />
        <Button
          mainColor={colors.success}
          onClick={() => {
            store.startTimer();
          }}
        >
          <motion.div
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            className={css({ fontWeight: 600, fontSize: 20, fontFamily: "Arial, sans-serif" })}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            Поехали!
          </motion.div>
        </Button>
      </div>
    </Modal>
  );
}
