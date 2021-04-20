import React from "react";

import * as S from "./styles";

interface TabProps {
  title: string;
}

const Tab: React.FC<TabProps> = ({ title }) => {
  return (
    <S.Container>
      <S.TabTitle>{title}</S.TabTitle>
    </S.Container>
  );
};

export default Tab;
