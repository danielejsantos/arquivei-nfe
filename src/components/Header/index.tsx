import React from "react";

import logoImg from "../../assets/logo.svg";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.LogoImg src={logoImg} alt="Arquivei Lite" />
      <S.Slogan>
        <S.BoldText>Consulta de notas fiscais para</S.BoldText>
        <S.NormalText>seu dia a dia ficar mais fácil</S.NormalText>
      </S.Slogan>
    </S.Container>
  );
};

export default Header;
