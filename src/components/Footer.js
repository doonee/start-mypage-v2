const Footer = () => {
  // private policy
  const showPrivatePolicy = () => {
    document.querySelector("#btn-msg").innerText =
      "StartMypage 앱은 어떠한 개인정보도 수집하지 않습니다.";
  };

  return (
    <div className="container-fluid bg-light m-0 pb-3 border-top">
      <footer className="container-xl d-flex flex-wrap justify-content-between align-items-center pt-4">
        <p className="col-md-6 mb-0 text-muted small">
          Copyright © 2017 -
          <script>document.write(new Date().getFullYear());</script>
          Start Mypage Team. All rights reserved.
        </p>
        <ul
          className="nav col-md-4 justify-content-end small"
          style={{ minWidth: "-webkit-fill-available" }}>
          <li className="nav-item">
            <a href="showPrivatePolicy()" className="nav-link px-2 text-muted">
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
