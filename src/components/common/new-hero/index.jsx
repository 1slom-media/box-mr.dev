import React from "react";
import { BigContainer } from "../../../style-app";
import { Row, Col } from "react-grid-system";
import styles from './new-hero.module.css';
import Header from "../../header";

const NewHeroCommon = ({
  heroTitle,
  className,
  new_hero_title_class
}) => {
  return (
    <>
      <div className={`${styles.hero_section} ${className}`}>
        <Header scroll={0} />
        <BigContainer>
          <Row className={styles.home_hero_row}>
            <Col
              className={styles.home_hero_col}
              lg={12}
              md={12}
              sx={12}
              sm={12}
            >
              <h2 className={new_hero_title_class}>{heroTitle}</h2>
            </Col>
          </Row>
        </BigContainer>
      </div>
    </>
  );
};

export default NewHeroCommon;
