import PropTypes from "prop-types";

const LoopVideo = ({ src, alt }) => (
  <div style={{ width: "100%", margin: "3em 0" }}>
    <video
      alt={alt}
      autoPlay
      playsInline
      loop
      muted
      style={{ width: "100%", display: "block", margin: "3em 0" }}
    >
      <source src={src} type="video/mp4" />
    </video>
  </div>
);

LoopVideo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LoopVideo;
