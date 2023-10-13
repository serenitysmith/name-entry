import React, {useState} from 'react';
import './App.css';
// Build a simple react app with an input box, an `<h1>`, a button, and an ordered list. The user will type names into the input box.

// When the user types in the input box, the `<h1>` should update to show the same text as the input box.

// When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered. (Hint: you'll need to set state and map over an array to do this).
function App() {  
  const[form, setForm] = React.useState({
name: "",
  });

  const [names, setNames] = React.useState([]);

  function handleChange(event){
    const {name, value} = event.target;
    setForm((prevForm) => ({
    ...prevForm,  [name]: value,
    }));
  }



   function handleNameSubmit(event)
{
  event.preventDefault();
  // add the current list of names 
  setNames((prevNames) => [...prevNames, form.name] );

// clear input feild after submitting 
setForm({
  name: '',
});


} 

return(
    <div>
      <form onSubmit={handleNameSubmit}>
        <input
        type="text"
        placeholder='Name'
        className='name'
        name='name'
        onChange={handleChange}
        value={form.name}
     />
     <button className='nameSubmit'>Sign Name</button>
      </form>

      <h1>{form.name}</h1>

      <ol>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))
        }
      </ol>
    </div>
  );
}

export default App;



// In this code:

// We use the names state to store the list of names that have been entered.

// The handleChange function now correctly updates the "name" field in the form state.

// The handleNameSubmit function is called when the form is submitted. It adds the current name to the names array and clears the input field.

// The names entered are displayed in an ordered list (<ol>) below the form, and the current name is displayed in an <h1> element at the top of the page.