import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

export const Feature = ({ imageUrl, title, description, link }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={styles.featureImage}
            src={imgUrl}
            alt={title}
            onClick={() => (window.location.href = link)}
          />
        </div>
      )}
      <h3>
        <a href={link}>{title}</a>
      </h3>
      <p>{description}</p>
    </div>
  );
};
