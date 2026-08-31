import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Typography } from "antd";
import PlanCard from "./PlanCard";

const StyledPricingRow = styled(Row)`
  background-image: url(./pencil_mountains_narrow.jpeg);
  background-repeat: repeat-y;
  background-size: 100% auto;
  padding-bottom: 4em;
`;

const StyledPricingTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5em 1em;
`;

const StyledPricingTitle = styled(Typography.Title)`
  &&& {
    margin: 0;
    max-width: 40em;
    padding: 0.4em 0.8em;
    border-radius: 0.5em;
    background: rgba(255, 255, 255, 0.82);
    text-align: center;
    color: #2b2b2b;
    font-size: 3.6em;
    @media (max-width: 575.98px) {
      font-size: 1.8em;
    }
  }
`;

const PricingSection = ({ redirectToTelegram, redirectToWhatsup, rate }) => (
  <StyledPricingRow id="prices">
    <Col span={24}>
      <StyledPricingTitleWrapper>
        <StyledPricingTitle level={2}>
          Роздягальня цін: без дрібного шрифту, але з тренером
        </StyledPricingTitle>
      </StyledPricingTitleWrapper>
    </Col>
    <Col xs={24} lg={8}>
      <PlanCard
        name="BASIC"
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
        rate={rate}
        price={25}
        ListOfThingth={
          <ul>
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
        recommended
        redirectToTelegram={redirectToTelegram}
        redirectToWhatsup={redirectToWhatsup}
        rate={rate}
        price={40}
        ListOfThingth={
          <ul>
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
        rate={rate}
        price={60}
        ListOfThingth={
          <ul>
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
  </StyledPricingRow>
);

PricingSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
  rate: PropTypes.number,
};

export default PricingSection;
