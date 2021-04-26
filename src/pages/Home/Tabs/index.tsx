import React from "react";

import Tab from "../../../components/Tab";

import * as S from "./styles";

interface TabsProps {
  isBuyConsult: boolean;
  isPayment: boolean;
  isSummary: boolean;
}

const Tabs: React.FC<TabsProps> = ({ isBuyConsult, isPayment, isSummary }) => {
  return (
    <S.Container>
      <Tab isSelected={isBuyConsult} title="Adquirir consultas" />
      <Tab isSelected={isPayment} title="Pagamento" />
      <Tab isSelected={isSummary} title="Histórico de compras" />
    </S.Container>
  );
};

export default Tabs;
