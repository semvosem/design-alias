import { css } from "@emotion/css";
import { Counter } from "../ui/counter";
import { Countdown } from "../ui/countdown";
import { CardDeck } from "../ui/card-deck";
import { colors } from "../lib/theme";
import { store } from "../store/store";

export function GameScreen() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "16px 0",
        boxSizing: "border-box",
      })}
    >
      {/* Таймер */}
      <div
        className={css({
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          marginTop: 16,

        })}
      >
        <Countdown />
      </div>

      {/* Карточки */}
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 12,
          flexGrow: 1, 
          overflowY: "auto",
          maxHeight: "calc(100vh - 140px)",
          margin: "24px 0", 

        })}
      >
        <CardDeck />
      </div>

      {/* Счетчики */}
      <div
        className={css({
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          gap: 48,
        })}
      >
        <Counter color={colors.error} value={store.skipped.length} />
        <Counter color={colors.success} value={store.guessed.length} />
      </div>
    </div>
  );
}
