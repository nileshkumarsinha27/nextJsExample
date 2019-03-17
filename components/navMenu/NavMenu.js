import Link from 'next/link';
const NavMenu = () => (
  <div className="menu">
    <nav>
      <Link href="/books">
        <a>Books</a>
      </Link>
      <Link href="/articles">
        <a>Articles</a>
      </Link>
    </nav>
    <style jsx>
      {`
        .menu {
          position: fixed;
          left: 0;
          top: 50px;
          width: 20%;
          height: 100%;
          background: #003f72;
          opacity: 0.8;
        }

        a {
          display: block;
          width: 100%;
          height: 56px;
          line-height: 56px;
          padding: 0 15px;
          min-width: 50px;
          text-decoration: none;
          color: #fff;
        }

        a:hover,
        a:active {
          background: rgba(0, 0, 0, 0.2);
        }

        a:focus {
          background: rgba(0, 0, 0, 0.4);
        }
      `}
    </style>
  </div>
);
export default NavMenu;
