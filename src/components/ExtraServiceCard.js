import PropTypes from "prop-types";
import styled from "styled-components";
import { Badge, Divider, Typography, Card } from "antd";
import { useTranslation } from "react-i18next";

import EqualHeightCardWrapper from "./EqualHeightCardWrapper";
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
  font-size: 1.3em;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: rgb(43 43 43 / 92%);
`;

const StyledEurPrice = styled.span`
  color: #9a9a9a;
  font-weight: 500;
`;

const StyledDivider = styled(Divider)`
  &&& {
    margin-top: auto;
    padding-top: 1.4em;
    font-size: 1.3em;
    font-weight: 800;
    color: #b01e28;
  }
`;

const ExtraServiceCard = ({
  name,
  price,
  rate,
  ListOfThingth,
  recommended = false,
}) => {
  const { t } = useTranslation();
  const card = (
    <EqualHeightCardWrapper>
      <StyledCard
        title={<StyledCardTitle>{name}</StyledCardTitle>}
        size="small"
        $recommended={recommended}
      >
        <Typography.Text>{ListOfThingth}</Typography.Text>
        <StyledDivider titlePlacement="center">
          ₴{convert(price, rate)}
          <StyledEurPrice> / €{price}</StyledEurPrice>
        </StyledDivider>
      </StyledCard>
    </EqualHeightCardWrapper>
  );

  if (!recommended) return card;

  return (
    <StyledRibbonWrapper>
      <Badge.Ribbon text={t("extraServicesSection.mostWanted")} color="#b01e28">
        {card}
      </Badge.Ribbon>
    </StyledRibbonWrapper>
  );
};

ExtraServiceCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  rate: PropTypes.number,
  ListOfThingth: PropTypes.element,
  recommended: PropTypes.bool,
};

export default ExtraServiceCard;
