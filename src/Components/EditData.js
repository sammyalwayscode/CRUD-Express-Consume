import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const EditData = () => {
  const { editid } = useParams();
  console.log(editid);

  const [foodname, setFoodname] = useState("");
  const [foodtype, setFoodtype] = useState("");
  const [fooddiet, setFooddiet] = useState("");
  const [fooddiscription, setFooddiscription] = useState("");
  const [foodimage, setFoodimage] = useState("");

  const editImage = async (e) => {
    const file = e.target.files[0];
    setFoodimage(file);
  };

  const editData = async () => {
    const formdata = new FormData();

    formdata.append("foodname", foodname);
    formdata.append("foodtype", foodtype);
    formdata.append("fooddiet", fooddiet);
    formdata.append("fooddiscription", fooddiscription);
    formdata.append("foodimage", foodimage);

    const config = {
      headers: {
        "content-type": "multipart/formdata",
      },
    };

    await axios
      .patch(`http://localhost:3048/api/edit/${editid}`, formdata, config)
      .then((data) => {
        console.log("Sucessfully Edited", data);
      })
      .catch(() => {
        console.log("Couldn't Edit Data");
      });
  };

  return (
    <Container>
      <input
        placeholder="Edit Food Name"
        onChange={(e) => {
          setFoodname(e.target.value);
        }}
      />
      <input
        placeholder="Edit Food Type"
        onChange={(e) => {
          setFoodtype(e.target.value);
        }}
      />
      <input
        placeholder="Edit Food Diet"
        onChange={(e) => {
          setFooddiet(e.target.value);
        }}
      />
      <input
        placeholder="Edit food description"
        onChange={(e) => {
          setFooddiscription(e.target.value);
        }}
      />
      <input type="file" onChange={editImage} />
      <button onClick={editData}> Update</button>
    </Container>
  );
};

export default EditData;

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    margin: 10px;
    height: 30px;
    width: 300px;
  }

  button {
    height: 40px;
    width: 150px;
    background-color: darkcyan;
    color: #fff;
    outline: none;
    border: none;
  }
`;
