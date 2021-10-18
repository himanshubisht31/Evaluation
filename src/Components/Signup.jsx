import React, { useState } from 'react'
import axios from 'axios'

export default function Signup() {

    const initVal = {
        user_name: '',
        password:'',
        age: '',
        location: '',
      
        
    }

    const [formdata,setFormdata]=useState(initVal)

    const handleChange = (e) => {
        const { name, value, type } = e.target

        setFormdata({
          ...formdata,
          [name]: type === "checkbox" ?value : value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("  http://localhost:3001/users", formdata);
        setFormdata(formdata)
    }


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            onChange={handleChange}
            placeholder="Enter Name"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
          />
          <input
            type="number"
            name="age"
            onChange={handleChange}
            placeholder="age"
          />
          <input
            name="location"
            onChange={handleChange}
            type="text"
            placeholder="location"
          />{" "}
          <br />
          <label htmlFor="">technology</label>
          <input
            name="Interest"
            onChange={handleChange}
            type="checkbox"
            value="technology"
          />
          <br />
          <label htmlFor="">food</label>
          <input
            name="Interest"
            onChange={handleChange}
            type="checkbox"
            value="food"
          />
          <br />
          <label htmlFor="">movies</label>
          <input
            name="Interest"
            onChange={handleChange}
            type="checkbox"
            value="movies"
          />
          <br />
          <label htmlFor="">language </label>
          <input
            name="Interest"
            onChange={handleChange}
            type="checkbox"
            value="language"
          />
          <br />
          <label htmlFor="">drama </label>
          <input
            name="Interest"
            onChange={handleChange}
            type="checkbox"
            value="drama"
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
}
