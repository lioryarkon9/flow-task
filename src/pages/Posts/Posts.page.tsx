import React from "react";

import { useAppState } from "../../stateManager/state.context";

import styles from "./Posts.module.css";

export function PostsPage() {
  const { uiPosts: posts } = useAppState();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={`${styles.idCell} ${styles.headerCell}`}>ID</div>
        <div className={`${styles.titleCell} ${styles.headerCell}`}>TITLE</div>
        <div className={`${styles.userNameCell} ${styles.headerCell}`}>
          AUTHOR
        </div>
      </div>
      {posts?.map(({ id, title, userName }) => (
        <div className={styles.row} key={id}>
          <div className={`${styles.tableCell} ${styles.idCell}`}>{id}</div>
          <div className={`${styles.tableCell} ${styles.titleCell}`}>
            {title}
          </div>
          <div className={`${styles.tableCell} ${styles.userNameCell}`}>
            {userName}
          </div>
        </div>
      ))}
    </div>
  );
}
