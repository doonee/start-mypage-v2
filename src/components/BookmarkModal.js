import React from "react";
import { Container, Row, Col, ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function BookmarkModal(props) {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>북마크 관리</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="bookmarkGroup">
            <Form.Label>그룹을 선택하세요.</Form.Label>
            <Form.Select>
              <option value="1">그룹1</option>
              <option value="2">그룹2</option>
              <option value="2">그룹3</option>
              <option value="3">:: 그룹 관리 ::</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookmarkCategory">
            <Form.Label>카테고리를 선택하세요.</Form.Label>
            <Form.Select>
              <option value="1">카테고리1</option>
              <option value="2">카테고리2</option>
              <option value="2">카테고리3</option>
              <option value="3">:: 카테고리 관리 ::</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookmarkUrl">
            <Form.Control type="url" placeholder="북마크 URL을 입력하세요." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bookmarkName">
            <Form.Control type="text" placeholder="북마크 명을 입력하세요." />
            <ButtonGroup className="mt-2">
              <Form.Check inline label="중요" type="checkbox" id="11111" />
              <Form.Check inline label="취소선" type="checkbox" id="22222" />
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
              <Button variant="primary w-100" type="submit">
                저장
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
}

export default BookmarkModal;
