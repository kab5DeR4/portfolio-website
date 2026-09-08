import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// merging classes like a boss
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
