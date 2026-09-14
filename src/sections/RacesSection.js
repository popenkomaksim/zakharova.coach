import { useMemo, useState } from "react";
import styled from "styled-components";
import { Col, Row, Image, Grid, Tag } from "antd";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";
import BaseOutlineButton from "../components/OutlineButton";
import races from "../data/races.json";

const { useBreakpoint } = Grid;
const { CheckableTag } = Tag;

const MOBILE_VISIBLE_COUNT = 8;

const RACE_TYPES = [
  "rogaining",
  "trail",
  "ocr",
  "skyrunning",
  "ski-mountaineering",
  "fitness-racing",
  "adventure",
  "other",
];

const StyledRaceLink = styled.a`
  display: inline-block;
  padding: 0.75em;
`;

const StyledRacesRow = styled(Row)`
  margin: 1em 0 3em 0;
`;

const StyledRaceTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8em;
  height: 8em;
  padding: 1em;
  box-sizing: border-box;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 575.98px) {
    padding: 0;
  }
`;

const StyledImageWrap = styled.div`
  position: relative;
  display: inline-flex;
`;

const StyledRaceBadge = styled.img`
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  width: 2em;
  height: auto;
`;

const StyledShowMoreButton = styled(BaseOutlineButton)`
  && {
    gap: 0;
    margin: 0 auto 1em auto;
  }
`;

const StyledFilterRow = styled(Row)`
  margin: 0 0 1em 0;
`;

const StyledFilterTag = styled(CheckableTag)`
  && {
    font-size: 1em;
    padding: 0.4em 0.9em;
    border-radius: 2em;
  }
`;

const RacesSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const screens = useBreakpoint();
  const isMobile = !screens.sm;
  const { t } = useTranslation();

  const presentTypes = useMemo(
    () => RACE_TYPES.filter((type) => races.some((race) => race.type === type)),
    []
  );

  const filteredRaces = useMemo(
    () =>
      selectedType ? races.filter((race) => race.type === selectedType) : races,
    [selectedType]
  );

  const visibleRaces =
    isMobile && !expanded
      ? filteredRaces.slice(0, MOBILE_VISIBLE_COUNT)
      : filteredRaces;

  const handleTypeChange = (type, checked) => {
    setExpanded(false);
    setSelectedType(checked ? type : null);
  };

  return (
    <>
      <SectionTitle id="races" level={3} margin="2em 0 1em 0">
        {t("races.title")}
      </SectionTitle>
      <StyledFilterRow justify="center" gutter={[8, 8]}>
        <Col>
          <StyledFilterTag
            checked={!selectedType}
            onChange={(checked) => handleTypeChange(null, checked)}
          >
            {t("races.filter.all")}
          </StyledFilterTag>
        </Col>
        {presentTypes.map((type) => (
          <Col key={type}>
            <StyledFilterTag
              checked={selectedType === type}
              onChange={(checked) => handleTypeChange(type, checked)}
            >
              {t(`races.filter.${type}`)}
            </StyledFilterTag>
          </Col>
        ))}
      </StyledFilterRow>
      <StyledRacesRow justify="center" align="middle" gutter={[24, 24]}>
        {visibleRaces.map(({ href, src, alt, badge, badgeAlt }) => (
          <Col key={src}>
            <StyledRaceLink
              target="_blank"
              rel="noopener noreferrer"
              href={href}
            >
              <StyledRaceTile>
                <StyledImageWrap>
                  <Image src={src} alt={alt} preview={false} loading="lazy" />
                  {badge && (
                    <StyledRaceBadge
                      src={badge}
                      alt={badgeAlt}
                      loading="lazy"
                    />
                  )}
                </StyledImageWrap>
              </StyledRaceTile>
            </StyledRaceLink>
          </Col>
        ))}
      </StyledRacesRow>
      {isMobile && !expanded && filteredRaces.length > MOBILE_VISIBLE_COUNT && (
        <Row justify="center">
          <StyledShowMoreButton onClick={() => setExpanded(true)}>
            {t("races.showMore")}
          </StyledShowMoreButton>
        </Row>
      )}
    </>
  );
};

export default RacesSection;
