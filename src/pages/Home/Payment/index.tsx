import React from "react";

import * as S from "./styles";

interface PaymentProps {
  onSubmitCard: () => void;
  onChangeCnpj: (value: string) => void;
  onChangeCardName: (value: string) => void;
  onChangeNumber: (value: string) => void;
  onChangeExpiration: (value: string) => void;
  onChangeCcv: (value: string) => void;
}

const Payment: React.FC<PaymentProps> = ({
  onSubmitCard,
  onChangeCnpj,
  onChangeCardName,
  onChangeNumber,
  onChangeExpiration,
  onChangeCcv,
}) => {
  return (
    <S.Container>
      <S.Label>
        CNPJ
        <S.Input onChange={(e) => onChangeCnpj(e.target.value)} />
      </S.Label>
      <S.Label>
        número do cartão
        <S.Input onChange={(e) => onChangeCardName(e.target.value)} />
      </S.Label>
      <S.Label>
        nome impresso no cartão
        <S.Input onChange={(e) => onChangeNumber(e.target.value)} />
      </S.Label>
      <S.HalfInputWrapper>
        <S.Label>
          validade
          <S.HalfInput onChange={(e) => onChangeExpiration(e.target.value)} />
        </S.Label>
        <S.Label>
          cvv
          <S.HalfInput onChange={(e) => onChangeCcv(e.target.value)} />
        </S.Label>
      </S.HalfInputWrapper>
      <S.Button onClick={onSubmitCard}>comprar</S.Button>
    </S.Container>
  );
};

export default Payment;
