import { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import NavModal from "./NavModal";
import FloatingActions from "./FloatingActions";
import Footer from "./Footer";
import useContactRedirects from "../hooks/useContactRedirects";

const PageShell = ({ children }) => {
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
      {children}
      <Footer />
    </>
  );
};

PageShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageShell;
