import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { Feature } from "../components/Feature";
import { features } from "../data/home";
import { LandingPageLink } from "../components/LandingPageLink";

export default () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          {/*<LandingPageLink label={"Blogs 📚"} url="blog/" />*/}
          {/*<LandingPageLink*/}
          {/*  label={"Nim Tutorials 👑"}*/}
          {/*  url="https://jonathanturnock.github.io/nim-tutorials/docs"*/}
          {/*/>*/}
          {/*<LandingPageLink*/}
          {/*  label={"Civ VI Modding Wiki"}*/}
          {/*  url="https://jonathanturnock.github.io/civ-vi-modding/docs"*/}
          {/*/>*/}
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
};
