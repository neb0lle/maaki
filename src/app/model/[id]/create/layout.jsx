import { Theme } from "@radix-ui/themes";
import "../../../../styles/global.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MAKI</title>
      </head>

      <body>
        <Theme appearance="dark">
          <div className="container">{children}</div>
        </Theme>
      </body>
    </html>
  );
}
