import React from 'react'

export default function Signup() {

    const initVal = {
        name: '',
        age: '',
        location: '',
        interest:'',
    }

    return (
      <div>
        <form action="">
          <input type="text" placeholder="name" />
          <input type="number" placeholder="age" />
          <input type="text" placeholder="location" /> <br />
          <label htmlFor="">technology</label>
                <input type="checkbox" name="technology" />
                <br />
          <label htmlFor="">food</label>
                <input type="checkbox" name="food" />
                <br />
          <label htmlFor="">movies</label>
                <input type="checkbox" name="movies" />
                <br />
          <label htmlFor="">language </label>
                <input type="checkbox" name="language " />
                <br />
          <label htmlFor="">drama </label>
                <input type="checkbox" name="drama " />
                <br />
        </form>
      </div>
    );
}
