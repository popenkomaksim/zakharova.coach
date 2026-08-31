import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  margin: 3em 0;
`;

const StyledVideo = styled.video`
  width: 100%;
  display: block;
  margin: 3em 0;
`;

const LoopVideo = ({ src, alt }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <StyledWrapper>
      <StyledVideo ref={videoRef} alt={alt} playsInline loop muted preload="none">
        <source src={src} type="video/mp4" />
      </StyledVideo>
    </StyledWrapper>
  );
};

LoopVideo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LoopVideo;
