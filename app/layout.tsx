import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Amit Electricals | Mandsaur",description:"Amit Electricals — electrical supply store on Road Number 3, Kalakhet, Mandsaur."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}