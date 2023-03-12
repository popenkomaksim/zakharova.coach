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
} from "antd";
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
        <Col xl={4} className="gutter-row" gutter={16}>
          <Image
            src="./polina.jpg"
            style={{ borderRadius: "50%", maxWidth: "50vw" }}
            preview={false}
          />
        </Col>
        <Col xs={24} xl={8} style={{ padding: "2em" }}>
          <Typography.Title
            level={2}
            style={{ margin: "1em 0", textAlign: "center" }}
          >
            Я тренер Поліна Захарова.
          </Typography.Title>
          <Typography.Text>
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
            style={{ fontSize: "4em" }}
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
      <Row style={{ margin: "2em" }}>
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
      <Row justify="space-around">
        <Col xs={24} xl={10}>
          <Image src="./gutyn.jpg" preview={false} />
        </Col>
        <Col xs={24} xl={10} style={{ padding: "2em" }}>
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
      <Row justify="space-around" style={{ margin: "1em" }}>
        <Col xs={24} xl={3} style={{ marginTop: "2em" }}>
          <Statistic
            title="Кілометрів подолали мої учні до 2022"
            value={112893}
          />
        </Col>
        <Col xs={24} xl={3} style={{ marginTop: "2em" }}>
          <Statistic title="Персональних рекордів" value="100+" />
        </Col>
        <Col xs={24} xl={3} style={{ marginTop: "2em" }}>
          <Statistic
            title="Персональний рекорд на половинці для атлета 55+"
            value={1}
          />
        </Col>
        <Col xs={24} xl={3} style={{ marginTop: "2em" }}>
          <Statistic title="Фінішерів на забігах 200+км" value="10+" />
        </Col>
        <Col xs={24} xl={3} style={{ marginTop: "2em" }}>
          <Statistic title="Спалених сердець" value="1млн+" />
        </Col>
        <Col xs={24} xl={3} style={{ marginTop: "2em" }}>
          <Avatar.Group>
            <Avatar src="https://joesch.moe/api/v1/random?key=1" />
            <Avatar src="https://joesch.moe/api/v1/random?key=2" />
            <Avatar src="https://joesch.moe/api/v1/random?key=3sdf" />
            <Avatar src="https://joesch.moe/api/v1/random?key=4" />
            <a href="https://www.kilianjornet.cat/en">
              <Avatar scr="./K_Jornet_Burgada.jpg" />
            </a>
            <Avatar>+</Avatar>
          </Avatar.Group>
          <br />
          Десятки учнів займаються зараз
        </Col>
      </Row>
      <TransparentBoxText text="Трейл — це завжди правда" />
      <Divider />
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
          <Card
            title="Щомісячний персональний план - 25 євро, оплата помісячна"
            size="small"
            style={{ margin: "2em" }}
          >
            <Typography.Text>
              Даний пакет, найкраще підійде для тих, хто має біговий досвід та
              готуватися до стартів “з метою активно провести час, не схлопотать
              травм на рівному місці і звичайно - зробити гарні фото”.
              <Divider>У цьому пакеті ви отримаєте:</Divider>
              <ul style={{ listStyle: "" }}>
                <li>унікальний тренувальний план раз на місяць</li>
                <li>“акаунт/безкоштовний акаунт” в TRAININGPEAKS</li>
                <li>допомогу з вибором стартів та підготовку до стартів</li>
                <li>
                  зворотній зв”язок тренера раз на місяць через додаток
                  TRAININGPEAKS
                </li>
              </ul>
            </Typography.Text>
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card
            title="Щотижневий персональний план - 40 євро, оплата помісячна"
            size="small"
            style={{ margin: "2em" }}
          >
            <Typography.Text>
              Саме ций пакет послуг, найкраще підійде для бігунів, які люблять
              готуватись, чи вперше готуються до Trail, Ultra-trail, Sky race та
              OCR від 5 до 80 км або довше.
              <Divider>У цьому пакеті ви отримаєте:</Divider>
              <ul style={{ listStyle: "" }}>
                <li>
                  унікальний тренувальний план раз на тиждень, який адаптується
                  до особистих, сімейних і професійних потреб
                </li>
                <li>“акаунт/безкоштовний акаунт” в TRAININGPEAKS</li>
                <li>допомогу з вибором стартів та підготовку до стартів</li>
                <li>
                  аналіз 1 прийдешньої гонки та розбір майбутнього старту класу
                  А
                </li>
                <li>рекомендації щодо харчування під час гонки</li>
                <li>
                  зворотній зв”язок тренера раз на тиждень через додаток
                  TRAININGPEAKS
                </li>
                <li>відеозустріч із тренером раз на місяць.</li>
              </ul>
            </Typography.Text>
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card
            title="Елітний план - 60 євро, оплата помісячна"
            size="small"
            style={{ margin: "2em" }}
          >
            <p>
              Ідеально підходить для елітних бігунів або дуже амбітних бігунів,
              які люблять готуватися до Trail, Ultra-trail, Sky race та OCR від
              5 до 150 км або довше.
              <Divider>У цьому пакеті ви отримаєте:</Divider>
              <ul style={{ listStyle: "" }}>
                <li>
                  унікальний тренувальний план раз на тиждень, який адаптується
                  до особистих, сімейних і професійних потреб
                </li>
                <li>преміум акаунт в TRAININGPEAKS</li>
                <li>допомогу з вибором стартів та підготовку до стартів</li>
                <li>аналіз 3 пройдешніх та майбутніх перегонів А</li>
                <li>рекомендації щодо харчування під час гонки</li>
                <li>
                  зворотній зв”язок тренера тричі на тиждень через додаток
                  TRAININGPEAKS
                </li>
                <li>відеозустріч із тренером раз на тиждень.</li>
              </ul>
            </p>
          </Card>
        </Col>
      </Row>

      <TransparentBoxText text="haters gonna hate" />

      <Divider />

      <Row style={{ marginBottom: "2em" }}>
        <Col span={22} gutter={-2}>
          <Typography.Title
            level={2}
            style={{ margin: 0, textAlign: "center" }}
          >
            Додаткові послуги
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col xs={24} xl={8}>
          <Card
            title="Розбір та розкладка гонки - 25 євро"
            size="small"
            style={{ margin: "2em" }}
          >
            <Typography.Text>
              <ul style={{ listStyle: "" }}>
                <li>аналіз трьох пройдешніх гонок;</li>
                <li>розбір стартового треку</li>
                <li>планування пробігання гонки</li>
              </ul>
            </Typography.Text>
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card
            title="Персональне тренування, до 2,5годин — 40 євро"
            size="small"
            style={{ margin: "2em" }}
          >
            <Typography.Text>
              Біг, вело, роллери, лижі, лиже-роллери, орієнтуванна, рогейн.
            </Typography.Text>
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card
            title="Персональний фітнес тренер (одне тренування) — 1000 євро"
            size="small"
            style={{ margin: "2em" }}
          >
            <Typography.Text>Буду допомагати морально.</Typography.Text>
          </Card>
        </Col>
      </Row>

      <Divider />

      <Row justify="space-around">
        <Col xs={24} xl={10}>
          <div style={{ margin: "0 2em" }}>
            <Typography.Title level={3} style={{ margin: 0 }}>
              FAQ
            </Typography.Title>

            <Typography.Title level={4}>
              Чи в ти дійсно набираєш сотні атлетів?
            </Typography.Title>
            <Typography.Text>
              Абсолютно точно — ні. В мене не конвеерний підхід, а
              індивідуальний, тому я обмежую кількість атлетів з котрими
              займаюсь.
            </Typography.Text>

            <Typography.Title level={4}>
              Я граю в шахи — чи можнеш ти мене тренувати?
            </Typography.Title>
            <Typography.Text>
              Я спеціалізуюсь на ендуранс видах спорту, тому скоріш за все нам
              буде не по дорозі.
            </Typography.Text>

            <Typography.Title level={4}>
              В мене ідея для старту, котрий не біг жодний українець, звідки в
              тебе будуть відповіді для мене?
            </Typography.Title>
            <Typography.Text>Побачиш :-)</Typography.Text>

            <Typography.Title level={4}>
              Можна я буду пропускати всі силові і стречінг тренування в надії
              на покращення витривалості?
            </Typography.Title>
            <Typography.Text>Ні.</Typography.Text>

            <Typography.Title level={4}>
              Можна я буду самостійно собі назначати тренування, чи самостійно
              тягати тренування в TRAININGPEAKS?
            </Typography.Title>
            <Typography.Text>Ні.</Typography.Text>

            <Typography.Title level={4}>
              Чи контролюєш ти, що я буду їсти в повсякденному житті?
            </Typography.Title>
            <Typography.Text>Ні.</Typography.Text>
          </div>
        </Col>
        <Col xs={24} xl={10}>
          <Image src="./trahtemiriv.jpg" preview={false} />
        </Col>
      </Row>

      <Divider />

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
            <a href="https://t.me/PolinaCouch">
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

export default App;
