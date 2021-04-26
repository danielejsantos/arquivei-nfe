import React from "react";

import Tabs from "./Tabs";
import BuyConsult from "./BuyConsult";
import Payment from "./Payment";
import Summary from "./PurchaseSummary";
import * as S from "./styles";
import useHome from "./home.hook";

import Header from "../../components/Header";

const Home: React.FC = () => {
  const {
    isBuyConsult,
    isPayment,
    isSummary,
    isThousandPromotion,
    isTwoThousandPromotion,
    consultsList,
    onSubmitBuyConsult,
    onSubmitCard,
    totalAmount,
    onChangeConsult,
    onChangeCardName,
    onChangeNumber,
    onChangeExpiration,
    onChangeCcv,
    onChangeCnpj,
    summaryBack,
  } = useHome();

  return (
    <S.Container>
      <Header />

      <S.TabsWrapper>
        <Tabs
          isBuyConsult={isBuyConsult}
          isPayment={isPayment}
          isSummary={isSummary}
        />
        {isBuyConsult && (
          <BuyConsult
            isThousandPromotion={isThousandPromotion}
            isTwoThousandPromotion={isTwoThousandPromotion}
            onSubmitBuyConsult={onSubmitBuyConsult}
            totalAmount={totalAmount}
            onChangeConsult={onChangeConsult}
          />
        )}
        {isPayment && (
          <Payment
            onSubmitCard={onSubmitCard}
            onChangeCnpj={onChangeCnpj}
            onChangeCardName={onChangeCardName}
            onChangeNumber={onChangeNumber}
            onChangeExpiration={onChangeExpiration}
            onChangeCcv={onChangeCcv}
          />
        )}
        {isSummary && (
          <Summary summaryBack={summaryBack} consultsList={consultsList} />
        )}
      </S.TabsWrapper>
    </S.Container>
  );
};

export default Home;
