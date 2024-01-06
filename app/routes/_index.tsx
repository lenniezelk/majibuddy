import type { MetaFunction } from "@remix-run/node";

import App from "~/components/App";
import Wrapper from "~/components/Wrapper";

export const meta: MetaFunction = () => [{ title: "Home" }];

export default function Index() {
  return (
    <Wrapper>
      <App />
    </Wrapper>
  );
}
