import styled from "styled-components";
import { Col, Row, Typography } from "antd";
import FormatCard from "./FormatCard";

const StyledTitleRow = styled(Row)`
  margin: 2em 0;
`;

const StyledTitle = styled(Typography.Title)`
  &&& {
    margin: 0;
    text-align: center;
  }
`;

const FormatsSection = () => (
  <>
    <StyledTitleRow id="formats">
      <Col span={24}>
        <StyledTitle level={2}>Формати співпраці</StyledTitle>
      </Col>
    </StyledTitleRow>

    <FormatCard
      title="Індивідуальний тренінг"
      description="Ти обираєш формат і цілі — я стежу, щоб кожне тренування давало максимум ефекту."
      photo="./Max_Doggy_Polya_Doggy.jpeg"
      pagination=""
      imageSide="left"
    />

    <FormatCard
      title="Онлайн тренування"
      photo="./hug.jpeg"
      description="Це простір для системної роботи без прив'язки до місця. Я створюю індивідуальні плани, що враховують ціль, рівень і контекст твого життя. Ти сам обираєш, скільки структури та взаємодії потрібно саме зараз."
      imageSide="right"
      pagination=""
    />

    <FormatCard
      title="Групові тренування"
      description="Групові тренування — це час, де кожен може рухатись у своєму ритмі, але в енергії спільної мети."
      photo="./thurthday.jpeg"
      pagination=""
      imageSide="left"
    />

    <FormatCard
      title="Тренувальні збори"
      description="Бігові кемпи — це більше, ніж просто тренування. Це коли тіло і дух об'єднуються. Тут усе просто: ми тренуємось, гуляємо, відновлюємось і живемо повільніше, ніж зазвичай."
      photo="./team6.jpeg"
      pagination=""
      imageSide="right"
    />

    <FormatCard
      title="Пропозиції для бізнесу"
      description="Це формат для компаній, які хочуть пройти шлях до спільного старту: трейлу, марафону, забігу з перешкодами чи благодійного заходу."
      photo="./Polina_OCC.jpeg"
      pagination=""
      imageSide="left"
    />
  </>
);

export default FormatsSection;
