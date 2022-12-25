import React, { useState } from 'react';

export default function GroupSel({ groupId, groupData, setInitialCategory, setInitialBookmark }) {
  const [curGroup, setCurGroup] = useState(() => { return groupId });

  const handleSelect = (e) => {
    const gid = e.target.value;
    setCurGroup(gid);
    if (gid) {
      setInitialCategory(gid, null);
    } else {
      window.location.href = '/groupManage';
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
