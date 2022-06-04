import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { NavLink } from "react-router-dom";
import PostData from "./PostData";
import { MdDeleteSweep } from "react-icons/md";

const GetAPIData = () => {
  const [apiData, setApiData] = useState([]);

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:3048/api/${id}`);
    const file = [...apiData];
    file.filter((e) => e.id !== id);
    setApiData(file);
    // console.log("Deleted Sucessfully", dle.data);
  };

  const getData = async () => {
    const res = await axios.get("http://localhost:3048/api/");
    console.log(res.data.data);
    setApiData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavLink to="/uploaddata">
        <button>Upload Data</button>
      </NavLink>
      <CardHold>
        {apiData?.map((props) => (
          <Card key={props._id}>
            <Image>
              <img src={props.foodimage} alt="" />
            </Image>
            <Content>
              <Title> {props.foodname} </Title>
              <SubTitle> {props.foodtype} </SubTitle>
              <Bottom>
                {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p> */}
                <NavLink to={`/detail/${props._id}`}>
                  <button>Read More</button>
                </NavLink>
                <NavLink to={`/edit/${props._id}`}>
                  <button>Edit Data</button>
                </NavLink>
                <MdDeleteSweep
                  fontSize="30px"
                  color="#e74c3c"
                  onClick={() => {
                    deleteData(props._id);
                  }}
                />
              </Bottom>
            </Content>
          </Card>
        ))}
      </CardHold>
    </>
  );
};

export default GetAPIData;

const CardHold = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
`;
const Card = styled.div`
  position: relative;
  height: 300px;
  width: 250px;
  display: block;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  transition: 0.4s linear;
  border-radius: 10px;
  margin: 20px;

  :hover {
    box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  }
`;
const Image = styled.div`
  background: #000;
  height: 200px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: 0.3s;

    :hover {
      opacity: 0.6;
      transform: scale(1.1);
    }
  }
`;
const Content = styled.div`
  position: absolute;
  bottom: 0px;
  background: #fff;
  width: 100%;
  text-align: center;
  /* padding: 20px 30px; */
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
`;
const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #e74c3c;
  margin-bottom: 10px;
`;
const Bottom = styled.div`
  /* display: none; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* :hover {
    display: block;
    cursor: pointer;
  } */

  button p {
    color: #666666;
    font-size: 16px;
    text-align: justify;
    line-height: 1.8rem;
  }

  button {
    float: left;
    padding: 7px 15px;
    font-size: 17px;
    background: #e74c3c;
    color: #fff;
    font-weight: 500;
    border: none;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.3s ease;
    :hover {
      transform: scale(0.9);
    }
  }
`;
