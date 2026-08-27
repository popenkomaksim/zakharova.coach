import "@fontsource/montserrat";
import "./App.css";
import styled from "styled-components";

import { FaTelegram, FaHeart } from "react-icons/fa";
import { Col, Row, Divider, Typography, Image } from "antd";
import TransparentBoxText from "./components/TransparentBoxText";
import Header from "./components/Header";

const StyledTelegram = styled(FaTelegram)`
  margin: 0 0.5em;
  top: -0.4em;
`;

const StyledP = styled.p`
  padding-top: 2pt;
  padding-left: 109pt;
  text-indent: 0pt;
  text-align: center;
`;

const SkiTourList = () => {
  return (
    <>
      <Header />
      <Row justify="space-around">
        <Col xs={24} md={8} style={{ padding: "0em 2em" }}>
          <Divider orientation="left">Вступ:</Divider>
          <StyledP class="s1">Які іграшки необхідно мати, щоб вижити:</StyledP>
          <StyledP>
            <br />
          </StyledP>
          <StyledP class="s1">Голова:</StyledP>
          <StyledP>
            <br />
          </StyledP>
          <ul id="l1">
            <li data-list-text="●">
              <StyledP>пов&#39;язка,</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>легка шапка,</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>відносно тепла, але тонка шапка;</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>баф (краще два);</StyledP>
              <StyledP>
                <br />
              </StyledP>
              <StyledP class="s1">Верхній корпус:</StyledP>
              <StyledP>
                <br />
              </StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>термо (краще меринос, що відводить вологу),</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>фліс,</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>можливо тоненька жилетка,</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>кофта-курточка на прімалофт,</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>курточку з мембраною чи гортекс.</StyledP>
              <StyledP class="s1">Руки:</StyledP>
              <StyledP>
                <br />
              </StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>тонкі рукавички,</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>верхонки,</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>теплі рукавиці,</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>супер теплі рукави для катання вниз.</StyledP>
              <StyledP class="s1">Ноги:</StyledP>
              <StyledP>
                <br />
              </StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>гарна білизна ;-)</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>термо (краще меринос, що відводить вологу),</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>штани/тайси з віндстопером,</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>
                самозброси - штані від вітру, можуть бути з мембрани,
              </StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>
                два останні шари можна замінити на “тонкі” гірськолижні штани.
              </StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>
                шкарпетки - теплі гетри, але до коліна - 2 пари. Якщо є -можна
                взяти ще тонку пару гетрів.
              </StyledP>
              <StyledP>
                <br />
              </StyledP>
              <StyledP class="s1">Більш складні поняття:</StyledP>
              <StyledP>
                <br />
              </StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>шолом</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>окуляри</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>маска</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>палиці</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>рюкзак</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>лижі</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>черевики</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>камус</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>
                ліхтарик (запасні батарейки чи акуми. З собою на збір взяти
                зарядний пристрій, котрим можна зарядити ваш ліхтар)
              </StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>маленький термос (тепла вода/чай)</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>перекус (батончики, калорійні цукерки)</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>
                рем-набір: стяжки, маленький мультитул, армований скотч (не
                моток, просто пару метрів)
              </StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>
                маленька аптечка: бинт, пластирі (силіконові пластирі - ТОП),
                хлоргексидин, знеболююче, регідрон, ізофолія
              </StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>для бажаючих - хімічна грілка (стопи, руки)</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>сушка для взуття</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>
                для бажаючих - кішки (це питання потрібно обговорити додатково)
              </StyledP>
              <StyledP class="s1">Косметика:</StyledP>
              <StyledP>
                <br />
              </StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>бальзам для губ</StyledP>
            </li>
            <li data-list-text="●">
              <StyledP>сонцезахисний крем</StyledP>
            </li>
          </ul>
        </Col>
        <Col xs={24} md={10} style={{ padding: "0em 2em" }}>
          <Divider orientation="left">Основна частина:</Divider>
          <Typography.Paragraph>
            Гарний настрій.
          </Typography.Paragraph>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col xs={24} md={10}>
          <div style={{ margin: "3em 2em 0 2em", textAlign: "center" }}>
            <Typography.Title level={3} style={{ margin: 0 }}>
              Залишились питання?
            </Typography.Title>
            <br />
            <Typography.Text>
              Зв&apos;яжись зі мною в робочі години.
            </Typography.Text>
            <br />
            <br />
            <br />
            <a href="https://telegram.me/ZakharovaPolina">
              <StyledTelegram size="4em" color="#229ED9" />
            </a>
          </div>
        </Col>
      </Row>

      <Divider style={{ marginTop: "4em" }}>
        Made with <FaHeart style={{ top: "-0.5em" }} color="#B01E28" /> in Kyiv,
        Ukraine © {new Date().getFullYear()}
      </Divider>
    </>
  );
};

export default SkiTourList;
