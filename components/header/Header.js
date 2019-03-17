const Header = () => (
  <div>
    <header>
      <h1>My Collection</h1>
    </header>
    <style jsx>
      {`
        header {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 56px;
          padding: 0;
          background: #003f72;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          z-index: 50;
        }

        header h1 {
          float: left;
          margin: 0;
          padding: 0 15px;
          font-size: 24px;
          line-height: 56px;
          font-weight: 400;
          color: #fff;
        }
      `}
    </style>
  </div>
);
export default Header;
