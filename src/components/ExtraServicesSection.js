import styled from "styled-components";
import { Col, Row, Typography } from "antd";
import ExtraServiceCard from "./ExtraServiceCard";

const StyledTitleRow = styled(Row)`
  margin: 2em 0;
`;

const StyledTitle = styled(Typography.Title)`
  &&& {
    margin: 0;
    text-align: center;
  }
`;

const ExtraServicesSection = () => (
  <>
    <StyledTitleRow id="additional-services">
      <Col span={24}>
        <StyledTitle level={2}>Додаткові послуги</StyledTitle>
      </Col>
    </StyledTitleRow>
    <Row>
      <Col xs={24} md={6}>
        <ExtraServiceCard
          name="Розбір та розкладка гонки"
          price={40}
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

export default ExtraServicesSection;
