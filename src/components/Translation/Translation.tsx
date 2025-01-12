import { useTranslation } from "react-i18next";
import { TTranslationType } from "../../core/Types";

type Props = {
  type: TTranslationType;
  origin: string;
};

const Translation = ({ type, origin }: Props) => {
  const { t } = useTranslation();

  const translated = t(`${type}.${origin}`);

  return translated !== `${type}.${origin}` ? <>{translated}</> : <>{origin}</>;
};

export default Translation;
