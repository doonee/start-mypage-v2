import React from "react";
import "../css/browser_setting.css";

export default function BrowserSetting() {
    document.querySelectorAll('ul#menuLinks li').forEach((e) => {
        let html = '';
        switch (e) {
            case 'chromePc':
                //return <h4>판매자 로그인</h4>
                html = '<h4>판매자 로그인</h4>';
                break;
            case 'customer':
                // return <h4>구매자 로그인</h4>
                html = '<h4>판매자 로그인222</h4>';
                break;
            default:
                // return <h4>그냥 로그인</h4>
                html = '<h4>판매자 로그인333</h4>';
                break;
        }
        document.querySelector('#contentList').innerHTML = html;
    })
    return (
        <section className="container-xl">
            <h2 className="h3">시작페이지 설정방법</h2>
            <div id="mainWrap">
                <ul id="menuLinks">
                    <li>
                        데스크탑 크롬 시작페이지 설정방법
                    </li>
                    <li>
                        <a href="mobile_chrome_st.html">
                            모바일 크롬 시작페이지 설정방법
                        </a>
                    </li>
                    <li>
                        <a href="pc_chrome_fa.html">
                            데스크탑 크롬 북마크 설정방법
                        </a>
                    </li>
                    <li>
                        <a href="mobile_chrome_fa.html">
                            모바일 크롬 북마크 설정방법
                        </a>
                    </li>
                </ul>
                <h2>데스크탑 크롬 시작페이지 설정방법</h2>
                <ul id="contentList">
                    <li>
                        <p>1. 우측상단 주소창 옆의 더보기 아이콘 클릭</p>
                        <img src="/img/browser_setting/pc_chrome_st/1.png" alt="시작페이지 설정방법" />
                    </li>
                    <li>
                        <p>2. 설정 선택</p>
                        <img src="/img/browser_setting/pc_chrome_st/2.png" alt="시작페이지 설정방법" />
                    </li>
                    <li>
                        <p>3. 특정페이지 또는 페이지 모음 열기 선택</p>
                        <img src="/img/browser_setting/pc_chrome_st/3.png" alt="시작페이지 설정방법" />
                    </li>
                    <li>
                        <p>4. 우측의 더보기 아이콘 클릭 후 수정 클릭</p>
                        <img src="/img/browser_setting/pc_chrome_st/4.png" alt="시작페이지 설정방법" />
                    </li>
                    <li>
                        <p>5. http://startmypage.com 입력 후 저장</p>
                        <img src="/img/browser_setting/pc_chrome_st/5.png" alt="시작페이지 설정방법" />
                    </li>
                </ul>
            </div>
        </section>
    );
}
