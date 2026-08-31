import PropTypes from "prop-types";
import styled from "styled-components";
import { Divider, Typography, Card } from "antd";

import EqualHeightCardWrapper from "./EqualHeightCardWrapper";
import convert from "../convert";

const StyledCard = styled(Card)`
  &&& {
    height: 100%;
  }
`;

const StyledCardTitle = styled.div`
  text-align: center;
  font-weight: bold;
  color: rgb(59 59 59 / 88%);
`;

const StyledEurPrice = styled.span`
  color: #878787;
`;

const ExtraServiceCard = ({ name, price, ListOfThingth }) => (
  <EqualHeightCardWrapper>
    <StyledCard title={<StyledCardTitle>{name}</StyledCardTitle>} size="small">
      <Typography.Text>{ListOfThingth}</Typography.Text>
      <Divider titlePlacement="center">
        ₴{convert(price)}
        <StyledEurPrice> / €{price}</StyledEurPrice>
      </Divider>
    </StyledCard>
  </EqualHeightCardWrapper>
);

ExtraServiceCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  ListOfThingth: PropTypes.elementType,
};

export default ExtraServiceCard;
