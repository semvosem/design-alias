import { css, cx } from "@emotion/css";
import { Button } from "../ui/button";
import { reset } from "../lib/reset";
import { Modal } from "../ui/modal";
import { colors } from "../lib/theme";
import { store } from "../store/store";

export function FinishScreen() {
  return (
    <Modal marginTop={"32px"}>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          zIndex: 11,
        })}
      >
        <span className={css({ fontSize: 32, fontWeight: 600, fontFamily: "Arial, sans-serif" })}>
          Раунд окончен 
        </span>

        <div
          className={css({
            display: "flex",
            width: "100%",
            gap: 16,
            fontSize: 18,
            marginTop: 18,
            lineHeight: 1.5,
          })}
        >
          <ul className={cx(reset.ul)} style={{ flex: 1 }}>
            <li>
              <span className={css({ fontWeight: 600 })}>
                Пропущено: {store.skipped.length}
              </span>    
            </li>
            {store.skipped.map((word) => (
              <li
                key={word}
                className={css({
                  color: colors.error,
                  fontWeight: 400,
                })}
              >
                {word}
              </li>
            ))}
          </ul>
          <ul className={cx(reset.ul)} style={{ flex: 1 }}>
            <li>
              <span className={css({ fontWeight: 600 })}>
                Отгадано:  {store.guessed.length}
              </span>  
            </li>
            {store.guessed.map((word) => (
              <li
                key={word}
                className={css({
                  color: colors.success,
                  fontWeight: 400,
                })}
              >
                {word}
              </li>
            ))}
          </ul>
        </div>

        <div className={css({ marginTop: 36 })} />
        <Button
          mainColor={colors.success}
          onClick={() => {
            store.restart();
          }}
        >
          <span className={css({ fontWeight: 600, fontSize: 18, fontFamily: "Arial, sans-serif" })}>
            Продолжить
          </span>
        </Button>
      </div>
    </Modal>
  );
}
