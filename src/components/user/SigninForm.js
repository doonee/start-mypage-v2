import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SigninForm() {
  const handleSave = (e) => {
    e.preventDefault();
    const userId = document.getElementById('userId'),
      password = document.getElementById('password');
    const data = {
      userId: userId.value.trim(),
      password: password.value.trim(),
    }
    console.log(data);
    if (!data.userId) {
      alert('아이디를 입력하세요.');
      userId.focus();
      return;
    }
    if (!data.password) {
      alert('비밀번호를 입력하세요.');
      password.focus();
      return;
    }
  }

  return (
    <Form onSubmit={handleSave}>
      <Form.Group className="mb-3" controlId="userId">
        <Form.Label>로그인 아이디</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" />
        <Form.Text className="text-muted">
          * 비밀번호는 단방향 암호화 되서 관리되므로 관리자도 알 수 없습니다.
        </Form.Text>
      </Form.Group>
      <Button variant="outline-primary" className="col-12 fs-5" type="submit">
        로그인
      </Button>
    </Form>
  );
}
