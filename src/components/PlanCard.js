import PropTypes from "prop-types";
import styled from "styled-components";
import { Divider, Typography, Card } from "antd";
import { FaTelegram } from "react-icons/fa";

import convert from "../convert";

const StyledTelegram = styled(FaTelegram)`
  margin: 0 0.5em;
  top: -0.4em;
`;

const PlanCard = ({ name, price, ListOfThingth, redirectToTelegram }) => (
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
    style={{ margin: "2em" }}
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
    <Divider orientation="center">
      <span
        onClick={redirectToTelegram}
        onKeyDown={redirectToTelegram}
        role="link"
        tabIndex="0"
      >
        <StyledTelegram size="2em" color="#229ED9" />
      </span>
    </Divider>
  </Card>
);

PlanCard.propTypes = {
  redirectToTelegram: PropTypes.func,
  name: PropTypes.string,
  price: PropTypes.number,
  ListOfThingth: PropTypes.elementType,
};

export default PlanCard;
