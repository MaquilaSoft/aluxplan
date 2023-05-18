import header from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className={header.container}>
      <div className={header.logoContainer}>
        <Link href="/">
          <Image
            src="/images/logo.jpeg"
            alt="Alux Temple Logo"
            width={70}
            height={70}
            className="h-20 w-auto aspect-square mr-4"
          />
        </Link>
        <div>
          <h1 className="text-white text-4xl">Alux Plan</h1>
          <p className="text-white text-xl">
            Gracias por visitar el templo del Alux
          </p>
        </div>
      </div>
      <nav>
        <ul className={header.list}>
          <li className={header.listItems}>Aluxes</li>
          <li>Experience</li>
          <li>Practical Info</li>
          <li>Share</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
