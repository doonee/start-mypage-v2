import React from "react";
import { Container, Row, Col, ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function GroupModal(props) {
  const handleGroupChanged = (e) => {
    const txtNewGroup = document.querySelector('#newGroupname');
    const target = e.target, value = target.value;
    if (value === 'newGroup') {
      txtNewGroup.parentElement.classList.remove('d-none');
      txtNewGroup.focus();
    } else txtNewGroup.parentElement.classList.add('d-none');
  }

  const handleFormSubmit = () => {
    const objFormValue = {
      group: document.querySelector('#bookmarkGroup').value,
      cate: document.querySelector('#bookmarkCategory').value,
      bookmarkUrl: document.querySelector('#bookmarkUrl').value,
      bookmarkName: document.querySelector('#bookmarkName').value,
      isImportant: document.querySelector('#chkImportant').checked,
      isLinethrough: document.querySelector('#chkLinethrough').checked,
      memo: document.querySelector('#bookmarkMemo').value
    }
    console.log(objFormValue)
  }

  const handleGroupnameBlur = (e) => {
    const target = e.target, value = target.value;
    console.log(value);

    const txtNewGroup = document.querySelector('#newGroupname');
    txtNewGroup.value = '';
    txtNewGroup.parentElement.classList.add('d-none');

    console.log('1. 새 그룹 생성');
    console.log('2. 새 그룹명 초기화 후 d-none 적용');
    console.log('3. 그룹리스트 다시 로딩하면서 새로 생성한 그룹 선택');
    console.log('4. 선택한 그룹에 따라 그룹 다시로딩');
  }

  const handleCategorynameBlur = (e) => {
    const target = e.target, value = target.value;
    console.log(value);

    const txtNewGroup = document.querySelector('#newCategoryname');
    txtNewGroup.value = '';
    txtNewGroup.parentElement.classList.add('d-none');

    console.log('1. 새 그룹 생성');
    console.log('2. 새 그룹명 초기화 후 d-none 적용');
    console.log('3. 그룹 리스트 다시 로딩하면서 새로 생성한 그룹 선택');
  }

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>그룹 관리</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3 d-none" controlId="newGroupname">
            <Form.Control type="text" placeholder="새 그룹명을 입력하세요."
              onBlur={handleGroupnameBlur} />
          </Form.Group>
          <Form.Group className="mb-3 d-none" controlId="newCategoryname">
            <Form.Control type="text" placeholder="새 그룹명을 입력하세요."
              onBlur={handleCategorynameBlur} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookmarkName">
            <Form.Control type="text" placeholder="그룹 명을 입력하세요." />
            <ButtonGroup className="mt-2">
              <Form.Check inline label="중요" type="checkbox" id="chkImportant" />
              <Form.Check inline label="취소선" type="checkbox" id="chkLinethrough" />
            </ButtonGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookmarkMemo">
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="메모를 입력하세요.(선택)"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Container>
          <Row>
            <Col>
              <Button variant="danger w-100" type="button">
                삭제
              </Button>
            </Col>
            <Col>
              <Button variant="primary w-100" type="submit" onClick={handleFormSubmit}>
                저장
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
}

export default GroupModal;
