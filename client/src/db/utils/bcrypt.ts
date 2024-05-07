import bcryptjs from "bcryptjs";

export const hashPass = (text: string): string => bcryptjs.hashSync(text);
export const comparePass = (text: string, hash: string): boolean =>
  bcryptjs.compareSync(text, hash);
