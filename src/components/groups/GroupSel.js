import React from 'react'
import axios from 'axios'

export default function GroupSel({ groupId }) {
    const [arrGroup, setArrGroup] = React.useState([]);

    const setInitialArrGroup = async (gNo) => {
        try {
            const res = await axios.get('/datas/GroupData.json');
            console.log(res)
            if (res && res.status === 200 && res.data && res.data.length) {
                setArrGroup(res.data);
            }
        } catch (err) {
            console.log('err >> ', err);
        }
    }

    React.useEffect(() => {
        setInitialArrGroup(groupId);
    }, [groupId]);

    const handleSelect = (e) => {
        console.log(e);
    }

    const SelectOption = ({ g }) => {
        // eslint-disable-next-line eqeqeq
        const isSelected = g.groupNo == groupId;
        console.log('isSelected => ', isSelected)
        return <option value={g.groupNo} selected={isSelected}>{g.groupName}</option>
    }

    return (
        <select className="form-select" id="sel-group" onChange={handleSelect}>
            {arrGroup.map((g) => (
                <SelectOption key={g.groupNo} g={g} />
            ))}
            <option value="">:: 그룹 관리 ::</option>
        </select>
    )
}
