import React from 'react'
import PropsExample from './PropsExample';

import StateExample from './StateExample';

function App() {

  // Variable for PropsExample.jsx
  const fullName = 'John Doe';

  return (
    <div className="App">
      {/* Render StateExample component */}
      <StateExample />

      {/* 
        Here we pass a prop (or data) of name, 
        assigning it the value of fullName defined above.

        "name" will show up inside the PropsExample component under the "props" object.
        
        We can access the name variable in the PropsExample component like this: "props.name"
      */}
      <PropsExample name={fullName}/>
    </div>
  );
}

export default App;
