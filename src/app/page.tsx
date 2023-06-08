"use client";

import Button from "@/app/components/button";
import Counter from "@/app/components/counter";
import { FC } from "react";
import { RecoilRoot } from "recoil";
import styles from "./page.module.css";

const MyApp: FC = ({}) => {
  return (
    <>
      <RecoilRoot>
        <div className={styles.container}>
          <Counter />
          <div className={styles.divider} />
          <Button />
        </div>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
