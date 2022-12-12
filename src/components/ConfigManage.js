import React from 'react'
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function ConfigManage() {
  const [targetValue, setTargetValue] = React.useState('blank');

  const targets = [
    { name: '새창', value: 'blank' },
    { name: '현재창', value: 'self' }
  ]

  const handleSave = () => {
    const data = {
      appTitle: document.getElementById('appTitle').value,
      startGroup: document.getElementById('startGroup').value,
      theme: document.getElementById('theme').value,
      bookmarkTarget: targetValue,
    }
    console.log(data);
    return false;
  }

  return (
    <div className="col-12 mt-2">
      <Form onSubmit={handleSave}>
        <Form.Group className="mb-3" controlId="appTitle">
          <Form.Control type="text" className='fs-4' placeholder="앱 타이틀을 작성하세요." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="startGroup">
          <Form.Label>시작그룹을 선택하세요.</Form.Label>
          <Form.Select>
            <option value="1">그룹1</option>
            <option value="2">그룹2</option>
            <option value="3">그룹3</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="theme">
          <Form.Label>테마를 선택하세요.</Form.Label>
          <Form.Select>
            <option value="basic">기본</option>
            <option value="dark">Dark</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookmarkTarget">
          <Form.Label>북마크 링크</Form.Label>
          <ButtonGroup className="w-100">
            {targets.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                name="bookmarkTarget"
                variant="light"
                value={radio.value}
                checked={targetValue === radio.value}
                onClick={() => setTargetValue(radio.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Form.Group>
        <Button variant="outline-primary" className="col-12 fs-5" type="submit">
          설정 저장
        </Button>
      </Form>
    </div >
  )
}
