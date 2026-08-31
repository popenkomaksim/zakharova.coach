import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

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
    <div style={{ width: "100%", margin: "3em 0" }}>
      <video
        ref={videoRef}
        alt={alt}
        playsInline
        loop
        muted
        preload="none"
        style={{ width: "100%", display: "block", margin: "3em 0" }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

LoopVideo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LoopVideo;
