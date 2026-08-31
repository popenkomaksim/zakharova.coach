import PropTypes from "prop-types";
import { Col, Row, Typography } from "antd";
import SectionTitle from "./SectionTitle";
import ExtraServiceCard from "./ExtraServiceCard";

const ExtraServicesSection = ({ rate }) => (
  <>
    <SectionTitle id="additional-services">Додаткові послуги</SectionTitle>
    <Row>
      <Col xs={24} md={6}>
        <ExtraServiceCard
          name="Розбір та розкладка гонки"
          price={40}
          rate={rate}
          ListOfThingth={
            <ul>
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
          price={40}
          rate={rate}
          ListOfThingth={
            <ul>
              <li>розбір цілей сезону</li>
              <li>планування</li>
            </ul>
          }
        />
      </Col>
      <Col xs={24} md={6}>
        <ExtraServiceCard
          name="Персональне тренування"
          price={20}
          rate={rate}
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
          price={12}
          rate={rate}
          ListOfThingth={
            <Typography.Text>
              Весело і корисно. Какао після не в подарунок.
            </Typography.Text>
          }
        />
      </Col>
    </Row>
  </>
);

ExtraServicesSection.propTypes = {
  rate: PropTypes.number,
};

export default ExtraServicesSection;
