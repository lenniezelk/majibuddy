import type { MetaFunction } from "@remix-run/node";

import App from "~/components/App";
import NavBar from "~/components/NavBar";
import Wrapper from "~/components/Wrapper";
import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Home" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <Wrapper>
      <NavBar user={user} />
      <App />
    </Wrapper>
  );
}
