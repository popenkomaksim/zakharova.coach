import PropTypes from "prop-types";
import { Col, Row, Statistic, Avatar, Image } from "antd";
import CountUp from "react-countup";
import StyledCol from "./StyledCol";

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

const StatsSection = ({ redirectToTelegram }) => (
  <Row justify="space-around">
    <Col
      xs={24}
      md={12}
      style={{
        padding: "2em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        flexDirection: "row",
        flexWrap: "wrap",
        gridAutoRows: "1fr",
      }}
    >
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
          <span
            onClick={redirectToTelegram}
            onKeyDown={redirectToTelegram}
            role="link"
            tabIndex="0"
            style={{ cursor: "pointer" }}
          >
            <Avatar>+</Avatar>
          </span>
        </Avatar.Group>
        <br />
        Десятки учнів займаються зараз
      </div>
    </Col>
    <StyledCol xs={24} md={12}>
      <Image
        src="./kazbek.jpg"
        preview={false}
        style={{ filter: "grayscale(1)" }}
      />
    </StyledCol>
  </Row>
);

StatsSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
};

export default StatsSection;
