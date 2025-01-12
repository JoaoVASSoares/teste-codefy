import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const FPageTitleUpdater = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    // Atualiza o título da página com base na rota
    const getPageTitle = (pathname: string): string => {
      if (pathname === "/") {
        return t("system.Characters - Rick & Morty");
      }
      if (/^\/\d+$/.test(pathname)) {
        return t("system.Character Details - Rick & Morty");
      }
      if (pathname === "/episodes") {
        return t("system.Epsodes - Rick & Morty");
      }
      return "Rick & Morty - WiKi";
    };

    document.title = getPageTitle(location.pathname);
  }, [location, t]);

  return null;
};

export default FPageTitleUpdater;
