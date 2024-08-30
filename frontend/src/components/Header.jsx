import styled from "styled-components";
import ItemsSports from "../assets/images/sportsItems.png";

const CustomHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: #f59330;
`;

const Title = styled.h1`
    color: #2609ad;
`;

const ImgItems = styled.img`
    width: 50px;
`;

const Header = () => {
  return (
    <CustomHeader>
        <ImgItems src={ItemsSports}/>
      <Title>Nunes Sports</Title>
    </CustomHeader>
  );
};

export default Header;
