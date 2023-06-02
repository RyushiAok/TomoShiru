import React from "react";
import * as styles from "../styles/profile-header.css";
import { Avator, Button, Header, Logo } from "@/ui";

type User = {
  name: string;
  icon: string;
  me: boolean;
  following: number;
  follower: number;
};

type Props = {
  user: User;
  right?: React.ReactNode;
};

const _ProfileHeader = ({ user, right }: Props) => {
  return (
    <Header>
      <div className={styles.headStyle}>
        <div className={styles.profileStyle}>
          <Avator size="medium" image={user.icon} />
          <span>{user.name}</span>
        </div>
        {right}
      </div>
      <div className={styles.followWrapperStyle}>
        <span className={styles.followStyle}>
          <span className={styles.followCountStyle}>{user.following}</span>
          <span className={styles.followlabelStyle}>フォロー</span>
        </span>
        <span className={styles.followStyle}>
          <span className={styles.followCountStyle}>{user.follower}</span>
          <span className={styles.followlabelStyle}>フォロワー</span>
        </span>
      </div>
    </Header>
  );
};

export const ProfileHeader = _ProfileHeader;
