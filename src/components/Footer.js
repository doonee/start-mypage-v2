/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = () => {
  const curYear = new Date().getFullYear();

  const showPrivatePolicy = () => {
    document.querySelector("#btn-msg").innerHTML =
      "<strong>StartMypage 앱은 어떠한 개인정보도 수집하지 않습니다.</strong><br /><br />";
  };

  return (
    <div className="container-fluid bg-light m-0 pb-3 border-top">
      <footer className="container-xl d-flex flex-wrap justify-content-between align-items-center pt-4">
        <p className="col-md-6 mb-0 text-muted small">
          Copyright © 2017 - {curYear} Start Mypage Team. All rights reserved.
        </p>
        <ul
          className="nav col-md-4 justify-content-end small"
          style={{ minWidth: "-webkit-fill-available" }}>
          <li className="nav-item">
            <a
              style={{ cursor: "pointer" }}
              onClick={showPrivatePolicy}
              className="nav-link px-2 text-muted">
              개인정보보호정책
            </a>
          </li>
          <li className="nav-item">
            <a
              href="mailto:d2607@naver.com"
              className="nav-link px-2 text-muted">
              문의하기
            </a>
          </li>
          <li className="nav-item">
            <a
              href="http://doonee.net"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 text-muted">
              개발자
            </a>
          </li>
          <li style={{ width: "3rem" }}>&nbsp;</li>
        </ul>
        <div className="col-12 text-center" id="btn-msg">
          &nbsp;
        </div>
      </footer>
    </div>
  );
};

export default Footer;
