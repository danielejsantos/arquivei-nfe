import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackButton = styled.button`
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 24px;
  border-radius: 24px;
  background-color: var(--primary);
  outline: 0;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 750px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
  box-sizing: border-box;
  border-bottom: 1px solid var(--grey);
  margin-bottom: 15px;

  @media (max-width: 780px) {
    width: 660px;
  }

  @media (max-width: 680px) {
    width: 600px;
  }

  @media (max-width: 620px) {
    width: 480px;
  }

  @media (max-width: 490px) {
    width: 360px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: var(--grey);
`;
