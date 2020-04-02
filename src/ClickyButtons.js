import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as _ from 'lodash';

// numberOfButtons: how many buttons to render. 
// onSelection: function called when a button is selected. That is our mechanism for passing data back out of the components. 
// ClickyButtons: renders a div. Inside the div, it creates a range and for each value, it makes a button. 
// makeButton: creates a React Element. When the element is clicked, the onSelection props (of ClickyButtons is called) and the id of the button is passed as the function argument. 
export default function ClickyButtons({ numberOfButtons, onSelection }) {
  const makeButton = (v) => <button key = {v} id = {v} onClick = { (event) => onSelection(event.target.id)}>
                              {v}
                            </button>;
  
  return <div>{ _.range(1, numberOfButtons + 1).map(makeButton) }</div>;
}

ReactDOM.render(<ClickyButtons numberOfButtons={99} onSelection={console.log}></ClickyButtons>, 
  document.getElementById('root')
);