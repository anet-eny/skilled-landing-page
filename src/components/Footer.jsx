import Button from "./Button";
import logoLight from "../assets/logo-light.svg";

export default function Footer() {
  return (
    <footer className="bg-blue-950">
      <div className="flex items-center justify-between max-w-6xl px-5 py-6 md:px-11 md:py-6 lg:px-20 mx-auto">
        <img src={logoLight} className="max-w-20 md:max-w-none" alt="" />
        <Button variant="purple">Get started</Button>
      </div>
    </footer>
  );
}
