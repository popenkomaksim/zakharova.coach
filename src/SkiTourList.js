import { useState } from "react";
import "@fontsource/montserrat";
import "./App.css";
import styled from "styled-components";

import { FaTelegram, FaCheckCircle } from "react-icons/fa";
import {
  GiWinterHat,
  GiTShirt,
  GiWinterGloves,
  GiTrousers,
  GiBackpack,
  GiLipstick,
  GiPartyPopper,
} from "react-icons/gi";
import { Col, Row, Typography, Card, Badge } from "antd";
import Header from "./components/Header";
import NavModal from "./components/NavModal";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import useContactRedirects from "./hooks/useContactRedirects";

const CATEGORIES = [
  {
    title: "Голова",
    icon: GiWinterHat,
    color: "#3D8BFD",
    items: [
      "пов'язка",
      "легка шапка",
      "відносно тепла, але тонка шапка",
      "баф (краще два)",
    ],
  },
  {
    title: "Верхній корпус",
    icon: GiTShirt,
    color: "#FA8C16",
    items: [
      "термо (краще меринос, що відводить вологу)",
      "фліс",
      "можливо тоненька жилетка",
      "кофта-курточка на прімалофт",
      "курточка з мембраною чи гортекс",
    ],
  },
  {
    title: "Руки",
    icon: GiWinterGloves,
    color: "#52C41A",
    items: [
      "тонкі рукавички",
      "верхонки",
      "теплі рукавиці",
      "супер теплі рукави для катання вниз",
    ],
  },
  {
    title: "Ноги",
    icon: GiTrousers,
    color: "#B01E28",
    items: [
      "гарна білизна ;-)",
      "термо (краще меринос, що відводить вологу)",
      "штани/тайси з віндстопером",
      "самозброси — штани від вітру, можуть бути з мембрани",
      "два останні шари можна замінити на «тонкі» гірськолижні штани",
      "шкарпетки — теплі гетри до коліна, 2 пари. Якщо є, можна взяти ще тонку пару гетрів",
    ],
  },
  {
    title: "Більш складні поняття",
    icon: GiBackpack,
    color: "#722ED1",
    items: [
      "шолом",
      "окуляри",
      "маска",
      "палиці",
      "рюкзак",
      "лижі",
      "черевики",
      "камус",
      "ліхтарик (запасні батарейки чи акуми; візьми з собою зарядний пристрій, яким можна зарядити ліхтар)",
      "маленький термос (тепла вода/чай)",
      "перекус (батончики, калорійні цукерки)",
      "рем-набір: стяжки, маленький мультитул, армований скотч (не моток, просто пару метрів)",
      "маленька аптечка: бинт, пластирі (силіконові — ТОП), хлоргексидин, знеболююче, регідрон, ізофолія",
      "для бажаючих — хімічна грілка (стопи, руки)",
      "сушка для взуття",
      "для бажаючих — кішки (це питання потрібно обговорити додатково)",
    ],
  },
  {
    title: "Косметика",
    icon: GiLipstick,
    color: "#EB2F96",
    items: ["бальзам для губ", "сонцезахисний крем"],
  },
];

const StyledTelegram = styled(FaTelegram)`
  margin: 0 0.5em;
  top: -0.4em;
`;

const StyledHero = styled.div`
  position: relative;
  padding: 4.5em 1.5em;
  text-align: center;
  color: white;
  background: linear-gradient(
      to bottom,
      rgba(15, 25, 45, 0.75),
      rgba(15, 25, 45, 0.88)
    ),
    url(./ski.jpg) center/cover no-repeat;
`;

const StyledHeroTitle = styled(Typography.Title)`
  &&& {
    color: white;
    margin: 0;
  }
`;

const StyledHeroSubtitle = styled(Typography.Paragraph)`
  &&& {
    color: white;
    font-size: 1.3em;
    margin: 0.5em 0 0 0;
  }
`;

const StyledCategoriesRow = styled(Row)`
  padding: 2.5em 2em;
  margin: 0;
`;

const StyledCategoryCard = styled(Card)`
  &&& {
    height: 100%;
    border-top: 4px solid ${({ $color }) => $color};
    border-radius: 12px;
  }
`;

