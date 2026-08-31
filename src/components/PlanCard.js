import PropTypes from "prop-types";
import styled from "styled-components";
import { Badge, Divider, Typography, Card } from "antd";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

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

const PlanCard = ({
  name,
  price,
  ListOfThingth,
  redirectToTelegram,
  redirectToWhatsup,
  recommended = false,
}) => {
  const card = (
    <Card
      title={
        <div
          style={{
            textAlign: "center",
            fontSize: "3em",
            fontWeight: "bold",
            color: "rgb(59 59 59 / 88%)",
          }}
        >
          {name}
        </div>
      }
      size="small"
      style={
        recommended
          ? {
              margin: "2em",
              border: "2px solid #b01e28",
              boxShadow: "0 0.6em 2em rgba(176, 30, 40, 0.25)",
            }
          : { margin: "2em" }
      }
    >
      <Typography.Title
        style={{
          fontSize: "1.175em",
        }}
      >
        У цьому пакеті ви отримаєте:
      </Typography.Title>
      <Typography.Text>{ListOfThingth}</Typography.Text>
      <Typography.Text
        style={{
          justifyContent: "center",
          fontSize: "1.25em",
          display: "flex",
        }}
      >
        ₴{convert(price)}
        <span style={{ color: "#878787" }}> / €{price}</span>&nbsp;на місяць
      </Typography.Text>
      <Divider titlePlacement="center">
        <span
          onClick={redirectToTelegram}
          onKeyDown={redirectToTelegram}
          role="link"
          tabIndex="0"
          style={{ cursor: "pointer" }}
        >
          <StyledTelegram size="2em" color="#229ED9" />
        </span>
        <span
          onClick={redirectToWhatsup}
          onKeyDown={redirectToWhatsup}
          role="link"
          tabIndex="0"
          style={{ cursor: "pointer" }}
        >
          <StyledWhatsapp size="2em" color="#25D366" />
        </span>
      </Divider>
    </Card>
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
