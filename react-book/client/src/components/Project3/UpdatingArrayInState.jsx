import { useState } from "react";


const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];


const BucketList = () => {

    const [list, setList] = useState(initialList)

    function handleToggle(artWordId, nextSeen) {
        setList(list.map((artwork) => {
            if (artwork.id == artWordId) {
                return { ...artwork, seen: nextSeen }
                console.log(nextSeen)
            } else {
                return artwork
            }
        }))
    }
    return (

        <>
            <h1>Updating Array in state</h1>

            <ItemList artWorks={list} onToggle={handleToggle} />
        </>

    )
}


const ItemList = ({ artWorks, onToggle }) => {
    return (
        <>
            {artWorks.map((artwork) => {
                return (
                    < label >
                        <input type="checkbox" checked={artwork.seen} onChange={e => { onToggle(artwork.id, e.target.checked) }} /> {artwork.title}
                    </label >
                )
            })}
        </>
    )
}


export default BucketList