import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import { BigContainer } from "../../style-app";
import { useTranslation } from "react-i18next";
import LogoFooter from "../../assets/footer/Logo-footer.svg";
import styles from "./footer.module.css";
import { CategoryGet } from "../../redux/category/index";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Footer = () => {
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const categoryGetState = useSelector((state) => state.category.categoryGet?.data);
  console.log(categoryGetState)
  useEffect(() => {
    dispatch(CategoryGet())
  }, [])

  const handleTop = () => {
    window.scrollTo(0, 300)
  }

  return (
    <>
      <Col className={styles.footer_top}>
        <BigContainer>
          <Row className={styles.footer_top_row} >
            <Col lg={3} md={3} sx={12} sm={12} className={styles.footer_logo}>
              <Link to="/">
                <img className={styles.footer_img} src={LogoFooter} alt="company logo" />
              </Link>
            </Col>
            <Col lg={3} md={3} sx={12} sm={12} className={styles.footer_list}>
              <Link onClick={handleTop} to="/catalog">{t("Footer.0")}</Link>
              {
                categoryGetState.map(elem => (
                  <>
                    <Link onClick={handleTop} id={elem.id} to="/catalog">{
                      LangVal() == "ru"
                        ? elem.title_ru
                        : LangVal() == "uz"
                          ? elem.title_uz
                          : LangVal() == "en"
                            ? elem.title_en
                            : elem.title_ru
                    }</Link>
                  </>
                ))
              }
            </Col>
            <Col lg={3} md={3} sx={12} sm={12} className={styles.footer_list}>
              <span className={styles.footer_list_span}>{t("Footer.6")}</span>
              <Link to="/about">{t("Footer.7")}</Link>
              <Link to="/services">{t("Footer.8")}</Link>
              <Link to="/blog">{t("Footer.9")}</Link>
              <Link to="/news">{t("Footer.10")}</Link>
              <Link to="/contact">{t("Footer.11")}</Link>
            </Col>
            <Col lg={3} md={3} sx={12} sm={12} className={styles.footer_list}>
              <span className={styles.footer_list_span}>{t("Footer.12")}</span>
              <a href="tel:998933911171">+998 93 (391) - 11 - 71</a>
              <a href="mailto:m.buriev@yodik.uz">m.buriev@yodik.uz</a>
              <span className={styles.footer_list_span}>{t("Footer.13")}</span>
              <a className={styles.footer_adress} href="/">
                <p>{t("Footer.14")}</p>
                <p>{t("Footer.15")}</p>
                <p>{t("Footer.16")}</p>
              </a>
            </Col>
          </Row>
        </BigContainer>
      </Col>
      <Col className={styles.footer_bottom}>
        <BigContainer>
          <p className={styles.copy_right}>
            ©Разработала команда
            <a href="https://supersite.uz">Supersite.uz</a>
          </p>
        </BigContainer>
      </Col>
    </>
  );
};