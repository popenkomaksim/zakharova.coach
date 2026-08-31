import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRevealWrapper = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "32px")});
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <StyledRevealWrapper ref={ref} $visible={visible}>
      {children}
    </StyledRevealWrapper>
  );
};

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollReveal;
