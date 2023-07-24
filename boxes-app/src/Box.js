import React from "react";

function Box({
            // Destructuring the props object to extract specific properties
                id,
                handleRemove,
                width = 5,
                height = 5,
                backgroundColor = "blue"
            }) {
            const remove = () => handleRemove(id);

            return (
                <div>
                     {/* The inner div represents the box with inline styles */}
                    <div
                        style={{
                        height: `${height}em`,
                        width: `${width}em`,
                        backgroundColor
                        }}
                    />

                    <button onClick={remove}>Remove The Box!</button>
                    
                </div>
            );
}

export default Box;
