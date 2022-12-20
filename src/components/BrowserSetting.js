/* eslint-disable no-script-url */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../css/browser_setting.css";

export default function BrowserSetting() {
    const menus = [
        { id: 1, title: '데스크탑 크롬 시작페이지 설정방법', name: 'chromePcStart' },
        { id: 2, title: '모바일 크롬 시작페이지 설정방법', name: 'chromeMobileStart' },
        { id: 3, title: '데스크탑 크롬 북마크 설정방법', name: 'chromePcBookmark' },
        { id: 4, title: '모바일 크롬 북마크 설정방법', name: 'chromeMobileBookmark' }
    ];

    const [curMenuId, setCurMenuId] = React.useState('1');
    const [curMenuTitle, setCurMenuTitle] = React.useState('데스크탑 크롬 시작페이지 설정방법');

    const handleMenuClick = (e) => {
        setCurMenuId(e.target.getAttribute('menu-id'));
        setCurMenuTitle(e.target.outerText);
        Title();
        Content();
    }

    const Title = () => {
        return (
            <>
                <ul className='nav nav-pills nav-fill bg-light'>
                    {menus.map((m) => (
                        <li key={m.id} className="nav-item">
                            <a href="#" className={(m.id == curMenuId) ? "bg-warning text-secondary nav-link" : "nav-link"}
                                onClick={handleMenuClick}
                                menu-id={m.id}>
                                {m.title}</a>
                        </li>
                    ))}
                </ul>
                <h2>{curMenuTitle}</h2>
            </>
        )
    }

    const Content = () => {
        let htmlContent = '';
        if (curMenuId == 2) {
            htmlContent = `<li><p>1. 우측 상단의 더보기 아이콘 터치</p><img src="/img/browser_setting/mobile_chrome_st/1.jpg"></li>
            <li><p>2. 설정 선택</p><img src="/img/browser_setting/mobile_chrome_st/2.jpg"></li>
            <li><p>3. 홈페이지 사용 선택</p><img src="/img/browser_setting/mobile_chrome_st/3.jpg"></li>
            <li><p>4. 사용에 파란불 되게 터치하고 http://startmypage.com 입력</p><img src="/img/browser_setting/mobile_chrome_st/4.jpg"></li>`;
        } else if (curMenuId == 3) {
            htmlContent = `<li><p>데스크탑 크롬 즐겨찾기는 간단하게<br>주소창 우측상단의 별표모양 클릭하면 됩니다.</p><img src="/img/browser_setting/pc_chrome_fa/1.png"></li>`;
        } else if (curMenuId == 4) {
            htmlContent = `<li><p>1. 크롬을 실행하고 우측 상단의 더보기 마크를 터치</p><img src="/img/browser_setting/mobile_chrome_fa/1.jpg"></li>
            <li><p>2. 별마크를 터치하면 간단하게 북마크가 됩니다.</p><img src="/img/browser_setting/mobile_chrome_fa/2.jpg"></li>`;
        } else {
            htmlContent = `<li>
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
                </li>`;
        }

        return (
            <>
                <ul className="container" id="contentList" dangerouslySetInnerHTML={{ __html: htmlContent }}></ul>
            </>
        )
    }

    return (
        <section className="container-xl">
            <div className='col-lg-9' id="mainWrap">
                <Title />
                <Content />
            </div>
        </section>
    );
}
