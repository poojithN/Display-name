import { useState } from 'react'
import './App.css'

function App() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const[fullName,setFullName] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      setFullName("");
      return;
    }
    const full = `${firstName} ${lastName}`;
    setFullName(full);
  }

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label >First Name:</label>
          <input type="text" 
          value={firstName}
          placeholder='Enter first Name'
          onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div>
          <label >Last Name:</label>
          <input type="text"
          value={lastName}
          placeholder='Enter last Name'
          onChange={(e)=>setLastName(e.target.value)} />
        </div>
        <button>Submit</button>
      </form>
      {fullName && <p>Full Name:{fullName}</p>}
    </div>
  )
}

export default App
