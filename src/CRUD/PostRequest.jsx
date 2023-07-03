import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./Post.css"

const PostRequest = () => {
  const [userData, setUserData] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const getData = async () => {
    const response = await axios.get(
      "https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData"
    );
    // const filtered = response.data.filter((item) => item.id > 10);
    // console.log(response.data)
    setUserData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSignUpSubmit = async () => {
    try {
      await axios.post(
        "https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData",
        userInfo
      );
      getData();
    } catch {
      alert("Request Failed");
    }
  };
  const handleDelete = async (userId) => {
    try {
      await axios.delete(
        `https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${userId}`
      );
      getData();
    } catch {
      alert("Delete Failed");
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>

        <DropdownButton id="dropdown-basic-button" title="Add Product">
      <div>
          <label htmlFor="">Image:</label>
          <input
            type="text"
            name="image"
            id=""
            placeholder="Enter Image"
            onChange={handleUserInfo}
          />
          <label htmlFor="">Title:</label>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Enter Title"
            onChange={handleUserInfo}
          />
          <label htmlFor="">Brand:</label>
          <input
            type="text"
            name="brand"
            id=""
            placeholder="Enter Brand"
            onChange={handleUserInfo}
          />
          <label htmlFor="">Category:</label>
          <input
            type="text"
            name="category"
            id=""
            placeholder="Enter Category"
            onChange={handleUserInfo}
          />
          <label htmlFor="">Description:</label>
          <input
            type="text"
            name="description"
            id=""
            placeholder="Enter Description"
            onChange={handleUserInfo}
          />
          <label htmlFor="">Color:</label>
          <input
            type="text"
            name="color"
            id=""
            placeholder="Enter Color"
            onChange={handleUserInfo}
          />
          <label htmlFor="">Size:</label>
          <input
            type="text"
            name="size"
            id=""
            placeholder="Enter Size"
            onChange={handleUserInfo}
          />
          <label htmlFor="">Stock</label>
          <input
            type="text"
            name="stock"
            id=""
            placeholder="Enter Stock"
            onChange={handleUserInfo}
          />
          <label htmlFor="">Rating</label>
          <input
            type="text"
            name="rating"
            id=""
            placeholder="Enter Rating"
            onChange={handleUserInfo}
          />
          <button onClick={handleSignUpSubmit}>Submit</button>
      </div>
        </DropdownButton>
      <div
        style={{
          width: "100%",
          backgroundColor: "gray",
          display: "flex",
          flexWrap: "wrap",
          
        }}>
        {userData.map((item, index) => {
          return (
            <div
              style={{
                width: "300px",
                height: "540px",
                backgroundColor: "black",
                margin: "15px",
                borderRadius:"10%"
              }}>
              <div style={{ height: "45%", backgroundColor: "white",borderRadius:"10%" }}>
                <img src={item.image} alt="" height="243px" width="300px" borderRadius="10%"/>
              </div >
              <div className="text">
                <h4>{item.title}</h4>
                <h6>Brand: {item.brand}</h6>
                <h6>Category: {item.category}</h6>
                <p>{item.description}</p>
                <h6>Color: {item.color}</h6>
                <h6>size: {item.size}</h6>
                <h6>Stock: {item.stock}</h6>
                <h6>Ratings: {item.rating}</h6>
                <button onClick={() => handleDelete(item.id)}>delete</button>
                <button>update</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostRequest;
