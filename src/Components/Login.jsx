import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const initVal = {
    username: "",
    password: "",
  };

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
      const res = await axios.get("  http://localhost:3001/users");
      console.log(res.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input handleChange={handleChange} type="text" placeholder="Enter User Name" />
        <input handleChange={handleChange} type="text" placeholder="Enter Password" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
