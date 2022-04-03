import React, { useEffect, useState } from "react";
import styled from "styled-components";
import luxuryCar from "../t3.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [getData, setGetData] = useState({});
  //   console.log(id);

  const fetchData = async () => {
    const url = "http://localhost:3048/api/";

    const res = await axios.get(`${url}/${id}`);
    setGetData(res.data.data);
  };
  console.log(getData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <ImgDiv>
          <ImageL src={luxuryCar} alt="A gray luxury Car" />
        </ImgDiv>
        <TextDivCtrl>
          <TextDiv>
            <TitleText> {getData.foodname} </TitleText>
            <FoodType>Food-Type: {getData.foodtype}</FoodType>
            <FoodDiet>Food-Class: {getData.fooddiet}</FoodDiet>
            <ContentText>
              <strong>About {getData.foodname}:</strong>
              {getData.fooddiscription}
            </ContentText>
            <Button to="/">Go Back</Button>
          </TextDiv>
        </TextDivCtrl>
      </Wrapper>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;
const Wrapper = styled.div`
  width: 700px;
  height: 500px;
  background-color: #00403f;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;
const ImgDiv = styled.div`
  height: 100%;

  width: 350px;
`;
const ImageL = styled.img`
  width: 350px;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
const TextDivCtrl = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextDiv = styled.div`
  height: 90%;
  width: 300px;
  font-family: quicksand;
`;
const TitleText = styled.div`
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
`;
const ContentText = styled.div`
  font-size: 15px;
  /* width: 90%; */
  margin-bottom: 50px;
  color: #fff;
  line-height: 1.6;
`;
const Button = styled(NavLink)`
  text-decoration: none;
  padding: 10px 15px;
  background-color: #fff;
  font-family: quicksand;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: none;
  color: #00403f;
  cursor: pointer;
`;

const FoodType = styled.h3`
  color: #fff;
`;
const FoodDiet = styled.h3`
  color: #fff;
`;
