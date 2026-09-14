import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import PlanCard from "../components/PlanCard";

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

const PricingSection = ({ redirectToTelegram, redirectToWhatsup, rate }) => {
  const { t } = useTranslation();

  return (
    <StyledPricingRow id="prices">
      <Col span={24}>
        <StyledPricingTitleWrapper>
          <StyledPricingTitle level={2}>
            {t("pricingSection.title")}
          </StyledPricingTitle>
        </StyledPricingTitleWrapper>
      </Col>
      <Col xs={24} lg={8}>
        <PlanCard
          name="BASIC"
          subtitle={t("pricingSection.basic.subtitle")}
          redirectToTelegram={redirectToTelegram}
          redirectToWhatsup={redirectToWhatsup}
          rate={rate}
          price={25}
          ListOfThingth={
            <ul>
              {t("pricingSection.basic.items", { returnObjects: true }).map(
                (item) => (
                  <li key={item}>{item}</li>
                )
              )}
            </ul>
          }
        />
      </Col>
      <Col xs={24} lg={8}>
        <PlanCard
          name="EXPERIENCED"
          subtitle={t("pricingSection.experienced.subtitle")}
          recommended
          redirectToTelegram={redirectToTelegram}
          redirectToWhatsup={redirectToWhatsup}
          rate={rate}
          price={40}
          ListOfThingth={
            <ul>
              {t("pricingSection.experienced.items", {
                returnObjects: true,
              }).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          }
        />
      </Col>
      <Col xs={24} lg={8}>
        <PlanCard
          name="PRO"
          subtitle={t("pricingSection.pro.subtitle")}
          redirectToTelegram={redirectToTelegram}
          redirectToWhatsup={redirectToWhatsup}
          rate={rate}
          price={60}
          ListOfThingth={
            <ul>
              {t("pricingSection.pro.items", { returnObjects: true }).map(
                (item) => (
                  <li key={item}>{item}</li>
                )
              )}
            </ul>
          }
        />
      </Col>
    </StyledPricingRow>
  );
};

PricingSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
  redirectToWhatsup: PropTypes.func.isRequired,
  rate: PropTypes.number,
};

export default PricingSection;
