import Header from '../header/Header';
import NavMenu from '../navMenu/NavMenu';
const Layout = props => (
  <div>
    <article>
      <Header />
      <section>
        <NavMenu />
        {props.children}
      </section>
    </article>
    <style jsx>{`
      article {
        position: relative;
      }
      section {
        position: absolute;
        left: 20%;
        width: 80%;
        top: 50px;
        background: #f1f4f8;
      }
    `}</style>
  </div>
);
export default Layout;
