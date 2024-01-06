import { Link } from "@remix-run/react";

import logoDark from "~/assets/images/logo-dark.png";
import logoLight from "~/assets/images/logo-light.png";
import { useTheme } from "~/utils";

const Logo = () => {
  const { theme } = useTheme();
  const logo = theme === "dark" ? logoDark : logoLight;

  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="Logo" width={64} height={64} />
      <p className="text-3xl text-blue-500 font-bold pt-3 text-center">
        MajiBuddy
      </p>
    </Link>
  );
};

export default Logo;
