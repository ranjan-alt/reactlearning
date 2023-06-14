import { useState } from "react"
import { sculptureList } from "./data"

const Gallery = () => {

    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(0)
    console.log(index)

    const hasNext = index < sculptureList.length - 1; // this returns true or false
    const hasBack = index > 0

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1)
        }
        else {
            setIndex(0)
        }
    }

    function handleBackButton() {
        if (hasBack) {
            setIndex(index - 1)
        } else {
            setIndex(0)
        }
    }
    let sculpture = sculptureList[index]


    function handleShowMore() {
        setShowMore(!showMore)
    }

    return (
        <>
            <h1>Adding Interactivity </h1>
            <button onClick={handleNextClick}>Next</button>
            <button onClick={handleBackButton}>Back</button>
            <div>
                <h2>{sculpture.name}</h2>
                <h2>{sculpture.artist}</h2>
                ({index + 1} of {sculptureList.length})
            </div>
            <button onClick={handleShowMore}> {showMore ? "Show More" : "hide"}</button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
            />

        </>
    )
}


export default Gallery