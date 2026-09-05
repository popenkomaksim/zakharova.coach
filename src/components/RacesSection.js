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
    href: "https://www.facebook.com/tvoiapryhoda/",
    src: "./tvoya_prygoda.png",
    alt: "Твоя Пригода",
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
  {
    href: "https://mozart.utmb.world/",
    src: "./race_mozart.png",
    alt: "Mozart 100 by UTMB",
  },
  {
    href: "https://nice.utmb.world/",
    src: "./race_nice.png",
    alt: "Nice Côte d'Azur by UTMB",
  },
  {
    href: "https://grandraidduguillestrois-queyras.com",
    src: "./race_grgq.png",
    alt: "Grand Raid du Guillestrois – Queyras",
  },
  {
    href: "https://kullamannen.utmb.world/",
    src: "./race_kullamannen.png",
    alt: "Kullamannen by UTMB",
  },
  {
    href: "https://www.madrisatrail.ch",
    src: "./race_madrisa.svg",
    alt: "Madrisa Trail Klosters",
  },
  {
    href: "https://www.humanitrail.com/rhino-26k.html",
    src: "./race_rhino.png",
    alt: "Rhino TRAIL 26 km / 1'600m D+ — THE Ormonts ridges",
  },
  {
    href: "https://www.legendstrail.be/",
    src: "./race_legends_trail.png",
    alt: "Legends Trail",
  },
  {
    href: "https://ua.spartan.com/uk",
    src: "./race_spartan.svg",
    alt: "Spartan Race Ukraine",
  },
  {
    href: "https://www.spartan.com/en/deka/strong",
    src: "./race_deka_strong.png",
    alt: "DEKA Strong (Spartan)",
  },
  {
    href: "https://www.ultratourmonterosa.com/",
    src: "./race_utmr.png",
    alt: "Ultra Tour Monte Rosa",
  },
  {
    href: "https://graubuenda.run/",
    src: "./race_graubuenda.png",
    alt: "Trailrun Graubünda",
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
              <StyledImageWrap>
                <Image src={src} alt={alt} preview={false} loading="lazy" />
                {badge && (
                  <StyledRaceBadge src={badge} alt={badgeAlt} loading="lazy" />
                )}
              </StyledImageWrap>
            </StyledRaceTile>
          </StyledRaceLink>
        </Col>
      ))}
    </StyledRacesRow>
  </>
);

export default RacesSection;
