import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Redux Essentials Example App",
  description: "Redux Essentials Example App",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}