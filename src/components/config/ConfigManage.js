/**
 * 설정페이지 에서는 localStorage가 아닌 DB에서 data 가져와야 함!
 * 옵션 설정도 소스코드가 아닌 db에 저장해서 필요시마다 가져와서 사용하는 것이 유리!
 * db 저장에 성공할 때만 localStorage에 저장!
 */
import React, { useEffect, useState } from 'react'
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ToggleButton from 'react-bootstrap/ToggleButton';
import { jsonLocalStorage } from '../Common';
import axios from 'axios';

export default function ConfigManage() {
  const [targetValue, setTargetValue] = useState('_blank');
  const [themeValue, setThemeValue] = useState('basic');
  const [groupData, setGroupData] = useState([]);

  const dummyConfigData = [{
    appTitle: document.getElementById('appTitle').value,
    startGroup: document.getElementById('startGroup').value,
    theme: themeValue,
    bookmarkTarget: targetValue,
  }]

  const themes = [
    { name: '기본 테마', value: 'basic' },
    { name: '어두운 테마', value: 'dark' },
  ]

  const targets = [
    { name: '새창', value: '_blank' },
    { name: '현재창', value: '_self' }
  ]

  useEffect(() => {
    initData();
  }, [])

  const initData = async () => {
    try {
      const res = await axios.get('/datas/GroupData.json');
      if (res && res.status === 200 && res.data && res.data.length) {
        // eslint-disable-next-line eqeqeq
        const arr = res.data;
        if (arr && arr.length) await setGroupData(arr);
      }
    } catch (err) {
      console.log('err => ', err);
    }
  }

  const handleSave = (e) => {
    try {
      e.preventDefault();
      const data = {
        appTitle: document.getElementById('appTitle').value,
        startGroup: document.getElementById('startGroup').value,
        theme: themeValue,
        bookmarkTarget: targetValue,
      }
      jsonLocalStorage.setItem('config', data);
      window.location.href = '/config';
    } catch (error) {
      console.log(error);
    }
  }

  const GroupOptions = ({ gData }) => {
    return (
      gData.map((g) => (
        <option key={g.groupNo} value={g.groupNo}>{g.groupName}</option>
      ))
    )
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
            <GroupOptions gData={groupData} />
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="theme">
          <Form.Label>테마를 선택하세요.</Form.Label>
          <ButtonGroup className="w-100">
            {themes.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                name="bookmarkTheme"
                variant="outline-secondary"
                value={radio.value}
                checked={themeValue === radio.value}
                onClick={() => setThemeValue(radio.value)}
              >{radio.name}</ToggleButton>
            ))}
          </ButtonGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookmarkTarget">
          <Form.Label>북마크 링크</Form.Label>
          <ButtonGroup className="w-100">
            {targets.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                name="bookmarkTarget"
                variant="outline-secondary"
                value={radio.value}
                checked={targetValue === radio.value}
                onClick={() => setTargetValue(radio.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Form.Group>
        <Button variant="outline-primary" className="col-12 fs-5 mt-4" type="submit">
          설정 저장
        </Button>
      </Form>
    </div >
  )
}
