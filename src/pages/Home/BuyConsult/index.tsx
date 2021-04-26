import React from "react";

import * as S from "./styles";

interface BuyConsultProps {
  isThousandPromotion: boolean;
  isTwoThousandPromotion: boolean;
  onSubmitBuyConsult: () => void;
  totalAmount: () => void;
  onChangeConsult: (value: string) => void;
}

const BuyConsult: React.FC<BuyConsultProps> = ({
  isThousandPromotion,
  isTwoThousandPromotion,
  onSubmitBuyConsult,
  totalAmount,
  onChangeConsult,
}) => {
  return (
    <S.Container>
      <S.Row>
        <S.InitialPriceWrapper>
          <S.Text>
            de<S.InitialPrice>R$ 0,24</S.InitialPrice>por
          </S.Text>
        </S.InitialPriceWrapper>

        <S.SaleCard isSelected={isThousandPromotion}>
          <S.SalePrice>R$ 0,09</S.SalePrice>
          <S.SmallText>para as primeiras 1.000 consultas</S.SmallText>
        </S.SaleCard>
        <S.SmallText></S.SmallText>
        <S.SaleCard isSelected={isTwoThousandPromotion}>
          <S.SalePrice>R$ 0,16</S.SalePrice>
          <S.SmallText>para as primeiras 2.000 consultas</S.SmallText>
        </S.SaleCard>
      </S.Row>

      <S.Row>
        <S.Label>
          insira a quantidade
          <S.Input
            type="number"
            onChange={(e) => onChangeConsult(e.target.value)}
          />
        </S.Label>
        <S.TotalWrapper>
          <S.Text>total a pagar</S.Text>
          <S.Total>{`R$ ${totalAmount()}`}</S.Total>
        </S.TotalWrapper>
      </S.Row>
      <S.Button onClick={onSubmitBuyConsult}>continuar</S.Button>
    </S.Container>
  );
};

export default BuyConsult;
