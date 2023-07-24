import React, { useState} from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

function BoxList() {
    // State to store the list of boxes
    const [boxes, setBoxes] = useState([]);

    // Function to add a new box to the list
    const add = boxObj => {
        setBoxes(boxes => [...boxes, boxObj]);
    }

    // Function to remove a box from the list based on its ID
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    // Creating an array of Box components from the list of boxes
    const boxComponents = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            handleRemove={remove}
            backgroundColor={box.backgroundColor}
        />
    ));
    
    // Render the NewBoxForm to add new boxes and the array of Box components
    return (
        <div>
            <NewBoxForm createBox={add} />
            {boxComponents}
        </div>
    )
};

export default BoxList;
