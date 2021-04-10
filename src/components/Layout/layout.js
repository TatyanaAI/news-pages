import NavMenu from '../Navigation/NavMenu/navMenu';
import "./layout.css";

const Layout = (props) => {
  return (
    <>
      <NavMenu />
      <main className="Layout-Content">
        {props.children}
      </main>
    </>
  );
};

export default Layout;
