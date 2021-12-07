import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../Banner/banner.css";
import { useTranslation } from "react-i18next";

const RowContainer = styled.div`
  color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: space-evenly;
  gap: 1.4vmax;
  z-index: 10000;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 48px;
`;

const ItemValue = styled.p`
  color: white;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 0px;
`;
const ItemLabel = styled.p`
  color: white;
  font-size: 28px;
  margin-bottom: 3px;
  letter-spacing: 0;
`;

const Card = styled.div`
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  text-align: center;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
`;
interface timerTypes {
  loginStatus?: any;
  mintTokens?: any;
  mintStartAt?: any;
}
const Timer: React.FC<timerTypes> = ({
  mintStartAt,
  mintTokens,
  loginStatus,
}) => {
  const [title, setTitle] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerVisible, setTimerVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now() / 1000;
      if (now < mintStartAt) {
        setDays(Math.floor((mintStartAt - now) / (60 * 60 * 24)));
        setHours(Math.floor((mintStartAt - now) / (60 * 60)) % 24);
        setMinutes(Math.floor((mintStartAt - now) / 60) % 60);
        setSeconds(Math.floor(mintStartAt - now) % 60);
        setTimerVisible(true);
      } else {
        setTimerVisible(false);
      }
    }, 0);
    return () => clearInterval(timer);
  }, [mintStartAt]);

  const { t, i18n } = useTranslation("common");

  return timerVisible ? (
    <Card>
      <RowContainer>
        <Item>
          <ItemValue id="days">{days.toLocaleString("en-US", { minimumIntegerDigits: 2 })}</ItemValue>
          <ItemLabel>{t("timer.day")}</ItemLabel>
        </Item>
        <Item>
          <ItemValue id="days">{hours.toLocaleString("en-US", { minimumIntegerDigits: 2 })}</ItemValue>
          <ItemLabel>{t("timer.hour")}</ItemLabel>
        </Item>
        <Item>
          <ItemValue id="days">{minutes.toLocaleString("en-US", { minimumIntegerDigits: 2 })}</ItemValue>
          <ItemLabel>{t("timer.min")}</ItemLabel>
        </Item>
        <Item>
          <ItemValue id="days">{seconds.toLocaleString("en-US", { minimumIntegerDigits: 2 })}</ItemValue>
          <ItemLabel>{t("timer.sec")}</ItemLabel>
        </Item>
      </RowContainer>
    </Card>
  ) : (
    <>
      <button onClick={mintTokens} className="banner-btn">
        {loginStatus ? "Mint" : "Connect Metamask"}
        Mint
      </button>
    </>
  );
};

export default Timer;
