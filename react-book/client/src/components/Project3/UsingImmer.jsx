//This is example of UPDATING OBJECTS IN STATE


// updating objects in state we generally use ... spread syntax but now we have immer first we will dicuss normal way

// import { useState } from "react"
import { useImmer } from "use-immer";
const Form = () => {
    const [person, setPerson] = useImmer({
        name: "ranjan",
        artwork: {
            title: "developer",
            city: "London",
        }
    })
    // instead of wrting this repetative code we can use immer 
    // function handleNameChange(e) {
    //     setPerson({ ...person, name: e.target.value })
    // }

    // function handleTitleChange(e) {
    //     setPerson({ ...person, artwork: { title: e.target.value } })
    // }
    // function handleCityChange(e) {
    //     setPerson({ ...person, artwork: { city: e.target.value } })
    // }



    // usage of immer 

    function handleNameChange(e) {
        setPerson((draft) => {
            console.log(draft, "draft")
            draft.name = e.target.value
        })
    }

    function handleTitleChange(e) {
        setPerson((draft) => {
            draft.artwork.title = e.target.value
        })
    }
    function handleCityChange(e) {
        setPerson((draft) => {
            draft.artwork.city = e.target.value
        })
    }



    return (
        <div>
            <h1>Updating objects in state</h1>
            <label>
                Name:
                <input value={person.name} onChange={handleNameChange} />
            </label>
            <label>
                Ttile:
                <input value={person.artwork.title} onChange={handleTitleChange} />
            </label>
            <label>
                city:
                <input value={person.artwork.city} onChange={handleCityChange} />
            </label>

            <p>
                {person.name} is working as {person.artwork.title} in {person.artwork.city}
            </p>
        </div>
    )
}


export default Form