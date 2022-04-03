import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostData = () => {
  const navigate = useNavigate();
  const [foodname, setFoodname] = useState("");
  const [foodtype, setFoodtype] = useState("");
  const [fooddiet, setFooddiet] = useState("");
  const [fooddiscription, setFooddiscription] = useState("");
  const [foodimage, setFoodimage] = useState("");

  const imageUpload = async (e) => {
    const file = e.target.files[0];
    setFoodimage(file);
  };

  const uploadData = async () => {
    const formdata = new FormData();
    navigate(-1);
    formdata.append("foodname", foodname);
    formdata.append("foodtype", foodtype);
    formdata.append("fooddiet", fooddiet);
    formdata.append("fooddiscription", fooddiscription);
    formdata.append("foodimage", foodimage);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    await axios
      .post("http://localhost:3048/api/", formdata, config)
      .then((data) => {
        console.log("Uploaded Sucessfully", data);
      })
      .catch(() => {
        console.log("An Error Occored");
      });
  };

  return (
    <Conatiner>
      <strong>Food Name</strong>
      <input
        placeholder="Name: e:g Rice Maize"
        onChange={(e) => {
          setFoodname(e.target.value);
        }}
      />
      <strong>Food Type</strong>
      <input
        placeholder="Type: e:g Cereal, Grain"
        onChange={(e) => {
          setFoodtype(e.target.value);
        }}
      />
      <strong>Food Diet</strong>
      <input
        placeholder="E:g Protein, Carbohydrate, "
        onChange={(e) => {
          setFooddiet(e.target.value);
        }}
      />
      <strong>Food Description</strong>
      <textarea
        placeholder="Tell us about this particular Food"
        onChange={(e) => {
          setFooddiscription(e.target.value);
        }}
      />
      <strong>Food Image</strong>
      <input type="file" onChange={imageUpload} />
      <button onClick={uploadData}>Upload</button>
    </Conatiner>
  );
};

export default PostData;

const Conatiner = styled.div`
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

  textarea {
    margin: 10px;
    height: 70px;
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
