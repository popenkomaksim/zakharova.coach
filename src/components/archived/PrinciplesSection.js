import styled from "styled-components";
import { Col, Row, Typography } from "antd";
import TransparentBoxText from "../TransparentBoxText";
import StyledCol from "../StyledCol";
import LoopVideo from "../LoopVideo";
import PolinaAltra from "../../Polina_Altra.mp4";

const StyledTitleRow = styled(Row)`
  margin: 2em 0;
`;

const StyledTitle = styled(Typography.Title)`
  &&& {
    margin: 0;
    text-align: center;
  }
`;

const StyledPrincipleRow = styled(Row)`
  margin: 5em 0;
`;

const StyledTextCol = styled(Col)`
  padding: 2em;
`;

const StyledReorderedTextCol = styled(StyledCol)`
  padding: 2em;
`;

const StyledText = styled(Typography.Text)`
  &&& {
    font-size: 1.75em;
  }
`;

const PrinciplesSection = () => (
  <>
    <StyledTitleRow justify="space-around" id="desc-first">
      <Col span={18}>
        <StyledTitle level={2}>
          Мій підхід до тренувального процесу базується на 3 приниципах:
        </StyledTitle>
      </Col>
    </StyledTitleRow>

    <StyledPrincipleRow justify="center" align="middle">
      <Col xs={24} md={12}>
        <TransparentBoxText
          text="Баланс"
          $fontSize="6vw"
          $fontSizeMobile="12vw"
          $imageUrl="./ski.jpg"
        />
      </Col>
      <StyledTextCol xs={24} md={12}>
        <StyledText>
          життєвий баланс &mdash; гармонійне поєднання особистого, професійного
          життя та хоббі, яке присносить задоволення та дарує покращення
          фізичного стану
        </StyledText>
      </StyledTextCol>
    </StyledPrincipleRow>

    <StyledPrincipleRow justify="center" align="middle">
      <StyledReorderedTextCol xs={24} md={12}>
        <StyledText>
          дисципліна та послідовність &mdash; дотримання плану та еволюційний
          розвиток створюють фундаментальну базу для довготривалих відносин зі
          спортом
        </StyledText>
      </StyledReorderedTextCol>

      <Col xs={24} md={12}>
        <TransparentBoxText
          text="Послідовність"
          $fontSize="6vw"
          $fontSizeMobile="12vw"
          $imageUrl="./ski.jpg"
        />
      </Col>
    </StyledPrincipleRow>

    <StyledPrincipleRow justify="center" align="middle">
      <Col xs={24} md={12}>
        <TransparentBoxText
          text="Практичність"
          $fontSize="6vw"
          $fontSizeMobile="12vw"
          $imageUrl="./ski.jpg"
        />
      </Col>
      <StyledTextCol xs={24} md={12}>
        <StyledText>
          індивідуальність та практичність &mdash; врахування рівня фізичної
          підготовки та реальної доступності ресурсів
        </StyledText>
      </StyledTextCol>
    </StyledPrincipleRow>

    <LoopVideo src={PolinaAltra} alt="Polina do smile" />
  </>
);

export default PrinciplesSection;
