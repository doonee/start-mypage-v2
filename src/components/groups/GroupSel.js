import React, { useEffect, useState } from 'react';

export default function GroupSel({ groupData, gid, setGid, setCid }) {
  const [curGroup, setCurGroup] = useState(null);

  useEffect(() => {
    setCurGroup(gid);
  }, [gid])

  const handleSelect = (e) => {
    const gid = e.target.value;
    if (gid) {
      setGid(gid);
      setCurGroup(gid);
      if (setCid) setCid(null);
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
