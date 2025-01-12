import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FPageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    // Atualiza o título da página com base na rota
    const getPageTitle = (pathname: string): string => {
      if (pathname === "/") {
        return "Personagens - Rick & Morty";
      }
      if (/^\/\d+$/.test(pathname)) {
        return "Detalhes do Personagem - Rick & Morty";
      }
      return "Rick & Morty - WiKi";
    };

    document.title = getPageTitle(location.pathname);
  }, [location]);

  return null;
};

export default FPageTitleUpdater;
