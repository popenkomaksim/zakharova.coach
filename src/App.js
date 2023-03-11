import "@fontsource/montserrat";
import "./App.css";
import styled from "styled-components";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { Col, Row, Divider, Typography, Image, Card } from "antd";
import TransparentBoxText from "./components/TransparentBoxText";
import Header from "./components/Header";

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
        <Col xxs={24} xl={4} className="gutter-row" gutter={16}>
          <Image
            src="./polina.jpg"
            style={{ borderRadius: "50%", maxWidth: "50vw" }}
            preview={false}
          />
        </Col>
        <Col xs={24} xl={8} style={{ padding: "2em" }}>
          <Divider />
          <Typography.Title level={2} style={{ margin: 0 }}>
            Я тренер Поліна Захарова.
          </Typography.Title>
          <Typography.Text style={{ padding: "2em" }}>
            Я майстер спорту міжнародного класу з Рогейну, майстер спорту
            України з легкої атлетики, чемпіонка і призерка Чемпіонатів Світу та
            Європи з Рогейну. Також, я тренер з трейлового бігу. Чим я живу
            можна подивитись в{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/polina.zakharova94/"
            >
              <StyledInstagram /> інстаграмі
            </a>
            , але через кляту русню останній рік не наповлений постами.
          </Typography.Text>
          <Typography.Title level={3} style={{ margin: 0, padding: "2vh 0" }}>
            Все одно будете шукати:
          </Typography.Title>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://utmb.world/runner/2176979.polina.zakharova"
          >
            UTMB
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/polina.zakharova94/"
          >
            <StyledInstagram size="4em" color="#8a3ab9" />
          </a>
          <a href="https://t.me/PolinaCouch">
            <StyledTelegram size="4em" color="#229ED9" />
          </a>

          <Divider />
        </Col>
      </Row>

      <Image src="./ski2.jpg" preview={false} style={{ margin: "3vh 0" }} />
      <Row justify="space-around">
        <Col xxs={24} xl={10}>
          <Image
            src="./polina2.jpg"
            preview={false}
            style={{ maxWidth: "50vw" }}
          />
        </Col>
        <Col xs={24} xl={10}>
          <Typography.Text>
            Якщо тебе цікавить щось з цього списку:
            <ul>
              <li>План підготовки до старту (щотижневий)</li>
              <li>План підготовки до старту + супорт на старті</li>
              <li>Групові тренування (контроль, мотивація, допомога)</li>
              <li>Персональні тренування</li>
              <li>
                Збори: навчально-тренувальні, загально-підготовчі,
                спеціально-підготовчі
              </li>
              <li>Стратегія гонки</li>
              <li>Глобальну переодизацію до твого старту</li>
            </ul>
            Напиши мені вже сьогодні, і, можливо, нам з тобою по дорозі. Зі мною
            можна домовитись.
          </Typography.Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={22} gutter={-2}>
          <Typography.Title
            level={2}
            style={{ margin: 0, textAlign: "center" }}
          >
            Якщо в тебе є крейзі-кардіо думка, є шанс, що ми зрозуміємо тебе і
            допоможемо її реалізувати.
          </Typography.Title>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          {/* <Card 
        style={{ width: '100%', height: '100%', background: 'red', box-sizing:  'border-box'}}
        headStyle={{ backgroundColor: '#E6ECF0' }}
        bodyStyle={{padding: '5px'}}
        type="inner">
        <div style={{height: '100%', width: '100%'}}></div>
          </Card> */}
        </Col>
      </Row>
      <Row>
        <Col xs={24} span={8}>
          <Card title="Щомісячний персональний план - 25 євро" size="big">
            <p>
              Даний пакет, найкраще підійде для тих, хто має біговий досвід та
              готуватися до стартів “з метою активно провести час, не схлопотать
              травм на рівному місці і звичайно - зробити гарні фото”. У цьому
              пакеті ви отримаєте: унікальний тренувальний план раз на місяць.
              “акаунт/безкоштовний акаунт” в TRAININGPEAKS; допомогу з вибором
              старту та підготовку до старту; зворотній зв”язок тренера раз на
              місяць через додаток TRAININGPEAKS.
            </p>
          </Card>
        </Col>
        <Col xs={24} span={8}>
          Щотижневий персональний план - 40 євро Саме ций пакет послуг, найкраще
          підійде для бігунів, які люблять готуватись, чи вперше готуються до
          Trail, Ultra-trail, Sky race та OCR від 5 до 80 км або довше. У цьому
          пакеті ви отримаєте: унікальний тренувальний план раз на тиждень, який
          адаптується до особистих, сімейних і професійних потреб;
          “акаунт/безкоштовний акаунт” в TRAININGPEAKS; допомогу з вибором
          стартів та підготовку до стартів; аналіз 1 прийдешньої гонки та розбір
          майбутнього старту класу А; рекомендації щодо харчування під час
          гонки; зворотній зв”язок тренера раз на тиждень через додаток
          TRAININGPEAKS. відеозустріч із тренером раз на місяць.
        </Col>
        <Col xs={24} span={8}>
          Елітний план - 60 євро Ідеально підходить для елітних бігунів або дуже
          амбітних бігунів, які люблять готуватися до Trail, Ultra-trail, Sky
          race та OCR від 5 до 150 км або довше. У цьому пакеті ви отримаєте:
          унікальний тренувальний план раз на тиждень, який адаптується до
          особистих, сімейних і професійних потреб; преміум акаунт в
          TRAININGPEAKS; допомогу з вибором стартів та підготовку до стартів;
          аналіз … кількості пройдешніх та майбутніх перегонів; рекомендації
          щодо харчування під час гонки; зворотній зв”язок тренера тричі на
          тиждень через додаток TRAININGPEAKS. відеозустріч із тренером раз на
          тиждень.
        </Col>
      </Row>
    </>
  );
};

export default App;
