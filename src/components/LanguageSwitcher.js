import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Dropdown } from "antd";
import { MdLanguage } from "react-icons/md";
import { SUPPORTED_LANGUAGES } from "../i18n";

const StyledTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 0.35em;
  flex-shrink: 0;
  padding: 0.4em 0.6em;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2em;
  background: transparent;
  color: #353935;
  font-weight: 600;
  font-size: 0.85em;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: #b01e28;
    border-color: #b01e28;
  }
`;

const StyledIcon = styled(MdLanguage)`
  font-size: 1.2em;
`;

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const currentCode = i18n.resolvedLanguage || i18n.language || "uk";
  const current =
    SUPPORTED_LANGUAGES.find(({ code }) => code === currentCode) ||
    SUPPORTED_LANGUAGES[0];

  const items = SUPPORTED_LANGUAGES.map(({ code, label }) => ({
    key: code,
    label,
  }));

  const handleClick = ({ key }) => {
    i18n.changeLanguage(key);
  };

  return (
    <Dropdown
      menu={{ items, onClick: handleClick, selectedKeys: [currentCode] }}
      trigger={["click"]}
    >
      <StyledTrigger
        type="button"
        aria-label={t("languagePicker.label")}
        title={t("languagePicker.label")}
      >
        <StyledIcon />
        {current.code.toUpperCase()}
      </StyledTrigger>
    </Dropdown>
  );
};

export default LanguageSwitcher;
