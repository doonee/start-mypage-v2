import React from "react";

export default function DevHistory() {
  return (
    <section className="container-xl">
      <h2 className="h2 mb-4">개발 히스토리</h2>
      <div id="mainWrap">
        <div class="issue-item">
          <h4>2023-01-01</h4>
          <p>시즌2 오픈</p>
          <ul>
            <li>플랫폼(php to react) 및 전반적인 디자인 변경</li>
            <li>검색기능 추가</li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2021-10-31</h4>
          <p>버그수정</p>
          <ul>
            <li>
              북마크 리스트에서 신규북마크 추가 후 포커싱 안되는 현상 수정
            </li>
            <li>북마크 리스트에서 삭제 안되는 오류 수정</li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2021-09-18</h4>
          <p>버그수정</p>
          <ul>
            <li>북마크 리스트에서 수정 안되는 오류 수정</li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2021-09-13</h4>
          <p>편의 기능 추가</p>
          <ul>
            <li>
              그룹, 카테고리, 북마크 입력/수정후 해당 아이템 포커싱 하는 기능
              추가.
            </li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2021-09-12</h4>
          <p>버그 수정.</p>
          <ul>
            <li>
              북마크 추가/수정 팝업에서 신규 카테고리 나타나지 않는 버그 수정.
            </li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2021-04-28</h4>
          <p>PC 에서 그룹리스트 마우스 드래그 가능</p>
          <ul>
            <li>
              PC 에서도 그룹 갯수가 많아서 화면에 모두 나타나지 않을 때 마우스로
              드래그 할 수 있습니다.
            </li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2021-04-01</h4>
          <p>신규, 수정, 삭제기능 업데이트</p>
          <ul>
            <li>
              북마크 열람 페이지에서 모달팝업을 통해 바로 추가, 수정, 삭제를 할
              수 있습니다.
            </li>
            <li>
              북마크 열람 페이지에서 카테고리 옆의 (+) 버튼을 클릭하면
              모달팝업을 통해 해당 카테고리에 새로운 북마크를 바로 추가할 수
              있습니다.
            </li>
            <li>
              북마크 관리 페이지 에서도 마찬가지로 상위와 동일한 기능들을 사용할
              수 있습니다.
            </li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2021-03-06</h4>
          <p>카테고리, 그룹 삭제 정책 변경</p>
          <ul>
            <li>
              북마크를 삭제해야 카테고리 삭제가 가능했던 정책이 변경되어 북마크
              유무와 관계없이 카테고리 삭제가 바로 가능합니다.
            </li>
            <li>
              그룹도 마찬가지로 속한 카테고리, 북마크 유무와 관계없이 바로
              삭제가 가능합니다.
            </li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2021-02-22</h4>
          <p>상단 메뉴 고정으로 변경</p>
          <ul>
            <li>편의성을 위해 상단 메뉴를 고정으로 변경 했습니다.</li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2021-02-18</h4>
          <p>북마크 추가/수정/삭제 모달팝업 으로 변경</p>
          <ul>
            <li>
              북마크 보기 에서 북마크를 길게 누르면 상세정보/수정 모달팝업이
              뜹니다.
            </li>
            <li>
              북마크 관리 에서 수정 버튼을 누르면 수정/삭제 모달팝업이 뜹니다.
            </li>
            <li>
              북마크 관리 에서 새 북마크 생성 버튼을 누르면 신규 모달팝업이
              뜹니다.
            </li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2021-01-11</h4>
          <p>취소선 기능 추가</p>
          <ul>
            <li>북마크 관리에서 취소선 효과를 줄 수 있습니다.</li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2020-12-07</h4>
          <p>레이어 툴팁팝업 수정</p>
          <ul>
            <li>
              <span style={{ textDecoration: "line-through" }}>
                제목에 마우스 올리면 제목 전체가 보이는 레이어 툴팁을 좀더
                정교하게 수정했습니다.
              </span>{" "}
              -&gt; 길게 누르면 팝업 뜨는 방식으로 변경
            </li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2020-06-18</h4>
          <p>Dark 테마 기능 추가</p>
          <ul>
            <li>설정 &gt; 테마 에서 변경이 가능합니다.</li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2020-06-07</h4>
          <p>북마크 박스 넓이 조절 기능 추가</p>
          <ul>
            <li>설정 &gt; 박스 크기 에서 원하는 넓이로 조절이 가능합니다.</li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2020-04-19</h4>
          <p>
            그룹, 카테고리, 북마크 작성 중인 필드에서 Enter 누르면 바로 저장
            기능 추가
          </p>
        </div>

        <div class="issue-item">
          <h4>2020-04-17</h4>
          <p>그룹, 카테고리, 북마크 순서 일괄변경 기능 추가</p>
          <ul>
            <li>a, b, c, ... 정순</li>
            <li>z, y, x, ... 역순</li>
            <li>중요체크 우선</li>
            <li>최초 등록한 순서로 초기화</li>
            <li>
              기존에 신규 등록 시 신규항목이 최상단에 기본위치 했는데 최하단으로
              조정되었습니다.
            </li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2020-03-28</h4>
          <ul>
            <li>북마크 수정 페이지의 타이틀레이어 팝업 기능 추가</li>
            <li>중요 체크된 타이틀 붉은색으로 두곽되게 표시</li>
            <li>
              그룹, 카테고리, 북마크 수정페이지 디바이스에 따른 동적 넓이 반영
            </li>
            <li>우측 상단 링크 색상 변경</li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2020-03-23</h4>
          <p>
            카테고리, 북마크 수정 페이지 접속 시 좌측 상단의 그룹 링크 선택표시
            되게 하기
          </p>
        </div>

        <div class="issue-item">
          <h4>2018-05-12</h4>
          <p>로그인 시 알림메시지 생략</p>
        </div>

        <div class="issue-item">
          <h4>2018-02-04</h4>
          <p>회원가입, 탈퇴시 버그 수정</p>
        </div>

        <div class="issue-item">
          <h4>2018-02-03</h4>
          <p>전체 입력란에 (보안을 위협하지 않는)일부 특수문자 허용</p>
          <p>회원가입 간소화(전화번호 생략)</p>
        </div>

        <div class="issue-item">
          <h4>2018-01-20</h4>
          <p>북마크 수정페이지 행간 간격조절</p>
        </div>

        <div class="issue-item">
          <h4>2018-02-03</h4>
          <p>전체 입력란에 (보안을 위협하지 않는)일부 특수문자 허용</p>
        </div>

        <div class="issue-item">
          <h4>2018-01-01</h4>
          <p>부자연스런 순서변경 드래그n드롭 개선</p>
        </div>

        <div class="issue-item">
          <h4>2017-12-25</h4>
          <p>북마크에 마우스오버 시 긴 글 줄임없이 툴팁 출력</p>
        </div>

        <div class="issue-item">
          <h4>2017-12-24</h4>
          <p>공유그룹, 공유카테고리 아이콘 클릭 시 해당 공유URL 접속 가능</p>
        </div>

        <div class="issue-item">
          <h4>2017-12-23</h4>
          <p>공유그룹, 공유카테고리는 각각의 제목 앞에 공유아이콘 출력</p>
          <p>회원가입, 수정, 로그인, 설정 폰트크기 수정</p>
        </div>

        <div class="issue-item">
          <h4>2017-12-17</h4>
          <p>비밀번호 강화</p>
          <ul>
            <li>기존의 영문+숫자 -&gt; 영문+숫자+특수문자 조합등 가능</li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2017-11-19</h4>
          <p>정식오픈</p>
          <ul>
            <li>
              정식 오픈한지
              <span id="real">5.1년</span> 지났습니다.
            </li>
          </ul>
        </div>

        <div class="issue-item">
          <h4>2017-11-01</h4>
          <p>베타오픈</p>
          <ul>
            <li>
              베타 오픈한지
              <span id="beta">5.2년</span> 지났습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
