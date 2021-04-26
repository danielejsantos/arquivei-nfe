import React from "react";

import * as S from "./styles";

import type { ConsultList } from "../home.hook";

interface PurchaseSummaryProps {
  summaryBack: () => void;
  consultsList: ConsultList[] | [];
}

const PurchaseSummary: React.FC<PurchaseSummaryProps> = ({
  consultsList,
  summaryBack,
}) => {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  return (
    <S.Container>
      <S.BackButton onClick={summaryBack}>voltar</S.BackButton>
      {consultsList.map((item: ConsultList) => (
        <S.Wrapper key={Math.random()}>
          <S.Text>{`Quantidade: ${item.consult}`}</S.Text>
          <S.Text>{`Data: ${
            item.date.getDate() +
            " de " +
            meses[item.date.getMonth()] +
            " " +
            item.date.getFullYear()
          }`}</S.Text>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default PurchaseSummary;
