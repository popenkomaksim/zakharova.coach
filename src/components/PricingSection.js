import PropTypes from "prop-types";
import { Col, Row, Typography } from "antd";
import PlanCard from "./PlanCard";

const PricingSection = ({ redirectToTelegram, redirectToWhatsup }) => (
  <Row
    style={{
      backgroundImage: "url(./pencil_mountains_narrow.jpeg)",
      backgroundRepeat: "repeat-y",
      backgroundSize: "100% auto",
      paddingBottom: "4em",
    }}
    id="prices"
  >
    <Col span={24}>
      <Typography.Title
        level={2}
        style={{
          margin: "  ",
          textAlign: "center",
          color: "rgb(59 59 59 / 88%)",
          fontSize: "3.6em",
        }}
      >
        Роздягальня цін: без дрібного шрифту, але з тренером
      </Typography.Title>
    </Col>
    <Col xs={24} lg={8}>
      <PlanCard
        name="BASIC"
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
        price={25}
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
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
        price={40}
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
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
        price={60}
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
);

PricingSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
};

export default PricingSection;
