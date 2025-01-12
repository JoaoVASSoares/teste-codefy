import { format, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

export const getBadgeClass = (status: string) => {
  switch (status) {
    case "Alive":
      return "bg-success";
    case "Dead":
      return "bg-danger";
    case "unknown":
      return "bg-secondary";
    default:
      return "bg-secondary";
  }
};

export const episodeFormatDate = (date: string): string => {
  const parsedDate = parse(date, "MMMM d, yyyy", new Date());
  return format(parsedDate, "d 'de' MMMM, yyyy", { locale: ptBR });
};
