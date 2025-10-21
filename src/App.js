import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e){
    let {name, value} = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value,
    }));
  }

  function handleSubmit(e){
    e.preventDefault();
    alert(`Welcome ${formData.name}`);
  }

  return(
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
        Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        Password: <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default App;
