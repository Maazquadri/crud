import React, { useState, useEffect } from "react";
import axios from "axios";

const PutRequest = () => {
  const [data, setData] = useState([]);
  const [hide, setHide] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const getApiData = async () => {
    const resp = await axios.get(
      "https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData"
    );
    setData(resp.data);
  };
  useEffect(() => {
    getApiData();
  }, []);
  const handleDelete = async (userId) => {
    try {
      await axios.delete(
        `https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${userId}`
      );
      getApiData();
    } catch {
      alert("Delete Failed");
    }
  };
  const handleUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleEditUser = async (userId) => {
    try {
      await axios.put(
        `https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${userId}`,
        userInfo
      );
      getApiData();
    } catch {
      alert("error deleting");
    }
  };
  return (
    <div>
      <h1>put request</h1>
      {data.map((item, index) => {
        return (
          <div
            style={{
              width: "700px",
              height: "700px",
              backgroundColor: "black",
              margin: "15px",
              borderRadius: "10%",
            }}>
            <div
              style={{
                height: "45%",
                backgroundColor: "white",
                borderRadius: "10%",
              }}></div>
            <div className="text">
              <h1>First Name : {item.firstName}</h1>
              <h1>Last Name : {item.lastName}</h1>
              <h1>Email : {item.email}</h1>
              <button onClick={() => handleDelete(item.id)}>delete</button>
              <button onClick={() => setHide(!hide)}>update</button>
              {hide && (
                <div>
                  <input
                    onChange={handleUserInfo}
                    type="text"
                    name="firstName"
                    id=""
                    placeholder="lasttname"
                  />
                  <input
                    onChange={handleUserInfo}
                    type="text"
                    name="lastName"
                    id=""
                    placeholder="LastName"
                  />
                  <input
                    onChange={handleUserInfo}
                    type="text"
                    name="email"
                    id=""
                    placeholder="Email"
                  />
                  <br />
                  <button onClick={() => handleEditUser(item.id)}>Save</button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PutRequest;
