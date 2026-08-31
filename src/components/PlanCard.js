import PropTypes from "prop-types";
import styled from "styled-components";
import { Badge, Divider, Typography, Card } from "antd";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

import EqualHeightCardWrapper from "./EqualHeightCardWrapper";
import ClickableIcon from "./ClickableIcon";
import convert from "../convert";

const StyledTelegram = styled(FaTelegram)`
  margin: 0 0.5em;
  top: -0.4em;
`;

const StyledWhatsapp = styled(FaWhatsapp)`
  margin: 0 0.5em;
  top: -0.4em;
`;

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
    ${({ $recommended }) =>
      $recommended &&
      `
      border: 2px solid #b01e28;
      box-shadow: 0 0.6em 2em rgba(176, 30, 40, 0.25);
    `}
  }
`;

const StyledCardTitle = styled.div`
  text-align: center;
  font-size: 3em;
  font-weight: bold;
  color: rgb(59 59 59 / 88%);
`;

const StyledSectionLabel = styled(Typography.Title)`
  &&& {
    font-size: 1.175em;
  }
`;

const StyledPriceRow = styled(Typography.Text)`
  &&& {
    justify-content: center;
    font-size: 1.25em;
    display: flex;
  }
`;

const StyledEurPrice = styled.span`
  color: #878787;
`;

const PlanCard = ({
  name,
  price,
  ListOfThingth,
  redirectToTelegram,
  redirectToWhatsup,
  recommended = false,
}) => {
  const card = (
    <EqualHeightCardWrapper>
      <StyledCard
        title={<StyledCardTitle>{name}</StyledCardTitle>}
        size="small"
        $recommended={recommended}
      >
        <StyledSectionLabel>У цьому пакеті ви отримаєте:</StyledSectionLabel>
        <Typography.Text>{ListOfThingth}</Typography.Text>
        <StyledPriceRow>
          ₴{convert(price)}
          <StyledEurPrice> / €{price}</StyledEurPrice>&nbsp;на місяць
        </StyledPriceRow>
        <Divider titlePlacement="center">
          <ClickableIcon onClick={redirectToTelegram}>
            <StyledTelegram size="2em" color="#229ED9" />
          </ClickableIcon>
          <ClickableIcon onClick={redirectToWhatsup}>
            <StyledWhatsapp size="2em" color="#25D366" />
          </ClickableIcon>
        </Divider>
      </StyledCard>
    </EqualHeightCardWrapper>
  );

  if (!recommended) return card;

  return (
    <StyledRibbonWrapper>
      <Badge.Ribbon text="Рекомендую" color="#b01e28">
        {card}
      </Badge.Ribbon>
    </StyledRibbonWrapper>
  );
};

PlanCard.propTypes = {
  redirectToTelegram: PropTypes.func,
  redirectToWhatsup: PropTypes.func,
  name: PropTypes.string,
  price: PropTypes.number,
  ListOfThingth: PropTypes.elementType,
  recommended: PropTypes.bool,
};

export default PlanCard;
