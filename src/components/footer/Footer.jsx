import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jidonee</h1>

        <ul className="footer__list">
          <a className="footer__link">
            본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 만들어진 사이트입니다.
          </a>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/Jidonee/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.instagram.com/Jidonee"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="http://www.jiseon.kr/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-internet-explorer"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Lee Ji Seon. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

/*
import React from "react";
import "./footer.css";

const Footer = () => {
    return(
        <footer>
            <div className="footer_text">
                <h2>JIDONEE</h2>
            </div>
        </footer>
    )
}
export default Footer;*/