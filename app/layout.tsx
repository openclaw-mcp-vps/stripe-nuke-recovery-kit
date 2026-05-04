import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Nuke Recovery Kit — Business Continuity for Payment Shutdowns",
  description: "Pre-configured backup payment systems and migration scripts for when your primary processor fails. Never lose revenue again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8298ed92-c5f7-4b0f-9ce6-93f4a25daf9d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
