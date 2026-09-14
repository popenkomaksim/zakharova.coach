import { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import NavModal from "./NavModal";
import FloatingActions from "./FloatingActions";
import Footer from "./Footer";

const PageShell = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <NavModal open={navOpen} onClose={() => setNavOpen(false)} />
      <FloatingActions onMenuClick={() => setNavOpen(true)} />

      <Header />
      {children}
      <Footer />
    </>
  );
};

PageShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageShell;
