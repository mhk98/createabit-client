//= Components
import Products from "./Products";
import SideMenu from "./SideMenu";

function List() {
  return (
    <section className="main-shop section-padding">
      <div className="container">
        <div className="row md-marg">
          {/* <SideMenu /> */}
          <Products />
        </div>
      </div>
    </section>
  );
}

export default List;
