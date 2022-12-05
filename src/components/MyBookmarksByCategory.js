import React from 'react'
import * as Icon from "react-bootstrap-icons";

export default function MyBookmarksByCategory({ bookmarks, showBookmarkModal }) {
    return (
        bookmarks.map(function (item) {
            let name = item.bookmarkName, nameDesc = item.bookmarkName;
            const desc = item.bookmarkDesc;
            if (item.isImportant) name = `<strong>${name}</strong>`;
            if (desc) nameDesc = `${name}<br /><small>- ${desc}</small>`;
            if (item.isLinethrough) nameDesc = `<del>${nameDesc}</del>`;
            return (
                <p key={item.bookmarkNo} style={{ lineHeight: '1.7rem' }}>
                    <Icon.PencilSquare onClick={(e) => showBookmarkModal(e)}
                        className="align-middle" title="북마크 수정" />
                    &nbsp;&nbsp;
                    <a
                        target="blank" rel="noreferrer"
                        className="align-middle"
                        href={item.bookmarkUrl}
                        data-bookmark-no={item.bookmarkNo}
                        dangerouslySetInnerHTML={{ __html: nameDesc }} />
                </p>
            )
        })
    )
}
