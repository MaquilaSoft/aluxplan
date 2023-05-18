import header from './header.module.scss'

const Header = () => {
  return (
    <header className={header.container}>
      <span>logo</span>
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
