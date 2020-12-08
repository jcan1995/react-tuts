import React, { useState, Component } from 'react'

// Example using react states in a Class based component and Functional component.

// function FunctionalComponent() {
//     const [name, setName] = useState('');

//     const handleOnNameChanged = (e) => {
//         // We update the state "name" with the new value that's in the input field
//         setName(e.target.value);
//     }    

//     return (
//         <div>
//             {/* 
//                 Here we render the name that gets changed every time "setName" is called
//             */}
//             <p>{name}</p>
            
//             {/* 
//                 input html tags have an onChange "callback" function
//                 that is fired every time a change happens in the input field.

//                 When we edit the input field here, we call the handleOnNameChanged function defined 
//                 in this function.... yeah, functions defined in functions. Seems kind of 
//                 weird at first...
//             */}
//             <input onChange={handleOnNameChanged}/>
//         </div>
//     );
// }
// export default FunctionalComponent;


// In react, class based components need to always extend Component.
class ClassComponent extends Component {
    
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }


    handleOnNameChanged = (e) => {
        this.setState({name: e.target.value});
    }

    // This method is provided to us by the Component super class
    // In the render method we always want to return jsx or null.
    /* 
        When returning jsx, we need to always only send a single node... for example

        GOOD: 
            return (
                <div>
                    ....
                </div>
            );
        BAD:
            return (
                <div>
                </div>
                <div>
                </div>
            );
    */
    render() {
        
        return (
            <div>
                {/* 
                    Here we render the name that gets changed every time "setName" is called
                */}
                <p>{this.state.name}</p>
                
                {/* 
                    input html tags have an onChange "callback" function
                    that is fired every time a change happens in the input field.

                    When we edit the input field here, we call the handleOnNameChanged function defined 
                    in this function.... yeah, functions defined in functions. Seems kind of 
                    weird at first...
                */}
                <input onChange={this.handleOnNameChanged}/>
            </div>
        );
    }
}

export default ClassComponent;