import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, Statistic, Avatar, Image } from "antd";
import CountUp from "react-countup";
import StyledCol from "../../components/StyledCol";
import ClickableIcon from "../../components/ClickableIcon";

function daysOfTraining() {
  const now = new Date();
  const start = new Date(2019, 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function getKmAmount() {
  return Math.ceil(daysOfTraining() * (20 * 8.5));
}

const formatter = (value) => <CountUp end={value} separator="," />;

const StyledStatsCol = styled(Col)`
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  grid-auto-rows: 1fr;
`;

const StyledGrayscaleImage = styled(Image)`
  &&& {
    filter: grayscale(1);
  }
`;

const StatsSection = ({ redirectToTelegram }) => (
  <Row justify="space-around">
    <StyledStatsCol xs={24} md={12}>
      <Statistic
        title="Кілометрів подолали мої учні"
        value={getKmAmount()}
        formatter={formatter}
      />

      <Statistic title="Персональних рекордів" value="100" />
      <Statistic title="Фінішерів на забігах 160+км" value="10" />
      <div>
        <Avatar.Group>
          <Avatar src="./zhenya.jpg" />
          <Avatar src="./tamara.jpg" />
          <Avatar src="./babii.jpg" />
          <ClickableIcon onClick={redirectToTelegram}>
            <Avatar>+</Avatar>
          </ClickableIcon>
        </Avatar.Group>
        <br />
        Десятки учнів займаються зараз
      </div>
    </StyledStatsCol>
    <StyledCol xs={24} md={12}>
      <StyledGrayscaleImage src="./kazbek.jpg" preview={false} />
    </StyledCol>
  </Row>
);

StatsSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
};

export default StatsSection;
