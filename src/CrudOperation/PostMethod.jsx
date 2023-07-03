import React, { useState } from "react";

const PostMethod = () => {
  // const obj = {
  //     "address": {
  //     "geolocation": {
  //     "lat": "-37.3159",
  //     "long": "81.1496"
  //     },
  //     "city": "kilcoole",
  //     "street": "new road",
  //     "number": 7682,
  //     "zipcode": "12926-3874"
  //     },
  //     "id": 1,
  //     "email": "john@gmail.com",
  //     "username": "johnd",
  //     "password": "m38rmF$",
  //     "name": {
  //     "firstname": "john",
  //     "lastname": "doe"
  //     },
  //     "phone": "1-570-236-7033",
  //     "__v": 0
  //     }
  const [details, setDetails] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Post Method</h1>
      <label htmlFor="">Name</label>{" "}
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      />
      <label htmlFor="">Age</label>{" "}
      <input
        type="text"
        placeholder="Enter Age"
        onChange={(e) => setDetails({ ...details, age: e.target.value })}
      />
      <label htmlFor="">Email</label>{" "}
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      <label htmlFor="">Phone</label>{" "}
      <input
        type="text"
        placeholder="Enter Phone"
        onChange={(e) => setDetails({ ...details, phone: e.target.value })}
      />
      <button onClick={() => setShow(!show)}>Submit</button>
      <p>{show && JSON.stringify(details)}</p>
    </div>
  );
};

export default PostMethod;
