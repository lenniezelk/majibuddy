import type { MetaFunction } from "@remix-run/node";

import App from "~/components/App";
import NavBar from "~/components/NavBar";
import Wrapper from "~/components/Wrapper";

export const meta: MetaFunction = () => [{ title: "Home" }];

export default function Index() {
  return (
    <Wrapper>
      <NavBar />
      <App />
    </Wrapper>
  );
}
