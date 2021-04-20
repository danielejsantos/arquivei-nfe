import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0px 7px 5px -2px rgba(0, 0, 0, 0.1);
`;

export const LogoImg = styled.img`
  left: 35px;
  width: 200px;
  position: absolute;
`;

export const Slogan = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoldText = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: var(--dark);
`;

export const NormalText = styled.p`
  font-size: 28px;
  color: var(--extra-dark);
`;
