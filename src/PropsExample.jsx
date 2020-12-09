import React from 'react'

// All data passed to a component can be accessed through the props object.
export default function PropsExample(props) {
    console.log(props);
    return (
        <div>
            <p>My name is {props.name}</p>
        </div>
    )
}
