import PropTypes from "prop-types";
import styled from "styled-components";
import { Divider, Typography, Card } from "antd";

import convert from "../convert";

const StyledCardWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 2em;
`;

const ExtraServiceCard = ({ name, price, ListOfThingth }) => (
  <StyledCardWrapper>
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
      style={{ height: "100%" }}
    >
      <Typography.Text>{ListOfThingth}</Typography.Text>
      <Divider titlePlacement="center">
        ₴{convert(price)}
        <span style={{ color: "#878787" }}> / €{price}</span>
      </Divider>
    </Card>
  </StyledCardWrapper>
);

ExtraServiceCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  ListOfThingth: PropTypes.elementType,
};

export default ExtraServiceCard;
