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

const rateEURtoUAH = 40.5;

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
            style={{ borderRadius: "50%", maxWidth: "50vw" }}
            preview={false}
          />
        </Col>
        <Col xs={24} xl={8} style={{ padding: "2em" }}>
          <Typography.Title
            level={2}
            style={{ margin: "1em 0", textAlign: "center" }}
          >
            Вітання 👋
          </Typography.Title>
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
            Все одно знайдете:
          </Typography.Title>

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

          <Divider />
        </Col>
      </Row>

      <Image
        src="./borzhava_2023.jpg"
        preview={false}
        style={{ margin: "3vh 0" }}
      />
      {/* 
      <Image
        src="./Polina_Altra_run_2.gif"
        preview={false}
        style={{ margin: "3vh 0", width:"100%" }}
      /> */}

      <Row style={{ margin: "2em" }} justify="space-around">
        <Col span={18}>
          <Typography.Title
            level={2}
            style={{ margin: 0, textAlign: "center" }}
          >
            Якщо в тебе є крейзі-кардіо думка, є шанс, що ми зрозуміємо тебе і
            допоможемо її реалізувати.
          </Typography.Title>
          <Typography.Paragraph>
            Послідовність, життєвий баланс і розвиваючі тренування є важливими
            факторами, при розробці плану тренувань для моїх спортсменів.
            Розвиток сили, швидкості та витривалості є ключовим фактором для
            того, щоб ви залишалися здоровими та довгостроково отримували успіх
            у бігу. Я вірю в послідовність; щоб добре бігати, ви повинні бути
            послідовними у своїх тренуваннях. Я вважаю, що послідовності можна
            досягти за допомогою програми навчання, яка є практичною,
            індивідуальною та прогресивною.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Практичною тим, що вона розроблена спеціально для часу та ресурсів,
            доступних вам на цьому етапі вашого життя.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Індивідуальною, оскільки вона обслуговує ваш унікальний рівень
            фізичної підготовки, цілі та стиль тренувань.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Прогресивною в тому, що вона ретельно розроблена, щоб просунути вас
            з того місця, де ви є, до того, де ви хочете бути.
          </Typography.Paragraph>
          <Typography.Paragraph>
            Незалежно від того, чи ви починаєте бігати вперше, чи намагаєтесь
            скоротити свої особисті рекорди на кілька хвилин, я можу допомогти
            вам досягти ваших цілей, запропонувавши програму тренувань, яка є
            практичною, індивідуальною та прогресивною. Я щиро рада працювати з
            усіма, хто хоче стати кращим!
          </Typography.Paragraph>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col xs={24} xl={10}>
          <Image src="./gutyn.jpg" preview={false} />
        </Col>
        <Col xs={24} xl={10} style={{ padding: "2em" }}>
          <Typography.Text>
            Якщо тебе цікавить:
            <ul>
              <li>План підготовки до старту (щотижневий)</li>
              <li>План підготовки до старту + супорт на старті</li>
              <li>Групові тренування (контроль, мотивація, допомога)</li>
              <li>Бігова підготовка до OCR</li>
              <li>Персональні тренування</li>
              <li>
                Збори: навчально-тренувальні, загально-підготовчі,
                спеціально-підготовчі
              </li>
              <li>Стратегія гонки</li>
              <li>Глобальну переодизацію до твого старту</li>
            </ul>
          </Typography.Text>
          <Typography.Paragraph>
            Я наполягаю на різно манітності, коли справа стосується тренувань.
            Щоб досягти успіху, вам потрібно насолоджуватися бігом, а це означає
            модернізувати тренування. Місця тренування, формати тренувань, види
            активності - має постійно варіювати. На сьогодні список моїх
            активностей постійно зростає. Так, я обожнюю біг і це моя провідна
            активність, та я не відмовляю собі в інших, не менш прекрасних
            забавах, як плавання, скітурінг, бігові лижі, гірські лижі,
            лижіроллери, шосейний велосипед, МТБ :), байдарка, ролики,
            скеледром, спортивне орієнтування. Це є частиною моїх тренування,
            частиною мого успіху. Мої спортсмени мають регулярні альтернативні
            тренування в своїх планах, щоб урізноманітнити своє життя та
            підтримувати любов до бігу.
          </Typography.Paragraph>

          <Typography.Paragraph>
            <a href="https://t.me/ZakharovaPolina">Напиши мені</a> вже сьогодні, і,
            можливо, нам з тобою по дорозі. Зі мною можна домовитись.
          </Typography.Paragraph>
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
            <Avatar src="./babii.jpg" />
            <Avatar src="./tamara.jpg" />
            <Avatar src="./max.jpg" />
            <Avatar src="./viktor.jpg" />
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
          <Card
            title="Щомісячний персональний план"
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
          <Card
            title="Щотижневий персональний план"
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
          <Card title="Елітний план" size="small" style={{ margin: "2em" }}>
            <Typography.Text>
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
                <li>аналіз 3 пройдешніх та майбутніх перегонів на рік</li>
                <li>рекомендації щодо харчування під час гонки</li>
                <li>
                  зворотній зв”язок тренера тричі на тиждень через додаток
                  TRAININGPEAKS
                </li>
                <li>відеозустріч із тренером раз на тиждень.</li>
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

      <TransparentBoxText text="haters gonna hate" $padding="1em 0" />

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
            title="Розбір та розкладка гонки"
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
            <Divider orientation="center">
              ₴{convert(50)}
              <span style={{ color: "#878787" }}> / €50</span>
            </Divider>
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card
            title="Персональне тренування"
            size="small"
            style={{ margin: "2em" }}
          >
            <Typography.Text>
              Біг, вело, роллери, лижі, лиже-роллери, орієнтуванна, рогейн.
            </Typography.Text>
            <Divider orientation="center">
              ₴{convert(40)}
              <span style={{ color: "#878787" }}> / €40</span> за 2,5 години
            </Divider>
          </Card>
        </Col>
        <Col xs={24} xl={8}>
          <Card
            title="Персональний фітнес тренер"
            size="small"
            style={{ margin: "2em" }}
          >
            <Typography.Text>Буду допомагати морально.</Typography.Text>
            <Divider orientation="center">
              ₴{convert(1000)}
              <span style={{ color: "#878787" }}> / €1000</span> за тренування
            </Divider>
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
              Чи ти дійсно набираєш сотні атлетів?
            </Typography.Title>
            <Typography.Text>
              Абсолютно точно — ні. В мене не конвеерний підхід, а
              індивідуальний, тому я обмежую кількість атлетів котрих треную.
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
