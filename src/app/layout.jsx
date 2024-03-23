import { Theme } from "@radix-ui/themes";
import "@/styles/stars.sass";
import "@/styles/global.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MAKI</title>
      </head>

      <body>
        <Theme appearance="dark">
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            rel="stylesheet"
            type="text/css"
          />
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="container">{children}</div>
        </Theme>
      </body>
    </html>
  );
}
