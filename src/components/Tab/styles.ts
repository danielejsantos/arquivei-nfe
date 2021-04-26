import styled from "styled-components";

interface SelectedStyledProps {
  isSelected: boolean;
}

export const Container = styled.div<SelectedStyledProps>`
  width: 250px;
  padding: 16px;
  box-sizing: border-box;
  border-bottom: 4px solid
    ${({ isSelected }) => (isSelected ? "var(--primary)" : "var(--grey)")};

  @media (max-width: 780px) {
    width: 220px;
  }

  @media (max-width: 680px) {
    width: 200px;
  }

  @media (max-width: 620px) {
    width: 160px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 490px) {
    width: 120px;
    display: flex;
    align-items: center;
  }
`;

export const TabTitle = styled.p<SelectedStyledProps>`
  font-size: 18px;
  font-weight: bold;
  color: ${({ isSelected }) => (isSelected ? "var(--primary)" : "var(--grey)")};
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 780px) {
    font-size: 16px;
  }

  @media (max-width: 680px) {
    font-size: 14px;
  }
`;
