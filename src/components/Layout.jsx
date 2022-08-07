import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className="container pt-12 px-4 mx-auto max-w-screen-xl">
      {children}
    </div>
  </div>
);

export default Layout;
