import { Row } from "antd";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import FormatCard from "../components/FormatCard";

const FormatsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle id="formats">{t("formatsSection.title")}</SectionTitle>

      <Row justify="space-evenly">
        <FormatCard
          title={t("formatsSection.individual.title")}
          description={t("formatsSection.individual.description")}
          photo="./max_doggy_polya_doggy.jpeg"
          pagination=""
          imageSide="left"
        />

        <FormatCard
          title={t("formatsSection.online.title")}
          photo="./hug.jpeg"
          description={t("formatsSection.online.description")}
          imageSide="right"
          pagination=""
        />

        <FormatCard
          title={t("formatsSection.group.title")}
          description={t("formatsSection.group.description")}
          photo="./thurthday.jpeg"
          pagination=""
          imageSide="left"
        />

        <FormatCard
          title={t("formatsSection.camps.title")}
          description={t("formatsSection.camps.description")}
          photo="./team6.jpeg"
          pagination=""
          imageSide="right"
        />

        <FormatCard
          title={t("formatsSection.business.title")}
          description={t("formatsSection.business.description")}
          photo="./polina_occ.jpeg"
          pagination=""
          imageSide="left"
        />
      </Row>
    </>
  );
};

export default FormatsSection;
