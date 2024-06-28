import { useEffect, useState } from "react";
import { useTheme } from "../../../utils/themeProvider";

type Props = {
  logo: string;
  darkLogo: string;
};

function Logo({ logo, darkLogo }: Readonly<Props>) {
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = useState(logo);

  useEffect(() => {
    setLogoSrc(theme === "dark" ? darkLogo : logo);
  }, [theme, logo, darkLogo]);

  return (
    <img
      key={theme}
      className="h-20 w-auto"
      src={logoSrc}
      alt="their-share-logo"
    />
  );
}

export default Logo;
