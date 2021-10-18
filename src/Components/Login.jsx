import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'

export default function Login() {
  const initVal = {
    username: "",
    password: "",
    };
    const history = useHistory();

  const [formdata, setFormdata] = useState(initVal);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata({
     ...formdata,
      [name]:  value,
    });
  };

  const handleSubmit =async(e) => {
      e.preventDefault();
       
      
      console.log(formdata);

      const res = await axios.get("  http://localhost:3001/users");
      res.data.map(ele => 
          (ele.user_name === formdata.username && ele.password === formdata.password) && history.push('/dashboard')
      )
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          placeholder="Enter User Name"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Password"
          name="password"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
