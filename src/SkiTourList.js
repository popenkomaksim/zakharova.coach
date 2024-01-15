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
      <TransparentBoxText
        text="10 жінок — 10 дронів"
        $imageUrl="https://img.pravda.com/images/doc/b/8/b874dfb-gettyimages-1414171342.avif"
      />
      <Divider />
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
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur,
            adipisci[ng] velit, sed quia non numquam [do] eius modi tempora
            inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit, qui in ea voluptate velit esse,
            quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat,
            quo voluptas nulla pariatur?
          </Typography.Paragraph>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col xs={24} md={10}>
          <div style={{ margin: "3em 1em 0 1em", textAlign: "center" }}>
            <Typography.Text level={2} style={{ fontSize: "5em" }}>
              Задонатити можна нижче:
            </Typography.Text>
            <br />
            <br />
            <br />
            <a
              href="https://send.monobank.ua/jar/6CjEbkcAVP"
              style={{ fontSize: "9em" }}
            >
              Банка
            </a>
          </div>
        </Col>
      </Row>

      <Image
        src="https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/341860912_750449729855183_9137675116646745680_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=d8d9c5&_nc_ohc=ZRvKwgMkx8IAX8eU_zB&_nc_ht=scontent-fra5-2.xx&oh=00_AfCDgLqMhxO8lWig03cnaEcpnnwyneLu2eeumhttLXB3pw&oe=65AAA48A"
        preview={false}
        wrapperStyle={{
          display: "flex",
        }}
        // style={{ marginLeft: "auto", marginRight: "auto",  }}
      />
      <TransparentBoxText
        text="Madeira Girls Trail Camp"
        $imageUrl="https://img.pravda.com/images/doc/b/8/b874dfb-gettyimages-1414171342.avif"
      />

      <TransparentBoxText
        text="Apr 22 – 26, 2024"
        $imageUrl="https://img.pravda.com/images/doc/b/8/b874dfb-gettyimages-1414171342.avif"
      />

      <Image
        src="https://www.compressport.com/inter/img/cms/COMMUNITY/MIUT_2022/miut_principal.jpg"
        preview={false}
        wrapperStyle={{
          display: "flex",
        }}
        // style={{ marginLeft: "auto", marginRight: "auto",  }}
      />

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
            <a href="https://t.me/ZakharovaPolina">
              <StyledTelegram size="4em" color="#229ED9" />
            </a>
          </div>
        </Col>
      </Row>

      {/* <Row>
        <Col xs={24} xl={8}>
        <StyledVideoDiv>
          <StyledVideo src={DzembronyaTrailRunningCamp} loop muted />
        </StyledVideoDiv>
        </Col>
        <Col xs={24} xl={8}>
          <StyledVideoDiv>
            <StyledVideo src={BorzhavaTrailRunningCamp2021} loop muted />
          </StyledVideoDiv>
        </Col>
        <Col xs={24} xl={8}>
        <StyledVideoDiv>
          <StyledVideo src={Odesa} loop muted />
        </StyledVideoDiv>
        </Col>
      </Row> */}

      <Divider style={{ marginTop: "4em" }}>
        Made with <FaHeart style={{ top: "-0.5em" }} color="#B01E28" /> in Kyiv,
        Ukraine © {new Date().getFullYear()}
      </Divider>
    </>
  );
};

export default SkiTourList;
