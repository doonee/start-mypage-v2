import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SignupForm() {
  const userIdPlaceholder = '아이디는 4글자 이상 30글자 이하로 입력해야 합니다.\n(영문, 숫자 혼용할 수 있습니다.)',
    passwordPlaceholder = '비밀번호는 4글자 이상 30글자 이하로 입력해야 합니다.\n(영문, 숫자, 특수문자 혼용할 수 있습니다.)';
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
      alert(userIdPlaceholder);
      userId.focus();
      return;
    }
    if (!data.password) {
      alert('비밀번호를 입력하세요.');
      password.focus();
      return;
    }
    if (data.password.length < 4 || data.password.length > 30) {
      alert(passwordPlaceholder);
      password.focus();
      return;
    }
    if (!data.passwordConfirm) {
      alert('비밀번호 확인을 입력하세요.');
      passwordConfirm.focus();
      return;
    }
    if (data.password !== data.passwordConfirm) {
      alert('비밀번호화 비밀번호 확인이 일치하지 않습니다.');
      passwordConfirm.focus();
      return;
    }
    alert('OK');
  }

  return (
    <Form onSubmit={handleSave}>
      <Form.Group className="mb-3" controlId="userId">
        <Form.Label>로그인 아이디</Form.Label>
        <Form.Control type="text" placeholder={userIdPlaceholder} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder={passwordPlaceholder} />
        <Form.Text className="text-muted">
          * 비밀번호는 단방향 암호화 되서 관리되므로 관리자도 알 수 없습니다.
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
