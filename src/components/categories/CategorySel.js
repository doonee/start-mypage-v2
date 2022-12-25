import React, { useState } from 'react';

export default function CategorySel({ categoryId, categoryData, setInitialCategory, setInitialBookmark }) {
    const [curCategory, setCurGroup] = useState(() => { return categoryId });

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
            value={curCategory || 'nono'} onChange={handleSelect}>
            {
                categoryData.map((g) => (
                    <option key={g.categoryNo} value={g.categoryNo}>{g.categoryName}</option>
                ))
            }
            <option value={''}>:: 카테고리 관리 ::</option>
        </select>
    )
}
