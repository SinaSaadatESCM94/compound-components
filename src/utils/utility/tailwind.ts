import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const twClassNames = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
