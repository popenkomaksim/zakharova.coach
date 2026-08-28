import PropTypes from "prop-types";
import { Col, Row, Typography, Image } from "antd";
import StyledCol from "./StyledCol";

const CollaborationSection = ({ redirectToTelegram }) => (
  <>
    <Row justify="space-around" id="desc-second">
      <Col
        xs={24}
        md={12}
        style={{
          padding: "2em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "400px" }}>
          <Typography.Title level={2} style={{ textAlign: "center" }}>
            Формати співпраці
          </Typography.Title>
          <Typography.Text style={{ fontSize: "1.5em" }}>
            Мої учні, як початківці, аматори, так й про-аматори обирають різні
            формати співпраці:
            <ul>
              <li>моделювання профілю атлета</li>
              <li>довготривале стратегічне планування</li>
              <li>персональні тренування</li>
              <li>супровід на гонці</li>
              <li>навчально-тренувальні/спеціально-підготовчі збори</li>
            </ul>
          </Typography.Text>
        </div>
      </Col>

      <Col xs={24} md={12}>
        <Image
          src="./vin02.jpg"
          preview={false}
          style={{ filter: "grayscale(1)" }}
        />
      </Col>
    </Row>

    <Row justify="space-around">
      <StyledCol xs={24} md={12}>
        <Image
          src="./IMG_1182.jpg"
          preview={false}
          style={{ filter: "grayscale(1)" }}
        />
      </StyledCol>
      <Col
        xs={24}
        md={12}
        style={{
          padding: "2em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "400px" }}>
          <Typography.Text style={{ fontSize: "1.5em" }}>
            Я щиро рада працювати з усіма, хто хоче стати кращою версією
            себе.&nbsp;
            <span
              onClick={redirectToTelegram}
              onKeyDown={redirectToTelegram}
              role="link"
              tabIndex="0"
              style={{ cursor: "pointer" }}
            >
              Напиши мені
            </span>{" "}
            вже сьогодні, і, можливо, нам з тобою по дорозі.
            <br />
            Зі мною можна домовитись.
          </Typography.Text>
        </div>
      </Col>
    </Row>
  </>
);

CollaborationSection.propTypes = {
  redirectToTelegram: PropTypes.func.isRequired,
};

export default CollaborationSection;