const StyledIconCircle = styled.div`
  width: 2.75em;
  height: 2.75em;
  min-width: 2.75em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2em;
  background: ${({ $color }) => $color};
`;

const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7em;
  margin-bottom: 0.5em;
`;

const StyledCategoryTitle = styled.span`
  font-weight: 700;
  font-size: 1.25em;
  flex: 1;
`;

const StyledBadge = styled(Badge)`
  &&& .ant-badge-count {
    background-color: ${({ $color }) => $color};
  }
`;

const StyledItemList = styled.ul`
  list-style: none;
  margin: 0.75em 0 0 0;
  padding: 0;
`;

const StyledItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6em;
  margin-bottom: 0.7em;
  font-size: 1.02em;
  line-height: 1.45;
`;

const StyledCheckIcon = styled(FaCheckCircle)`
  flex-shrink: 0;
  margin-top: 0.25em;
`;

const StyledCtaRow = styled(Row)`
  padding: 0 2em 2.5em 2em;
`;

const StyledCtaCard = styled(Card)`
  &&& {
    text-align: center;
    background: linear-gradient(135deg, #232526, #414345);
    border-radius: 16px;
    border: none;
  }
`;

const StyledCtaTitle = styled(Typography.Title)`
  &&& {
    color: white;
    margin: 0.4em 0 0 0;
  }
`;

const StyledCtaText = styled(Typography.Paragraph)`
  &&& {
    color: white;
    font-size: 1.3em;
    margin: 0;
  }
`;

const StyledQuestionWrapper = styled.div`
  margin: 3em 2em 0 2em;
  text-align: center;
`;

const StyledQuestionTitle = styled(Typography.Title)`
  &&& {
    margin: 0;
  }
`;

const SkiTourList = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { redirectToTelegram } = useContactRedirects();

  return (
    <>
      <NavModal open={navOpen} onClose={() => setNavOpen(false)} />
      <FloatingActions
        redirectToTelegram={redirectToTelegram}
        onMenuClick={() => setNavOpen(true)}
      />

      <Header />

      <StyledHero>
        <StyledHeroTitle level={1}>Чеклист лижного туру</StyledHeroTitle>
        <StyledHeroSubtitle>
          Які іграшки необхідно мати, щоб вижити 🏔️
        </StyledHeroSubtitle>
      </StyledHero>

      <StyledCategoriesRow gutter={[24, 24]}>
        {CATEGORIES.map((category) => (
          <Col xs={24} sm={12} lg={8} key={category.title}>
            <StyledCategoryCard $color={category.color}>
              <StyledCardHeader>
                <StyledIconCircle $color={category.color}>
                  <category.icon />
                </StyledIconCircle>
                <StyledCategoryTitle>{category.title}</StyledCategoryTitle>
                <StyledBadge
                  count={category.items.length}
                  $color={category.color}
                />
              </StyledCardHeader>
              <StyledItemList>
                {category.items.map((item) => (
                  <StyledItem key={item}>
                    <StyledCheckIcon color={category.color} />
                    <span>{item}</span>
                  </StyledItem>
                ))}
              </StyledItemList>
            </StyledCategoryCard>
          </Col>
        ))}
      </StyledCategoriesRow>

      <StyledCtaRow justify="center">
        <Col xs={24} md={16} lg={12}>
          <StyledCtaCard>
            <GiPartyPopper size="2.5em" color="white" />
            <StyledCtaTitle level={3}>Найголовніше спорядження</StyledCtaTitle>
            <StyledCtaText>Гарний настрій.</StyledCtaText>
          </StyledCtaCard>
        </Col>
      </StyledCtaRow>

      <Row justify="space-around">
        <Col xs={24} md={10}>
          <StyledQuestionWrapper>
            <StyledQuestionTitle level={3}>
              Залишились питання?
            </StyledQuestionTitle>
            <br />
            <Typography.Text>
              Зв&apos;яжись зі мною в робочі години.
            </Typography.Text>
            <br />
            <br />
            <br />
            <a href="https://telegram.me/ZakharovaPolina">
              <StyledTelegram size="4em" color="#229ED9" />
            </a>
          </StyledQuestionWrapper>
        </Col>
      </Row>

      <Footer />
    </>
  );
};

export default SkiTourList;
