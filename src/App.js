import "@fontsource/montserrat";
import "./App.css";
import styled from "styled-components";
import { FaInstagram, FaTelegram, FaHeart } from "react-icons/fa";
import {
  Col,
  Row,
  Divider,
  Typography,
  Image,
  Card,
  Statistic,
  Avatar,
  List,
  Tag,
} from "antd";
import TransparentBoxText from "./components/TransparentBoxText";
import Header from "./components/Header";

function daysOfTraining() {
  const now = new Date();
  const start = new Date(2019, 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function getKmAmount() {
  return Math.ceil(daysOfTraining() * (20 * 8.5));
}

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

const rateEURtoUAH = 41.95;

const convert = (eur) => parseInt(eur * rateEURtoUAH, 10);

const StyledInstagram = styled(FaInstagram)`
  margin: 0 0.5em;
  top: -0.4em;
`;

const StyledTelegram = styled(FaTelegram)`
  margin: 0 0.5em;
  top: -0.4em;
`;

const App = () => {
  return (
    <>
      <Header />
      <TransparentBoxText text="Твій тренувальний план" />
      <Divider />
      <Row justify="center">
        <Col xl={4} className="gutter-row" gutter={16}>
          <Image
            src="./polina.jpg"
            style={{ borderRadius: "50%", maxWidth: "75vw" }}
            preview={false}
          />
        </Col>
        <Col xs={24} xl={12} style={{ padding: "2em" }}>
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
        <Col xs={22} xl={10} style={{ marginTop: "2em" }}>
          <Typography.Text>
            Я професійний атлет і тренер. І я не уявляю життя без лісу та гір.
            Значну частину своєї спортивної кар&apos;єри я присвятила
            орієнтуванню та рогейну. Останні 6 років перелік моїх спортивних
            вподобань значно розширився - я насолождуюсь скі-альпінізмом,
            трейловим бігом та ділюсь цією пристрастю зі своіми учнями. 15 років
            досвіду, десятки тисяч кілометрів, набіганих по всьому світу,
            впевнили мене в тому, що трейл - це свобода.
          </Typography.Text>
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
        <Col xs={24} xl={10} style={{ padding: "0em" }}>
          <Divider orientation="left">Спортивні досягнення:</Divider>
          <List size="small">
            <List.Item>
              <Tag>Finland 2019</Tag>
              <Tag>USA 023</Tag>чемпіонка Чемпіонатів Світу з рогейну
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
              <Tag>Португалія 2019</Tag>Madeira Island Ultra Trail 85 км
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
        <Divider orientation="left">Майбутні кемпи:</Divider>
        {/* <Calendar /> */}
        <iframe
          title="Calendar"
          src="https://calendar.google.com/calendar/embed?src=60f2ac3e5a00a821fa841b3b4d27dbba2d162aa119a67f4b20c878195d13e8c0%40group.calendar.google.com&ctz=Europe%2FKiev"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        />
      </Row>

      <Image src="./vin01.jpg" preview={false} style={{ margin: "3vh 0" }} />

      <Row style={{ margin: "2em 0" }} justify="space-around">
        <Col span={18}>
          <Typography.Title
            level={2}
            style={{ margin: 0, textAlign: "center", paddingBottom: "1em" }}
          >
            Баланс. Послідовність. Практичність.
          </Typography.Title>
          <Typography.Text>
            Мій підхід до тренувального процесу базується на 3 приниципах:
            <ul>
              <li>
                життєвий баланс - гармонійне поєднання особистого, професійного
                життя та хоббі, яке присносить задоволення та дарує покращення
                фізичного стану
              </li>
              <li>
                дисципліна та послідовність - дотримання плану та еволюційний
                розвиток створюють фундаментальну базу для довготривалих
                відносин зі спортом
              </li>
              <li>
                індивідуальність та практичність - врахування рівня фізичної
                підготовки та реальної доступності ресурсів
              </li>
            </ul>
          </Typography.Text>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col xs={24} xl={10}>
          <Image src="./vin02.jpg" preview={false} />
        </Col>
        <Col xs={24} xl={10} style={{ padding: "2em" }}>
          <Typography.Text>
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
          <Typography.Paragraph>
            Я щиро рада працювати з усіма, хто хоче стати кращою версією
            себе.&nbsp;
            <a href="https://t.me/ZakharovaPolina">Напиши мені</a> вже сьогодні,
            і, можливо, нам з тобою по дорозі. Зі мною можна домовитись.
          </Typography.Paragraph>
        </Col>
      </Row>
      <Divider />
      <Row justify="space-around" style={{ margin: "1em" }}>
        <Col xs={24} xl={3} style={{ marginTop: "2em" }}>
          <Statistic
            title="Кілометрів подолали мої учні"
            value={getKmAmount()}
          />
        </Col>
        <Col xs={24} xl={3} style={{ marginTop: "2em" }}>
          <Statistic title="Персональних рекордів" value="100+" />
        </Col>
        <Col xs={24} xl={3} style={{ marginTop: "2em" }}>
          <Statistic title="Фінішерів на забігах 160+км" value="10+" />
        </Col>
        <Col xs={24} xl={3} style={{ marginTop: "2em" }}>
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
        </Col>
      </Row>
      <TransparentBoxText text="Трейл — це завжди правда" $padding="1em 0" />
      <Row
        style={{
          background:
            "url(./Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg) repeat",
        }}
      >
        <Col span={24}>
          <Typography.Title
            level={2}
            style={{ margin: "  ", textAlign: "center", color: "white" }}
          >
            Умови твого тренувального плана
          </Typography.Title>
        </Col>
        <Col xs={24} xl={8}>
          <Card title="BASIC" size="small" style={{ margin: "2em" }}>
            <Typography.Text>
              <Divider>У цьому пакеті ви отримаєте:</Divider>
              <ul style={{ listStyle: "" }}>
                <li>акаунт в TRAININGPEAKS</li>
                <li>персоналізований план на місяць</li>
                <li>консультація з вибором цільових стартів</li>
                <li>зворотній зв&apos;язок через TRAININGPEAKS</li>
              </ul>
            </Typography.Text>
            <Divider orientation="center">
              ₴{convert(25)}
              <span style={{ color: "#878787" }}> / €25</span> на місяць
            </Divider>
            <Divider orientation="center">
              <a href="https://t.me/ZakharovaPolina">
                <StyledTelegram size="2em" color="#229ED9" />
              </a>
            </Divider>
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card title="EXPERIENCED" size="small" style={{ margin: "2em" }}>
            <Typography.Text>
              <Divider>У цьому пакеті ви отримаєте:</Divider>
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
            </Typography.Text>
            <Divider orientation="center">
              ₴{convert(40)}
              <span style={{ color: "#878787" }}> / €40</span> на місяць
            </Divider>
            <Divider orientation="center">
              <a href="https://t.me/ZakharovaPolina">
                <StyledTelegram size="2em" color="#229ED9" />
              </a>
            </Divider>
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card title="PRO" size="small" style={{ margin: "2em" }}>
            <Typography.Text>
              <Divider>У цьому пакеті ви отримаєте:</Divider>
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
            </Typography.Text>
            <Divider orientation="center">
              ₴{convert(60)}
              <span style={{ color: "#878787" }}> / €60</span> на місяць
            </Divider>
            <Divider orientation="center">
              <a href="https://t.me/ZakharovaPolina">
                <StyledTelegram size="2em" color="#229ED9" />
              </a>
            </Divider>
          </Card>
        </Col>
      </Row>

      <Row style={{ margin: "2em 0" }}>
        <Col span={22}>
          <Typography.Title
            level={2}
            style={{ margin: 0, textAlign: "center" }}
          >
            Додаткові послуги
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col xs={24} xl={6}>
          <Card
            title="Розбір та розкладка гонки"
            size="small"
            style={{ margin: "2em" }}
          >
            <Typography.Text>
              <ul style={{ listStyle: "" }}>
                <li>аналіз трьох пройдешніх гонок</li>
                <li>розбір стартового треку</li>
                <li>планування пробігання гонки</li>
              </ul>
            </Typography.Text>
            <Divider orientation="center">
              ₴{convert(40)}
              <span style={{ color: "#878787" }}> / €40</span>
            </Divider>
          </Card>
        </Col>
        <Col xs={24} xl={6}>
          <Card
            title="Аналіз та планування сезону"
            size="small"
            style={{ margin: "2em" }}
          >
            <Typography.Text>
              <ul style={{ listStyle: "" }}>
                <li>розбір цілей сезону</li>
                <li>планування</li>
              </ul>
            </Typography.Text>
            <Divider orientation="center">
              ₴{convert(40)}
              <span style={{ color: "#878787" }}> / €40</span>
            </Divider>
          </Card>
        </Col>
        <Col xs={24} xl={6}>
          <Card
            title="Персональне тренування"
            size="small"
            style={{ margin: "2em" }}
          >
            <Typography.Text>
              Біг, вело, роллери, лижі, лиже-роллери, орієнтуванна, рогейн.
            </Typography.Text>
            <Divider orientation="center">
              ₴{convert(20)}
              <span style={{ color: "#878787" }}> / €20</span> за 1 годину
            </Divider>
          </Card>
        </Col>
        <Col xs={24} xl={6}>
          <Card
            title="Групове тренування"
            size="small"
            style={{ margin: "2em" }}
          >
            <Typography.Text>
              Весело і корисно. Какао після не в подарунок.
            </Typography.Text>
            <Divider orientation="center">
              ₴{convert(12)}
              <span style={{ color: "#878787" }}> / €12</span> за тренування
            </Divider>
          </Card>
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
        <Col xs={24} xl={10}>
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
