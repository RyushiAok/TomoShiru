"use client";
import React, { useState } from "react";
import * as styles from "../styles/like.css";

type Props = {
  liked: boolean;
  num: number;
};

const _Like = ({ liked, num, ...props }: Props) => {
  const [likedState, setLikedState] = useState<boolean>(liked);
  const [numState, setNumState] = useState<number>(num);
  const [color, setColor] = useState<"pink" | "gray">(liked ? "pink" : "gray");

  const handleClick = () => {
    setLikedState((prevLiked) => {
      if (prevLiked) {
        setNumState((prevNum) => --prevNum);
        setColor("gray");
      } else {
        setNumState((prevNum) => ++prevNum);
        setColor("pink");
      }
      return !prevLiked;
    });
  };

  return (
    <div className={styles.wrapperStyle} onClick={handleClick}>
      <div className={styles.contentStyle}>
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.fill[color]}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.95254 11.6845C-0.650874 9.08102 -0.650845 4.85998 1.95262 2.25652C4.55612 -0.34698 8.77722 -0.34698 11.3807 2.25652C13.9841 -0.34698 18.2052 -0.34698 20.8087 2.25652C23.4122 4.86001 23.4122 9.08111 20.8087 11.6846L20.7918 11.7015L11.3805 21.1127L1.95244 11.6846L1.95254 11.6845Z"
            fill="#FF7987"
          />
        </svg>
        <span className={[styles.numStyle, styles.color[color]].join(" ")}>
          {numState}
        </span>
      </div>
    </div>
  );
};

export const Like = _Like;
