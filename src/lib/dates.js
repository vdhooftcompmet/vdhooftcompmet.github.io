import { format, parseISO } from "date-fns";
export const fmt = (iso, f = "PPP") => (iso ? format(parseISO(iso), f) : "");
