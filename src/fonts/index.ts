import {
  Inter,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export const fonts = `${inter.variable}`;
