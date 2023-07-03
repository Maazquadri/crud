import React,{useState} from "react";

const DaynamicCrud = () => {
  const [details, setDetails] = useState({});
  const [show, setShow] = useState(false);
  const handleUpdate=(e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <h1> Method</h1>
      <label htmlFor="">Name</label>{" "}
      <input name="fullName" type="text" placeholder="Enter Name" onChange={handleUpdate}/>
      <label htmlFor="">Age</label>{" "}
      <input name="age" type="text" placeholder="Enter Age" onChange={handleUpdate}/>
      <label htmlFor="">Email</label>{" "}
      <input name="emailId" type="email" placeholder="Enter Email" onChange={handleUpdate}/>
      <label htmlFor="">Phone</label>{" "}
      <input name="phoneNum" type="text" placeholder="Enter Phone" onChange={handleUpdate}/>
      <button onClick={() => setShow(!show)}>Submit</button>
      <p>{show && JSON.stringify(details)}</p>
    </div>
  );
};

export default DaynamicCrud;
