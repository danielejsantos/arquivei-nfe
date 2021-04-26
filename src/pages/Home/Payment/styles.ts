import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--grey);
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 300px;
  border: 1px solid var(--grey);
  border-radius: 6px;
  padding: 8px;
  margin-top: 6px;
  font-size: 18px;
  color: var(--dark);
  outline: 0;
`;

export const HalfInputWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const HalfInput = styled(Input)`
  width: 145px;
`;

export const Button = styled.button`
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  padding: 8px 24px;
  border-radius: 24px;
  background-color: var(--success);
  outline: 0;
  cursor: pointer;
`;
