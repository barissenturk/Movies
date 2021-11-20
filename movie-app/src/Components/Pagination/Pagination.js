import React from "react";
import styles from "./Pagination.module.css";
export default function Pagination({ totalpage, currentPage, setCurrentPage }) {
  const changePageNumber = () => {
    return currentPage++;
  };
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationBox} onClick={() => setCurrentPage(1)}>
        {" "}
        {"<<"}
      </div>
      {currentPage > 3 ? (
        <div className={styles.paginationBox} onClick={() => setCurrentPage(1)}>
          1
        </div>
      ) : null}
      {currentPage > 3 ? <div className={styles.paginationBox}>...</div> : null}
      {currentPage > 2 ? (
        <div
          className={styles.paginationBox}
          onClick={() => setCurrentPage(currentPage - 2)}
        >
          {currentPage - 2}
        </div>
      ) : null}
      {currentPage > 1 ? (
        <div
          className={styles.paginationBox}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {currentPage - 1}
        </div>
      ) : null}
      <div className={`${styles.paginationBox} ${styles.active}`}>
        {currentPage}
      </div>
      {currentPage < totalpage - 1 ? (
        <div
          className={styles.paginationBox}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {currentPage + 1}
        </div>
      ) : null}
      {currentPage < totalpage - 2 ? (
        <div
          className={styles.paginationBox}
          onClick={() => setCurrentPage(currentPage + 2)}
        >
          {currentPage + 2}
        </div>
      ) : null}
      {currentPage < 497 ? (
        <div className={styles.paginationBox}>...</div>
      ) : null}
      {currentPage > 1 && currentPage < totalpage ? (
        <div
          className={styles.paginationBox}
          onClick={() => setCurrentPage(totalpage)}
        >
          {totalpage}
        </div>
      ) : null}
      <div
        className={styles.paginationBox}
        onClick={() => setCurrentPage(changePageNumber())}
      >
        {" "}
        {">>"}
      </div>
    </div>
  );
}
