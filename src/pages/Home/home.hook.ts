import { useCallback, useEffect, useState } from "react";

export interface ConsultList {
  consult: number;
  date: Date;
  cnpj: string;
  name: string;
  number: string;
  expiration: string;
  ccv: string;
}

export interface ConsultsList {
  summary: ConsultList[];
}

interface CardInfo {
  cnpj: string;
  name: string;
  number: string;
  expiration: string;
  ccv: string;
}

interface UseHome {
  isBuyConsult: boolean;
  isPayment: boolean;
  isSummary: boolean;
  isThousandPromotion: boolean;
  isTwoThousandPromotion: boolean;
  consultsList: ConsultList[];
  onSubmitBuyConsult: () => void;
  onSubmitCard: () => void;
  totalAmount: () => void;
  onChangeConsult: (value: string) => void;
  onChangeCnpj: (value: string) => void;
  onChangeCardName: (value: string) => void;
  onChangeNumber: (value: string) => void;
  onChangeExpiration: (value: string) => void;
  onChangeCcv: (value: string) => void;
  summaryBack: () => void;
}

function useHome(): UseHome {
  const [consult, setConsult] = useState<number>(0);
  const [homeStatus, setHomeStatus] = useState<string>("buy-consult");
  const [promotion, setPromotion] = useState<string>("");
  const [consultsList, setConsultsLists] = useState<ConsultList[] | []>([]);
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cnpj: "",
    name: "",
    number: "",
    expiration: "",
    ccv: "",
  });

  const isBuyConsult = homeStatus === "buy-consult";
  const isPayment = homeStatus === "payment";
  const isSummary = homeStatus === "summary";

  function totalAmount(): string {
    let total: number = 0;

    if (consult <= 1000) {
      total += consult * 0.09;
    }

    if (consult > 1000 && consult <= 2000) {
      const over = consult - 1000;
      total += 90 + over * 0.16;
    }

    if (consult > 2000) {
      const over = consult - 2000;
      total += 250 + over * 0.24;
    }

    return total.toFixed(2);
  }

  const isInPromotion = useCallback(() => {
    let consultsSum: number = 0;

    if (consultsList) {
      consultsList.map((item: ConsultList) => (consultsSum += item.consult));
    }

    if (consultsSum + consult > 0 && consult + consultsSum <= 1000) {
      return setPromotion("promotion-1000");
    }

    if (consultsSum + consult > 1000 && consultsSum + consult <= 2000) {
      return setPromotion("promotion-2000");
    }

    return setPromotion("");
  }, [consult, consultsList]);

  function onChangeConsult(value: string): void {
    setConsult(Number(value));
  }

  function onChangeCnpj(value: string): void {
    setCardInfo({ ...cardInfo, cnpj: value });
  }

  function onChangeCardName(value: string): void {
    setCardInfo({ ...cardInfo, name: value });
  }

  function onChangeNumber(value: string): void {
    setCardInfo({ ...cardInfo, number: value });
  }

  function onChangeExpiration(value: string): void {
    setCardInfo({ ...cardInfo, expiration: value });
  }

  function onChangeCcv(value: string): void {
    setCardInfo({ ...cardInfo, ccv: value });
  }

  const isThousandPromotion = promotion === "promotion-1000";
  const isTwoThousandPromotion = promotion === "promotion-2000";

  function onSubmitBuyConsult() {
    setHomeStatus("payment");
  }

  function onSubmitCard() {
    const obj = {
      ...cardInfo,
      consult,
      date: new Date(Date.now()),
    };

    const newConsultsList = [...consultsList, obj];

    //@ts-ignore
    setConsultsLists(newConsultsList);
    setHomeStatus("summary");
  }

  function summaryBack() {
    setConsult(0);
    setHomeStatus("buy-consult");
  }

  useEffect(() => {
    isInPromotion();
  }, [isInPromotion, consult]);

  return {
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
    onChangeCnpj,
    onChangeCardName,
    onChangeNumber,
    onChangeExpiration,
    onChangeCcv,
    summaryBack,
  };
}

export default useHome;
