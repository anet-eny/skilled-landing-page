import Button from "./Button";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-4 md:px-11 md:py-6 lg:px-20">
      <img src={logoDark} className="max-w-20 md:max-w-none" alt="" />
      <Button variant="black">Get started</Button>
    </header>
  );
}
