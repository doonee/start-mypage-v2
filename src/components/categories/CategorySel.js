import React, { useEffect, useState } from 'react';

export default function CategorySel({ categoryData, cid, setCid, gid }) {
    console.log("🚀 ~ file: CategorySel.js:4 ~ CategorySel ~ cid", cid)
    const [curCategory, setCurCategory] = useState(() => { return cid });

    useEffect(() => {
        setCurCategory(cid);
        setCid(cid);
    }, [gid])

    const handleSelect = (e) => {
        const cid = e.target.value;
        if (cid) {
            setCurCategory(cid);
            setCid(cid);
        } else {
            window.location.href = `/categoryManage/?group=${gid}`;
        }
    }

    return (
        <select className="form-select" id="sel-category"
            value={curCategory || 'none'} onChange={handleSelect}>
            {
                categoryData.map((g) => (
                    <option key={g.categoryNo} value={g.categoryNo}
                    >{g.categoryName}</option>
                ))
            }
            <option value={''}>:: 카테고리 관리 ::</option>
        </select>
    )
}
