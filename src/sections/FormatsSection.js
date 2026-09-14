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
          expandedDescription={t("formatsSection.individual.expanded")}
          photo="./max_doggy_polya_doggy.jpeg"
          pagination=""
          imageSide="left"
        />

        <FormatCard
          title={t("formatsSection.online.title")}
          photo="./hug.jpeg"
          description={t("formatsSection.online.description")}
          expandedDescription={t("formatsSection.online.expanded")}
          imageSide="right"
          pagination=""
        />

        <FormatCard
          title={t("formatsSection.group.title")}
          description={t("formatsSection.group.description")}
          expandedDescription={t("formatsSection.group.expanded")}
          photo="./thurthday.jpeg"
          pagination=""
          imageSide="left"
        />

        <FormatCard
          title={t("formatsSection.camps.title")}
          description={t("formatsSection.camps.description")}
          expandedDescription={t("formatsSection.camps.expanded")}
          photo="./team6.jpeg"
          pagination=""
          imageSide="right"
        />

        <FormatCard
          title={t("formatsSection.business.title")}
          description={t("formatsSection.business.description")}
          expandedDescription={t("formatsSection.business.expanded")}
          photo="./polina_occ.jpeg"
          pagination=""
          imageSide="left"
        />
      </Row>
    </>
  );
};

export default FormatsSection;
