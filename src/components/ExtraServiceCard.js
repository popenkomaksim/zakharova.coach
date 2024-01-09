import PropTypes from "prop-types";
import { Divider, Typography, Card } from "antd";

import convert from "../convert";

const ExtraServiceCard = ({ name, price, ListOfThingth }) => (
  <Card
    title={
      <div
        style={{
          textAlign: "center",
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
    <Typography.Text>{ListOfThingth}</Typography.Text>
    <Divider orientation="center">
      ₴{convert(price)}
      <span style={{ color: "#878787" }}> / €{price}</span>
    </Divider>
  </Card>
);

ExtraServiceCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  ListOfThingth: PropTypes.elementType,
};

export default ExtraServiceCard;
