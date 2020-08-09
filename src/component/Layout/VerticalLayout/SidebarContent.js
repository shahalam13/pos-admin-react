import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  toggleSidebar,
  hideRightSidebar,
  changeTopbarTheme,
  changeLayout,
  changeSidebarTheme,
  changeLayoutWidth,
  changeSidebarType,
  changePreloader,
} from "../../../store/actions";

// MetisMenu
import MetisMenu from "metismenujs";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_toggle: false,
      layoutType: this.props.layoutType,
      topbarTheme: this.props.topbarTheme,
      leftSideBarTheme: this.props.leftSideBarTheme,
      layoutWidth: this.props.layoutWidth,
      sidebarType: this.props.leftSideBarType,
      isPreloader: this.props.isPreloader,
    };
    this.changeLayout = this.changeLayout.bind(this);
    this.changeTopbarTheme = this.changeTopbarTheme.bind(this);
    this.changeLeftSidebarTheme = this.changeLeftSidebarTheme.bind(this);
    this.changeLayoutWidth = this.changeLayoutWidth.bind(this);
    this.changeLeftSidebarType = this.changeLeftSidebarType.bind(this);
    this.changeThemePreloader = this.changeThemePreloader.bind(this);
  }

  componentDidMount() {
    document.body.setAttribute("data-sidebar", "dark");
    this.initMenu();
  }

  //update local state after changing layout
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        layoutType: this.props.layoutType,
        topbarTheme: this.props.topbarTheme,
        leftSideBarTheme: this.props.leftSideBarTheme,
        layoutWidth: this.props.layoutWidth,
        sidebarType: this.props.leftSideBarType,
        isPreloader: this.props.isPreloader,
      });
    }

    if (this.props.leftSideBarType !== prevProps.leftSideBarType) {
      this.initMenu();
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("mm-active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active"); // li
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };
  //change layput type and dispatch action
  changeLayout() {
    this.props.changeLayout("horizontal");
  }

  //theme preloader
  changeThemePreloader = (value) => {
    this.props.changePreloader(!this.props.isPreloader);
  };

  //change left sidebar theme
  changeLeftSidebarTheme(value) {
    this.props.changeSidebarTheme(value);
  }

  //change layout width
  changeLayoutWidth(value) {
    if (this.state.layoutWidth === "boxed")
      this.props.changeLayoutWidth("fluid", this.state.layoutType);
    else this.props.changeLayoutWidth("boxed", this.state.layoutType);
  }

  //change topbar theme and dispatch action
  changeTopbarTheme(value) {
    this.props.changeTopbarTheme(value);
  }

  //change sidebar type
  changeLeftSidebarType(value) {
    this.props.changeSidebarType(value);
  }

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Main</li>

            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="mdi mdi-view-dashboard"></i>
                <span className="badge badge-pill badge-primary float-right">
                  2
                </span>
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-account-multiple"></i>
                <span>User Management</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="add-user">Add User</Link>
                </li>
                <li>
                  <Link to="user-list">List User</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-cube"></i>
                <span>Products</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="category-list">List Category</Link>
                </li>
                <li>
                  <Link to="add-category">Add Category</Link>
                </li>
                <li>
                  <Link to="product-list">List Products</Link>
                </li>
                <li>
                  <Link to="add-product">Add Product</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-arrow-down-bold-circle"></i>
                <span>Purchase</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="purchase-list">List Purchase</Link>
                </li>
                <li>
                  <Link to="add-purchase">Add Purchase</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-arrow-up-bold-circle"></i>
                <span>Sell</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="sales-list">All Sales</Link>
                </li>
                <li>
                  <Link to="add-sale">Add Sales</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-transfer"></i>
                <span>Stock Trnasfer</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="transfer-list">List Stock Transfer</Link>
                </li>
                <li>
                  <Link to="add-transfer">Add Stock Transfer</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-rotate-right-variant"></i>
                <span>Stock Adjustment</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="adjustment-list">List Stock Adjustment</Link>
                </li>
                <li>
                  <Link to="add-adjustment">Add Stock Adjustment</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-minus-circle"></i>
                <span>Expenses</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="expense-list">List Expense</Link>
                </li>
                <li>
                  <Link to="add-expense">Add Expense</Link>
                </li>
                <li>
                  <Link to="expense-category-list">List Expense Category</Link>
                </li>
                <li>
                  <Link to="add-expense-category">Add Expense Category</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-chart-bar"></i>
                <span>Reports</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="customer-report">Customer Report</Link>
                </li>
                <li>
                  <Link to="supplier-report">Supplier Report</Link>
                </li>
                <li>
                  <Link to="product-report">Product Report</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-settings"></i>
                <span>Settings</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="business-settinsgs">Business Settings</Link>
                </li>
              </ul>
            </li>

            {/* <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-settings"></i>
                <span>Layouts</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#" onClick={this.changeLayout}>
                    Vertical
                  </Link>
                </li>
                <li>
                  <Link to="#" onClick={this.changeLayoutWidth}>
                    {this.props.layoutWidth !== "fluid"
                      ? "Fluid Layout"
                      : "Boxed Layout"}
                  </Link>
                </li>

                <li>
                  <Link to="#" onClick={this.changeThemePreloader}>
                    {this.props.isPreloader === true
                      ? "Without Preloader"
                      : "Preloader"}
                  </Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const {
    is_toggle,
    leftSideBarType,
    layoutType,
    leftSideBarTheme,
    layoutWidth,
    topbarTheme,
    isPreloader,
  } = state.Layout;
  return {
    is_toggle,
    leftSideBarType,
    layoutType,
    leftSideBarTheme,
    layoutWidth,
    topbarTheme,
    isPreloader,
  };
};

export default withRouter(
  connect(mapStatetoProps, {
    toggleSidebar,
    hideRightSidebar,
    changeLayout,
    changeTopbarTheme,
    changeSidebarTheme,
    changeLayoutWidth,
    changeSidebarType,
    changePreloader,
  })(SidebarContent)
);
