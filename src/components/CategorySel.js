import React from 'react'

export default function CategorySel() {
    return (
        <select className="form-select" id="sel-category">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3" defaultValue>Three</option>
            <option value="3">:: 카테고리 관리 ::</option>
        </select>
    )
}
