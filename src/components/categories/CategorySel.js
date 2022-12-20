import React, { useState } from 'react';

export default function CategorySel({ groupId, categoryData, setInitialCategory, setInitialBookmark }) {
    const [curGroup, setCurGroup] = useState(() => {
        if (!groupId && categoryData && categoryData.length)
            return categoryData[0].categoryNo;

        return groupId
    });

    const handleSelect = (e) => {
        const cid = e.target.value;
        setCurGroup(cid);
        if (cid) {
            setInitialCategory();
            setInitialBookmark(cid);
        } else {
            window.location.href = '/categoryManage';
        }
    }
    return (
        <select className="form-select" id="sel-category"
            value={curGroup || 'notselected'} onChange={handleSelect}>
            {
                categoryData.map((g) => (
                    <option key={g.categoryNo} value={g.categoryNo}>{g.categoryName}</option>
                ))
            }
            <option value={''}>:: 카테고리 관리 ::</option>
        </select>
    )
}
