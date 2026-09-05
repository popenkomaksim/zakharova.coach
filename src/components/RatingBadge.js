import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.35em 0.9em;
  margin-bottom: 1em;
  border-radius: 999px;
  background: rgba(253, 176, 34, 0.12);
  border: 1px solid rgba(253, 176, 34, 0.35);
`;

const StyledStars = styled.div`
  display: inline-flex;
  gap: 0.15em;
`;

const StyledScore = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 0.95em;
  line-height: 1;
`;

const StyledStar = styled.svg`
  width: 1em;
  height: 1em;
`;

const STAR_PATH =
  "M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7-5.4-4.7 7.1-.6z";

const RatingBadge = ({ rating = 5 }) => (
  <StyledBadge role="img" aria-label={`Рейтинг ${rating.toFixed(1)} з 5`}>
    <StyledStars aria-hidden="true">
      <StyledStar viewBox="0 0 24 24" fill="#fdb022">
        <path d={STAR_PATH} />
      </StyledStar>
      <StyledStar viewBox="0 0 24 24" fill="#fdb022">
        <path d={STAR_PATH} />
      </StyledStar>
      <StyledStar viewBox="0 0 24 24" fill="#fdb022">
        <path d={STAR_PATH} />
      </StyledStar>
      <StyledStar viewBox="0 0 24 24" fill="#fdb022">
        <path d={STAR_PATH} />
      </StyledStar>
      <StyledStar viewBox="0 0 24 24" fill="#fdb022">
        <path d={STAR_PATH} />
      </StyledStar>
    </StyledStars>
    <StyledScore>{rating.toFixed(1)}</StyledScore>
  </StyledBadge>
);

RatingBadge.propTypes = {
  rating: PropTypes.number,
};

export default RatingBadge;
