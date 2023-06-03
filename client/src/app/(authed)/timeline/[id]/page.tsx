"use client";
import React, { useEffect, useState } from "react";
import { NoticeCard } from "@/app/_ui";
import * as styles from "../_styles/timeline.css";
import { Label } from "@/ui";
import { getTimeLine, getUser } from "@/api";
import { User } from "@/utils";
import { Avator, Card } from "@/ui";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  const [timelineDOM, setTimelineDOM] = useState<React.ReactNode[]>();

  useEffect(() => {
    (async () => {
      const timeline = await getTimeLine(params.id);
      const tlDOM: React.ReactNode[] = [];
      timeline?.forEach(async (tl) => {
        const user = await getUser(tl.user_id);
        tlDOM.push(
          <div className={styles.cardWrapperStyle}>
            <Card>
              <div className={styles.cardInnerStyle}>
                <Avator image={user?.image_url} size="small" />
                <p className={styles.actionStyle}>
                  <span className={styles.userNameStyle}>
                    {user?.user_name}
                  </span>
                  さんが{tl.summary}
                </p>
              </div>
            </Card>
          </div>
        );
      });
      setTimelineDOM(tlDOM);
    })();
  }, []);

  return <div>{timelineDOM}</div>;
};

export default Page;
