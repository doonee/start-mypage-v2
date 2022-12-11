import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Signup() {
  const handleSave = (e) => {
    e.preventDefault();
    const userId = document.getElementById('userId'),
      password = document.getElementById('password'),
      passwordConfirm = document.getElementById('passwordConfirm');
    const data = {
      userId: userId.value.trim(),
      password: password.value.trim(),
      passwordConfirm: passwordConfirm.value.trim(),
    }
    console.log(data);
    if (!data.userId) {
      alert('아이디를 입력하세요.');
      userId.focus();
      return;
    }
    if (data.userId.length < 4 || data.userId.length > 30) {
      alert('아이디는 영문, 숫자 혼용해서 4글자 이상 30글자 이하로 입력해야 합니다.');
      userId.focus();
      return;
    }
    if (!data.password) {
      alert('비밀번호를 입력하세요.');
      password.focus();
      return;
    }
    if (data.password.length < 4 || data.password.length > 30) {
      alert('패스워드는 영문, 숫자, 특수문자 혼용해서 4글자 이상 30글자 이하로 입력해야 합니다.');
      password.focus();
      return;
    }
    if (!data.passwordConfirm) {
      alert('비밀번호 확인을 입력하세요.');
      passwordConfirm.focus();
      return;
    }
    if (data.password !== data.passwordConfirm) {
      alert('패스워드화 패스워드 확인이 일치하지 않습니다.');
      passwordConfirm.focus();
      return;
    }
  }

  return (
    <Form onSubmit={handleSave}>
      <Form.Group className="mb-3" controlId="userId">
        <Form.Label>로그인 아이디</Form.Label>
        <Form.Control type="text" placeholder="사용할 아이디를 입력하세요." />
        <Form.Text className="text-muted">
          영문, 숫자 혼용해서 4자이상 30자이하로 입력하세요.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="비밀번호를 입력하세요." />
        <Form.Text className="text-muted">
          영문, 숫자, 특수문자 혼용해서 4자이상 30자이하로 입력하세요.<br />
          비밀번호는 단방향 암호화 되서 관리되므로 관리자도 알 수 없습니다.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="passwordConfirm">
        <Form.Label>비밀번호 확인</Form.Label>
        <Form.Control type="password" placeholder="비밀번호를 한번 더 입력하세요." />
      </Form.Group>
      <Button variant="outline-primary" className="col-12 fs-5" type="submit">
        회원가입
      </Button>
    </Form>
  );
}
