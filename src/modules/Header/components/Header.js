import { useHref } from "react-router-dom";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
export const Header = () => {
  const url = useHref();
  return (
    <header>
      <Nav />
      <Banner url={url} />
    </header>
  );
};
