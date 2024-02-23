export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">SWAPI finder</h1>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="item">Get Planets</li>
          <li className="item">Get Characters</li>
        </ul>
      </nav>
    </header>
  );
};
