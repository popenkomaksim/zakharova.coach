import PropTypes from "prop-types";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import ExtraServiceCard from "../components/ExtraServiceCard";

const ExtraServicesSection = ({ rate }) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle id="additional-services">
        {t("extraServicesSection.title")}
      </SectionTitle>
      <Row>
        <Col xs={24} md={6}>
          <ExtraServiceCard
            name={t("extraServicesSection.raceAnalysis.name")}
            price={40}
            rate={rate}
            ListOfThingth={
              <ul>
                {t("extraServicesSection.raceAnalysis.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />
        </Col>
        <Col xs={24} md={6}>
          <ExtraServiceCard
            name={t("extraServicesSection.seasonPlanning.name")}
            price={40}
            rate={rate}
            ListOfThingth={
              <ul>
                {t("extraServicesSection.seasonPlanning.items", {
                  returnObjects: true,
                }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />
        </Col>
        <Col xs={24} md={6}>
          <ExtraServiceCard
            name={t("extraServicesSection.personalTraining.name")}
            price={20}
            rate={rate}
            recommended
            ListOfThingth={
              <Typography.Text>
                {t("extraServicesSection.personalTraining.text")}
              </Typography.Text>
            }
          />
        </Col>
        <Col xs={24} md={6}>
          <ExtraServiceCard
            name={t("extraServicesSection.groupTraining.name")}
            price={12}
            rate={rate}
            ListOfThingth={
              <Typography.Text>
                {t("extraServicesSection.groupTraining.text")}
              </Typography.Text>
            }
          />
        </Col>
      </Row>
    </>
  );
};

ExtraServicesSection.propTypes = {
  rate: PropTypes.number,
};

export default ExtraServicesSection;
