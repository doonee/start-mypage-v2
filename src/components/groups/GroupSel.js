import React from 'react'

export default function GroupSel() {
    return (
        <select className="form-select" id="sel-group">
            <option value="1">One</option>
            <option value="2" defaultValue>Two</option>
            <option value="3">Three</option>
            <option value="3">:: 그룹 관리 ::</option>
        </select>
    )
}