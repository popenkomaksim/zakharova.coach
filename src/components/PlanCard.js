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
    border-radius: 1.1em;
    border: 1px solid rgb(0 0 0 / 8%);
    box-shadow: 0 0.4em 1.6em rgba(20, 20, 20, 0.06);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    overflow: hidden;

    &:hover {
      transform: translateY(-0.25em);
      box-shadow: 0 1em 2.4em rgba(20, 20, 20, 0.12);
    }

    ${({ $recommended }) =>
      $recommended &&
      `
      border: 2px solid #b01e28;
      box-shadow: 0 0.8em 2.4em rgba(176, 30, 40, 0.22);

      &:hover {
        box-shadow: 0 1.2em 2.8em rgba(176, 30, 40, 0.3);
      }
    `}

    .ant-card-head {
      border-bottom: none;
      padding: 1.4em 1.4em 0;
    }

    .ant-card-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
      padding: 1em 1.6em 1.8em;
    }
  }
`;

const StyledCardTitle = styled.div`
  text-align: center;
  font-size: 2.6em;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: rgb(43 43 43 / 92%);
`;

const StyledCardSubtitle = styled.div`
  text-align: center;
  font-size: 0.38em;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: rgb(59 59 59 / 62%);
  margin-top: 0.3em;
`;

const StyledSectionLabel = styled(Typography.Title)`
  &&& {
    font-size: 0.95em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgb(59 59 59 / 55%);
    margin-bottom: 0.9em;
  }
`;

const StyledPriceRow = styled(Typography.Text)`
  &&& {
    justify-content: center;
    align-items: baseline;
    font-size: 2.2em;
    font-weight: 800;
    display: flex;
    color: #b01e28;
    padding: 0.5em 0 0.7em;
  }
`;

const StyledEurPrice = styled.span`
  color: #9a9a9a;
  font-weight: 500;
  font-size: 0.55em;
`;

const StyledPerMonth = styled.span`
  font-size: 0.4em;
  font-weight: 500;
  color: rgb(59 59 59 / 62%);
  margin-left: 0.35em;
`;

const StyledPlanDetails = styled.div`
  text-align: center;
  border-top: 1px solid rgb(0 0 0 / 7%);
  padding-top: 1.4em;

  ul {
    display: inline-block;
    text-align: left;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.6em;
    margin-bottom: 0.7em;
    line-height: 1.45;
    color: rgb(43 43 43 / 85%);

    &::before {
      content: "✓";
      flex: none;
      font-weight: 700;
      color: #b01e28;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledDivider = styled(Divider)`
  &&& {
    margin-top: auto;
    padding-top: 1.4em;
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
          <StyledEurPrice>&nbsp;/ €{price}</StyledEurPrice>
          <StyledPerMonth>{t("pricingSection.perMonth")}</StyledPerMonth>
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
  ListOfThingth: PropTypes.element,
  recommended: PropTypes.bool,
};

export default PlanCard;
