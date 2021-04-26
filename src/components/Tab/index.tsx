import React from "react";

import * as S from "./styles";

interface TabProps {
  title: string;
  isSelected: boolean;
}

const Tab: React.FC<TabProps> = ({ title, isSelected }) => {
  return (
    <S.Container isSelected={isSelected}>
      <S.TabTitle isSelected={isSelected}>{title}</S.TabTitle>
    </S.Container>
  );
};

export default Tab;
