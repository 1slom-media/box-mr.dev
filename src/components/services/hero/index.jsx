import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../common/button-common/index";
import NewHeroCommon from "../../common/new-hero";
import styles from "./style.module.css";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <NewHeroCommon className={styles.bg} heroTitle={t("Home.7")} />
    </>
  );
};

export default Hero;
