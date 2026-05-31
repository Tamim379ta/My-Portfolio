import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <Image
          src="/assets/banner.jpeg"
          alt="Tamim Tahsan"
          fill
          className="img"
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 350px;
    height: 400px;
    background: #07182e;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 20px;
  }
  .card::before {
    content: "";
    position: absolute;
    width: 150px;
    height: 150%;
    background-image: linear-gradient(
      180deg,
      rgb(0, 183, 255),
      rgb(255, 48, 255)
    );
    animation: rotBGimg 3s linear infinite;
    z-index: 0;
  }
  .card::after {
    content: "";
    position: absolute;
    inset: 5px;
    background: #07182e;
    border-radius: 15px;
    z-index: 1;
  }
  .img {
    position: absolute !important;
    inset: 5px !important;
    width: calc(100% - 10px) !important;
    height: calc(100% - 10px) !important;
    object-fit: cover;
    border-radius: 15px;
    z-index: 2;
  }
  @keyframes rotBGimg {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
`;

export default Card;