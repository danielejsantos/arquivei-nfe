import styled from "styled-components";

interface SaleCardProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 610px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const InitialPriceWrapper = styled.div`
  display: flex;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: var(--grey);
`;

export const InitialPrice = styled.p`
  font-size: 22px;
  text-decoration: line-through;
  color: var(--grey);
  margin-right: 15px;
  margin-left: 15px;

  @media (max-width: 610px) {
    margin-bottom: 10px;
  }
`;

export const SaleCard = styled.div<SaleCardProps>`
  width: 200px;
  background-color: var(--light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 16px;
  margin-left: 20px;
  border: 2px solid
    ${({ isSelected }) => (isSelected ? "var(--success)" : "white")};

  @media (max-width: 610px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

export const SalePrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 5px;
`;

export const SmallText = styled(Text)`
  font-size: 14px;
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: var(--grey);
`;

export const Input = styled.input`
  width: 150px;
  padding: 8px 24px;
  margin-top: 8px;
  outline: 0;
  border-radius: 20px;
  font-size: 18px;
  line-height: 1.5;
  color: var(--dark);
  background-color: var(--light);

  @media (max-width: 610px) {
    margin-bottom: 10px;
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;

  @media (max-width: 610px) {
    margin: 0;
  }
`;

export const Total = styled(SalePrice)`
  color: var(--success);
  margin-top: 5px;
`;

export const Button = styled.button`
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
