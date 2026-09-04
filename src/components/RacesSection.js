import styled from "styled-components";
import { Col, Row, Image } from "antd";
import SectionTitle from "./SectionTitle";

const StyledRaceLink = styled.a`
  display: inline-block;
  padding: 0.75em;
`;

const StyledRacesRow = styled(Row)`
  margin: 1em 0 3em 0;
`;

const StyledRaceTile = styled.div`
  position: relative;
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
`;

const StyledRaceBadge = styled(Image)`
  &&& {
    position: absolute;
    top: 0;
    right: 0;
    width: 2.5em;
    height: auto;
  }
`;

const races = [
  {
    href: "https://swisspeaks.ch/",
    src: "./race_swisspeaks.svg",
    alt: "Swiss Peaks Trail Ultra Race",
  },
  {
    href: "https://www.tordesgeants.it/",
    src: "./race_tordesgeants.png",
    alt: "Tor des Géants",
  },
  {
    href: "https://montblanc.utmb.world/races/UTMB",
    src: "./race_utmb.png",
    alt: "UTMB Mont-Blanc",
  },
  {
    href: "https://montblanc.utmb.world/races/OCC",
    src: "./race_occ.png",
    alt: "OCC (UTMB Mont-Blanc)",
    badge: "./race_occ_badge.png",
    badgeAlt: "50K",
  },
  {
    href: "https://transgrancanaria.net/",
    src: "./race_transgrancanaria.png",
    alt: "Transgrancanaria",
  },
  {
    href: "https://miutmadeira.com/",
    src: "./race_miut.png",
    alt: "Madeira Island Ultra Trail",
  },
  {
    href: "https://www.transylvania100k.com/",
    src: "./race_transylvania.png",
    alt: "Transylvania 100",
  },
  {
    href: "https://lavaredo.utmb.world/",
    src: "./race_lavaredo.png",
    alt: "Lavaredo Ultra Trail",
  },
  {
    href: "https://www.ultratraillo.com/",
    src: "./race_utlo.png",
    alt: "Ultra-Trail del Lago d'Orta",
  },
];

const RacesSection = () => (
  <>
    <SectionTitle level={3} margin="2em 0 1em 0">
      Старти, на яких фінішували мої учні
    </SectionTitle>
    <StyledRacesRow justify="center" align="middle" gutter={[24, 24]}>
      {races.map(({ href, src, alt, badge, badgeAlt }) => (
        <Col key={src}>
          <StyledRaceLink target="_blank" rel="noopener noreferrer" href={href}>
            <StyledRaceTile>
              <Image src={src} alt={alt} preview={false} loading="lazy" />
              {badge && (
                <StyledRaceBadge
                  src={badge}
                  alt={badgeAlt}
                  preview={false}
                  loading="lazy"
                />
              )}
            </StyledRaceTile>
          </StyledRaceLink>
        </Col>
      ))}
    </StyledRacesRow>
  </>
);

export default RacesSection;
