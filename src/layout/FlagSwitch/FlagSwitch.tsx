import "./FlagSwitch.css";
import { useTranslation } from "react-i18next";

type Props = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const FlagSwitch = ({ isChecked, setIsChecked }: Props) => {
  const { i18n } = useTranslation();

  const handleChange = () => {
    const newLang = isChecked ? "pt" : "en";
    i18n.changeLanguage(newLang);
    setIsChecked(!isChecked);
  };

  return (
    <div className="flag-switch" data-first-lang="EN" data-second-lang="BR">
      <input type="checkbox" id="check1" checked={isChecked} onChange={handleChange} />
      <label htmlFor="check1"></label>
    </div>
  );
};

export default FlagSwitch;
