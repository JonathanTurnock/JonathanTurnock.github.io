import clsx from "clsx";
import styles from "../pages/styles.module.css";
import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const LandingPageLink = ({ label, url }) => {
  return (
    <div style={{ padding: "5px" }}>
      <Link
        className={clsx(
          "button button--outline button--secondary button--lg",
          styles.getStarted
        )}
        to={useBaseUrl(url)}
      >
        {label}
      </Link>
    </div>
  );
};
