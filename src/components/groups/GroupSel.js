import React, { useState } from 'react';

export default function GroupSel({ groupData, gid, setGid }) {
  const [curGroup, setCurGroup] = useState(() => { return gid });

  const handleSelect = (e) => {
    const gid = e.target.value;
    if (gid) {
      setGid(gid);
      setCurGroup(gid);
    } else {
      window.location.href = `/groupManage`;
    }
  }

  return (
    <select className="form-select" id="sel-group"
      value={curGroup || 'none'} onChange={handleSelect}>
      {
        groupData.map((g) => (
          <option key={g.groupNo} value={g.groupNo}>{g.groupName}</option>
        ))
      }
      <option value={''}>:: 그룹 관리 ::</option>
    </select>
  )
}
