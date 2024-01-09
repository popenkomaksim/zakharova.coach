import { useEffect, useState } from "react";
import "@fontsource/montserrat";
import "./App.css";
import styled from "styled-components";
import CountUp from "react-countup";
import axios from "axios";

import { FaInstagram, FaTelegram, FaHeart } from "react-icons/fa";
import {
  Col,
  Row,
  Divider,
  Typography,
  Image,
  Statistic,
  Avatar,
  List,
  Tag,
} from "antd";
import TransparentBoxText from "./components/TransparentBoxText";
import Header from "./components/Header";
import PlanCard from "./components/PlanCard";
import ExtraServiceCard from "./components/ExtraServiceCard";

function daysOfTraining() {
  const now = new Date();
  const start = new Date(2019, 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

const formatter = (value) => <CountUp end={value} separator="," />;

function getKmAmount() {
  return Math.ceil(daysOfTraining() * (20 * 8.5));
}

// function useMediaQuery(query) {
//   const [matches, setMatches] = React.useState(false);
//   React.useEffect(() => {
//     const matchQueryList = window.matchMedia(query);
//     function handleChange(e) {
//       setMatches(e.matches);
//     }
//     matchQueryList.addEventListener("change", handleChange);
//     return () => {
//       matchQueryList.removeEventListener("change", handleChange);
//     };
//   }, [query]);
//   return matches;
// }

// const CALENDAR_ID =
// "9c74162dbd0be8f75f345c77b9136b24f559d1be6fd2e2b3f38ec042560cce63@group.calendar.google.com";
// const API_KEY = "AIzaSyBQecHDQILFWxrq73s1ZNyMl-wkTiK-89c";
// let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

// import Odesa from "./odesa.mp4";
// import DzembronyaTrailRunningCamp from "./DzembronyaTrailRunningCamp.mp4";
// import BorzhavaTrailRunningCamp2021 from "./BorzhavaTrailRunningCamp2021.mp4";

// const StyledVideoDiv = styled.div`
//   width: 100%;
//   height: 100;
// `;

// const StyledVideo = styled.video`
//   width: 100%;
//   height: 100vh;
//   object-fit: cover;
// `;

const StyledInstagram = styled(FaInstagram)`
  margin: 0 0.5em;
  top: -0.4em;
`;

const StyledTelegram = styled(FaTelegram)`
  margin: 0 0.5em;
  top: -0.4em;
`;

const StyledCol = styled(Col)`
  @media (max-width: 768px) {
    order: 2;
  }
`;

function parseTSV(csvText) {
  const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
  const headers = rows[0].split("\t"); // Extract headers (assumes the first row is the header row)
  const data = []; // Initialize an array to store parsed data

  // eslint-disable-next-line  no-plusplus
  for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split("\t"); // Split the row, handling '\r' characters
    const rowObject = {};

    // eslint-disable-next-line  no-plusplus
    for (let j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = rowData[j];
    }
    data.push(rowObject);
  }
  return data;
}

const App = () => {
  const [csvData, setCsvData] = useState([]);

  const fetchCSVData = () => {
    const googleSpreadSheetExportLink =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8UB0YKh5h4McE-tfSypnOYEbwtnW3dwat-OwQlPtPgZsXVDIFw_OZ2bEwvujf9XfRfQcsAeA2e5RC/pub?gid=956084020&single=true&output=tsv";
    axios
      .get(googleSpreadSheetExportLink)
      .then((response) => {
        const parsedCsvData = parseTSV(response.data);
        setCsvData(parsedCsvData);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error fetching CSV data:", error);
      });
  };

  useEffect(() => {
    fetchCSVData();
  }, []);

  return (
    <>
      <Header />
      <TransparentBoxText text="Твій тренувальний план" />
      <Divider />
      <Row justify="center">
        <Col lg={8} xl={6}>
          <Image
            src="./polina.jpg"
            style={{ borderRadius: "50%", maxWidth: "75vw" }}
            preview={false}
          />
        </Col>
        <Col xs={24} md={12} style={{ padding: "2em" }}>
          <Typography.Title
            level={1}
            style={{
              margin: "0.25em 0",
              textAlign: "center",
              color: "rgb(59 59 59 / 88%)",
            }}
          >
            Вітання 👋
          </Typography.Title>
          <Typography.Title
            level={1}
            style={{
              margin: "1em 0",
              textAlign: "center",
              color: "rgb(59 59 59 / 88%)",
            }}
          >
            Я Поліна Захарова &mdash;
            <br /> тренер та атлет
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col xs={24} md={8} style={{ padding: "2em 2em 0 2em" }}>
          <Typography.Paragraph>
            Я професійний атлет і тренер. І я не уявляю життя без лісу та гір.
            Значну частину своєї спортивної кар&apos;єри я присвятила
            орієнтуванню та рогейну.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Останні 6 років перелік моїх спортивних вподобань значно розширився
            - я насолождуюсь скі-альпінізмом, трейловим бігом та ділюсь цією
            пристрастю зі своіми учнями. 15 років досвіду, десятки тисяч
            кілометрів, набіганих по всьому світу, впевнили мене в тому, що
            трейл - це свобода.
          </Typography.Paragraph>
          <Divider orientation="left">Все одно знайдете:</Divider>
          <a href="https://t.me/ZakharovaPolina">
            <StyledTelegram size="4em" color="#229ED9" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/polina.zakharova94/"
          >
            <StyledInstagram size="4em" color="#8a3ab9" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://utmb.world/runner/2176979.polina.zakharova"
            style={{ fontSize: "3.5em", position: "absolute" }}
          >
            UTMB
          </a>
        </Col>
        <Col xs={24} md={10} style={{ padding: "0em" }}>
          <Divider orientation="left">Спортивні досягнення:</Divider>
          <List size="small">
            <List.Item>
              <Tag>Фінляндія 2019</Tag>
              <Tag>США 2023</Tag>чемпіонка Чемпіонатів Світу з рогейну
            </List.Item>
            <List.Item>
              <Tag>2017</Tag>чемпіонка Чемпіонату Європи з рогейну
            </List.Item>
            <List.Item>
              <Tag>2023</Tag>учасниця чемпіонатіу Світу зі скі-альпінізму
            </List.Item>
            <List.Item>
              <Tag>Франція 2022</Tag>призерка Mountains Hard Ultra Trail 35 км
            </List.Item>
            <List.Item>
              <Tag>Португалія 2019</Tag>призерка Madeira Island Ultra Trail 85
              км
            </List.Item>
            <List.Item>
              <Tag>Україна 2018, 2019, 2020</Tag>переможниця Chornohora Sky
              Marathon 60 км
            </List.Item>
            <List.Item>
              <Tag>Україна 2018</Tag>переможниця в абсолюті «Bojko Trail» 46 км
            </List.Item>
            <List.Item>
              майстер спорту міжнародного класу з орієнтування
            </List.Item>
            <List.Item>майстер спорту України з легкої атлетики</List.Item>
          </List>
        </Col>
      </Row>

      <div style={{ width: "100%", margin: "3em 0" }}>
        <img
          alt="Polina do smile"
          src="./Polina_Altra_optimized.gif"
          style={{ width: "100%", display: "block", margin: "3em 0" }}
        />
      </div>

      <Row justify="center">
        <Col xs="24" s="24" lg="8" style={{ padding: "0 2em" }}>
          <Divider orientation="left">Майбутні події:</Divider>
          {csvData.map((csvDataItem) => (
            <Typography.Paragraph key={csvDataItem.name}>
              <Tag>{csvDataItem.tag}</Tag> {csvDataItem.name} <br />
              {csvDataItem.dateStart} {csvDataItem.dateEnd}
            </Typography.Paragraph>
          ))}
        </Col>

        <Col flex="auto" style={{ padding: "0 2em" }}>
          <iframe
            title="Calendar"
            src="https://calendar.google.com/calendar/embed?src=60f2ac3e5a00a821fa841b3b4d27dbba2d162aa119a67f4b20c878195d13e8c0%40group.calendar.google.com&ctz=Europe%2FKiev"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
          />
        </Col>
      </Row>

      <Image src="./vin01.jpg" preview={false} style={{ margin: "3vh 0" }} />

      <Row style={{ margin: "2em 0" }} justify="space-around">
        <Col span={18}>
          <Typography.Title
            level={2}
            style={{ margin: 0, textAlign: "center" }}
          >
            Мій підхід до тренувального процесу базується на 3 приниципах:
          </Typography.Title>
        </Col>
      </Row>

      <Row justify="center" align="middle" style={{ margin: "5em 0" }}>
        <Col xs={24} md={12}>
          <TransparentBoxText
            text="Баланс"
            $fontSize="6vw"
            $imageUrl="./ski.jpg"
          />
        </Col>
        <Col xs={24} md={12} style={{ padding: "2em" }}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            життєвий баланс &mdash; гармонійне поєднання особистого,
            професійного життя та хоббі, яке присносить задоволення та дарує
            покращення фізичного стану
          </Typography.Text>
        </Col>
      </Row>

      <Row
        justify="center"
        align="middle"
        style={{
          margin: "5em 0",
          display: "flex",
        }}
      >
        <StyledCol
          xs={24}
          md={12}
          style={{
            padding: "2em",
          }}
        >
          <Typography.Text style={{ fontSize: "1.75em" }}>
            дисципліна та послідовність &mdash; дотримання плану та еволюційний
            розвиток створюють фундаментальну базу для довготривалих відносин зі
            спортом
          </Typography.Text>
        </StyledCol>

        <Col xs={24} md={12}>
          <TransparentBoxText
            text="Послідовність"
            $fontSize="6vw"
            $imageUrl="./ski.jpg"
          />
        </Col>
      </Row>

      <Row justify="center" align="middle" style={{ margin: "5em 0" }}>
        <Col xs={24} md={12}>
          <TransparentBoxText
            text="Практичність"
            $fontSize="6vw"
            $imageUrl="./ski.jpg"
          />
        </Col>
        <Col xs={24} md={12} style={{ padding: "2em" }}>
          <Typography.Text style={{ fontSize: "1.75em" }}>
            індивідуальність та практичність &mdash; врахування рівня фізичної
            підготовки та реальної доступності ресурсів
          </Typography.Text>
        </Col>
      </Row>

      <Image
        src="./Grand_Canyon_Panorama.jpeg"
        preview={false}
        style={{ margin: "3vh 0 0 0", filter: "grayscale(1)" }}
      />

      <TransparentBoxText
        text="Трейл — це завжди правда"
        $padding="1em 0 1.5em 0"
      />

      <Row justify="space-around">
        <Col
          xs={24}
          md={12}
          style={{
            padding: "2em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ maxWidth: "400px" }}>
            <Typography.Title level={2} style={{ textAlign: "center" }}>
              Формати співпраці
            </Typography.Title>
            <Typography.Text style={{ fontSize: "1.5em" }}>
              Мої учні, як початківці, аматори, так й про-аматори обирають різні
              формати співпраці:
              <ul>
                <li>моделювання профілю атлета</li>
                <li>довготривале стратегічне планування</li>
                <li>персональні тренування</li>
                <li>супровід на гонці</li>
                <li>навчально-тренувальні/спеціально-підготовчі збори</li>
              </ul>
            </Typography.Text>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <Image
            src="./vin02.jpg"
            preview={false}
            style={{ filter: "grayscale(1)" }}
          />
        </Col>
      </Row>

      <Row justify="space-around">
        <StyledCol xs={24} md={12}>
          <Image
            src="./IMG_1182.jpg"
            preview={false}
            style={{ filter: "grayscale(1)" }}
          />
        </StyledCol>
        <Col
          xs={24}
          md={12}
          style={{
            padding: "2em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ maxWidth: "400px" }}>
            <Typography.Text style={{ fontSize: "1.5em" }}>
              Я щиро рада працювати з усіма, хто хоче стати кращою версією
              себе.&nbsp;
              <a href="https://t.me/ZakharovaPolina">Напиши мені</a> вже
              сьогодні, і, можливо, нам з тобою по дорозі.
              <br />
              Зі мною можна домовитись.
            </Typography.Text>
          </div>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col
          xs={24}
          md={12}
          style={{
            padding: "2em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexDirection: "row",
            flexWrap: "wrap",
            gridAutoRows: "1fr",
          }}
        >
          {/* <div style={{ maxWidth: "4000px",  }}> */}

          <Statistic
            title="Кілометрів подолали мої учні"
            value={getKmAmount()}
            formatter={formatter}
          />

          <Statistic title="Персональних рекордів" value="100" />
          <Statistic title="Фінішерів на забігах 160+км" value="10" />
          <div>
            <Avatar.Group>
              <Avatar src="./zhenya.jpg" />
              <Avatar src="./tamara.jpg" />
              <Avatar src="./babii.jpg" />
              <a href="https://t.me/ZakharovaPolina">
                <Avatar>+</Avatar>
              </a>
            </Avatar.Group>
            <br />
            Десятки учнів займаються зараз
          </div>
          {/* </div> */}
        </Col>
        <StyledCol xs={24} md={12}>
          <Image
            src="./kazbek.jpg"
            preview={false}
            style={{ filter: "grayscale(1)" }}
          />
        </StyledCol>
      </Row>

      <TransparentBoxText text="Хай та русня здохне" $padding="1em 0 1.5em 0" />

      <Row
        style={{
          background: "url(./blue_mountains.jpg) repeat",
          paddingBottom: "4em",
        }}
      >
        <Col span={24}>
          <Typography.Title
            level={2}
            style={{
              margin: "  ",
              textAlign: "center",
              color: "white",
              fontSize: "3.6em",
            }}
          >
            Умови твого тренувального плану
          </Typography.Title>
        </Col>
        <Col xs={24} lg={8}>
          <PlanCard
            name="BASIC"
            price="25"
            ListOfThingth={
              <ul style={{ listStyle: "" }}>
                <li>акаунт в TRAININGPEAKS</li>
                <li>персоналізований план на місяць</li>
                <li>консультація з вибором цільових стартів</li>
                <li>зворотній зв&apos;язок через TRAININGPEAKS</li>
              </ul>
            }
          />
        </Col>
        <Col xs={24} lg={8}>
          <PlanCard
            name="EXPERIENCED"
            price="40"
            ListOfThingth={
              <ul style={{ listStyle: "" }}>
                <li>акаунт в TRAININGPEAKS</li>
                <li>щотижневий персоналізований план</li>
                <li>можливість ситуативного коригування плану</li>
                <li>консультація з вибором цільових стартів</li>
                <li>аналіз 1 прийдешнього старту</li>
                <li>аналіз та планування 1 старту в сезон</li>
                <li>рекомендації щодо харчування на гонках</li>
                <li>зворотній зв&apos;язок через додаток TRAININGPEAKS</li>
                <li>відеозустріч із тренером раз на місяць.</li>
              </ul>
            }
          />
        </Col>
        <Col xs={24} lg={8}>
          <PlanCard
            name="PRO"
            price="60"
            ListOfThingth={
              <ul style={{ listStyle: "" }}>
                <li>pro-акаунт в TRAININGPEAKS з доступом до аналітики</li>
                <li>щотижневий персоналізований план</li>
                <li>можливість ситуативного коригування плану</li>
                <li>консультація з вибором цільових стартів</li>
                <li>аналіз 3 прийдешніх стартів</li>
                <li>аналіз та планування 3 стартів в сезон</li>
                <li>рекомендації щодо харчування на гонках</li>
                <li>зворотній зв&apos;язок через додаток TRAININGPEAKS</li>
                <li>відеозустріч 1 раз на тиждень</li>
              </ul>
            }
          />
        </Col>
      </Row>

      <Row style={{ margin: "2em 0" }}>
        <Col span={24}>
          <Typography.Title
            level={2}
            style={{ margin: 0, textAlign: "center" }}
          >
            Додаткові послуги
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={6}>
          <ExtraServiceCard
            name="Розбір та розкладка гонки"
            price="40"
            ListOfThingth={
              <ul style={{ listStyle: "" }}>
                <li>аналіз трьох пройдешніх гонок</li>
                <li>розбір стартового треку</li>
                <li>планування пробігання гонки</li>
              </ul>
            }
          />
        </Col>
        <Col xs={24} md={6}>
          <ExtraServiceCard
            name="Аналіз та планування сезону"
            price="40"
            ListOfThingth={
              <ul style={{ listStyle: "" }}>
                <li>розбір цілей сезону</li>
                <li>планування</li>
              </ul>
            }
          />
        </Col>
        <Col xs={24} md={6}>
          <ExtraServiceCard
            name="Персональне тренування"
            price="20"
            ListOfThingth={
              <Typography.Text>
                Біг, вело, роллери, лижі, лиже-роллери, орієнтуванна, рогейн.
              </Typography.Text>
            }
          />
        </Col>
        <Col xs={24} md={6}>
          <ExtraServiceCard
            name="Групове тренування"
            price="12"
            ListOfThingth={
              <Typography.Text>
                Весело і корисно. Какао після не в подарунок.
              </Typography.Text>
            }
          />
        </Col>
      </Row>

      <div style={{ width: "100%", margin: "3em 0" }}>
        <img
          alt="Polina do running"
          src="./polina_run.gif"
          style={{ width: "100%", display: "block", margin: "3em 0" }}
        />
      </div>

      <Row justify="space-around">
        <Col xs={24} md={10}>
          <div style={{ margin: "0 2em", textAlign: "center" }}>
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

export default App;
