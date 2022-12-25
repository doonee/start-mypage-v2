import React, { useEffect, useState } from 'react';

export default function GroupSel({ groupId, groupData, setInitialCategory, setInitialBookmark }) {
  const [curGroup, setCurGroup] = useState(null);

  useEffect(() => {
    if (groupId) setCurGroup(groupId);
    else if (groupData && groupData.length) setCurGroup(groupData[0].groupNo);
  }, [groupId, groupData])

  const handleSelect = (e) => {
    const gid = e.target.value;
    setCurGroup(gid);
    if (gid) {
      setInitialCategory(gid);
    } else {
      window.location.href = '/groupManage';
    }
  }

  return (
    <select className="form-select" id="sel-group"
      value={curGroup || 'notselected'} onChange={handleSelect}>
      {
        groupData.map((g) => (
          <option key={g.groupNo} value={g.groupNo}>{g.groupName}</option>
        ))
      }
      <option value={''}>:: 그룹 관리 ::</option>
    </select>
  )
}
