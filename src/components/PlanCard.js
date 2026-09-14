import PropTypes from "prop-types";
import styled from "styled-components";
import { Badge, Divider, Typography, Card } from "antd";
import { useTranslation } from "react-i18next";

import EqualHeightCardWrapper from "./EqualHeightCardWrapper";
import ContactIcons from "./ContactIcons";
import convert from "../convert";

const StyledRibbonWrapper = styled.div`
  height: 100%;

  .ant-ribbon-wrapper {
    height: 100%;
  }

  @media (max-width: 575.98px) {
    .ant-ribbon-placement-end {
      inset-inline-end: 1em;
    }
  }
`;

const StyledCard = styled(Card)`
  &&& {
    height: 100%;
    display: flex;
    flex-direction: column;
    ${({ $recommended }) =>
      $recommended &&
      `
      border: 2px solid #b01e28;
      box-shadow: 0 0.6em 2em rgba(176, 30, 40, 0.25);
    `}

    .ant-card-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }
  }
`;

const StyledCardTitle = styled.div`
  text-align: center;
  font-size: 3em;
  font-weight: bold;
  color: rgb(59 59 59 / 88%);
`;

const StyledCardSubtitle = styled.div`
  text-align: center;
  font-size: 0.35em;
  font-weight: normal;
  color: rgb(59 59 59 / 70%);
`;

const StyledSectionLabel = styled(Typography.Title)`
  &&& {
    font-size: 1.175em;
  }
`;

const StyledPriceRow = styled(Typography.Text)`
  &&& {
    justify-content: center;
    font-size: 2em;
    font-weight: bold;
    display: flex;
  }
`;

const StyledEurPrice = styled.span`
  color: #878787;
`;

const StyledPlanDetails = styled.div`
  text-align: center;
`;

const StyledDivider = styled(Divider)`
  &&& {
    margin-top: auto;
  }
`;

const PlanCard = ({
  name,
  subtitle,
  price,
  rate,
  ListOfThingth,
  redirectToTelegram,
  redirectToWhatsup,
  recommended = false,
}) => {
  const { t } = useTranslation();
  const card = (
    <EqualHeightCardWrapper>
      <StyledCard
        title={
          <StyledCardTitle>
            {name}
            {subtitle && <StyledCardSubtitle>{subtitle}</StyledCardSubtitle>}
          </StyledCardTitle>
        }
        size="small"
        $recommended={recommended}
      >
        <StyledPriceRow>
          ₴{convert(price, rate)}
          <StyledEurPrice> / €{price}</StyledEurPrice>&nbsp;
          {t("pricingSection.perMonth")}
        </StyledPriceRow>
        <StyledPlanDetails>
          <StyledSectionLabel>
            {t("pricingSection.youWillGet")}
          </StyledSectionLabel>
          <Typography.Text>{ListOfThingth}</Typography.Text>
        </StyledPlanDetails>
        <StyledDivider titlePlacement="center">
          <ContactIcons
            redirectToTelegram={redirectToTelegram}
            redirectToWhatsup={redirectToWhatsup}
            size="2em"
          />
        </StyledDivider>
      </StyledCard>
    </EqualHeightCardWrapper>
  );

  if (!recommended) return card;

  return (
    <StyledRibbonWrapper>
      <Badge.Ribbon text={t("pricingSection.recommended")} color="#b01e28">
        {card}
      </Badge.Ribbon>
    </StyledRibbonWrapper>
  );
};

PlanCard.propTypes = {
  redirectToTelegram: PropTypes.func,
  redirectToWhatsup: PropTypes.func,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  rate: PropTypes.number,
  ListOfThingth: PropTypes.elementType,
  recommended: PropTypes.bool,
};

export default PlanCard;
