import React, { Component } from "react";
import { Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
  changeLayout,
  changeLayoutWidth,
  changePreloader,
} from "../../../store/actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserManagement: false,
      isProduct: false,
      isPurchase: false,
      isSale: false,
      isExpense: false,
      isAdjustment: false,
      isBusiness: false,
      isTransfer: false,
      isReports: false,
      isLayouts: false,
      layoutType: this.props.layoutType,
      layoutWidth: this.props.layoutWidth,
      isPreloader: this.props.isPreloader,
    };
    this.changeLayout = this.changeLayout.bind(this);
    this.changeLayoutWidth = this.changeLayoutWidth.bind(this);
    this.changeThemePreloader = this.changeThemePreloader.bind(this);
  }

  changeLayout() {
    this.props.changeLayout("vertical");
  }

  //change layout width
  changeLayoutWidth(value) {
    if (this.state.layoutWidth === "boxed")
      this.props.changeLayoutWidth("fluid", this.state.layoutType);
    else this.props.changeLayoutWidth("boxed", this.state.layoutType);
  }

  //theme preloader
  changeThemePreloader = (value) => {
    this.props.changePreloader(!this.props.isPreloader);
  };

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
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

  //update local state after changing layout
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        layoutType: this.props.layoutType,
        layoutWidth: this.props.layoutWidth,
        isPreloader: this.props.isPreloader,
      });
    }

    if (this.props.leftSideBarType !== prevProps.leftSideBarType) {
      this.initMenu();
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="topnav">
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      <i className="ti-dashboard"></i>Dashboard
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                          isUserManagement: !this.state.isUserManagement,
                        });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-email"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                    >
                      <i className="ti-user"></i>User Management
                    </Link>
                    <div
                      className={
                        this.state.isUserManagement
                          ? "dropdown-menu dropdown-menu-left show"
                          : "dropdown-menu dropdown-menu-left"
                      }
                      aria-labelledby="topnav-email"
                    >
                      <Link to="add-user" className="dropdown-item">
                        Add User
                      </Link>
                      <Link to="user-list" className="dropdown-item">
                        List User
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ isProduct: !this.state.isProduct });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-components"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                    >
                      <i className="ti-package"></i>Products
                    </Link>

                    <div
                      className={
                        this.state.isProduct
                          ? "dropdown-menu dropdown-menu-left show"
                          : "dropdown-menu dropdown-menu-left"
                      }
                      aria-labelledby="topnav-components"
                    >
                      <div className="row">
                        <div className="col-lg-4">
                          <div>
                            <Link to="category-list" className="dropdown-item">
                              List Category
                            </Link>
                            <Link to="add-category" className="dropdown-item">
                              Add Category
                            </Link>
                            <Link to="product-list" className="dropdown-item">
                              List Products
                            </Link>
                            <Link to="add-product" className="dropdown-item">
                              Add Product
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ isPurchase: !this.state.isPurchase });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-forms"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                    >
                      <i className="ti-arrow-down"></i>Purchase
                    </Link>
                    <div
                      className={
                        this.state.isPurchase
                          ? "dropdown-menu dropdown-menu-left show"
                          : "dropdown-menu dropdown-menu-left"
                      }
                      aria-labelledby="topnav-forms"
                    >
                      <Link to="purchase-list" className="dropdown-item">
                        List Purchase
                      </Link>
                      <Link to="add-purchase" className="dropdown-item">
                        Add Purchase
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ isSale: !this.state.isSale });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-more"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                    >
                      <i className="ti-arrow-up"></i>Sell
                    </Link>
                    <div
                      className={
                        this.state.isSale
                          ? "dropdown-menu show"
                          : "dropdown-menu"
                      }
                      aria-labelledby="topnav-more"
                    >
                      <Link to="sales-list" className="dropdown-item">
                        All Sales
                      </Link>
                      <Link to="add-sale" className="dropdown-item">
                        Add Sales
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ isTransfer: !this.state.isTransfer });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-charts"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti-truck"></i>Stock Trnasfer
                    </Link>
                    <div
                      className={
                        this.state.isTransfer
                          ? "dropdown-menu dropdown-menu-left show"
                          : "dropdown-menu dropdown-menu-left"
                      }
                      aria-labelledby="topnav-charts"
                    >
                      <Link to="transfer-list" className="dropdown-item">
                        List Stock Transfer
                      </Link>
                      <Link to="add-transfer" className="dropdown-item">
                        Add Stock Transfer
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                          isAdjustment: !this.state.isAdjustment,
                        });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-pages"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti-panel"></i>Stock Adjustment
                    </Link>

                    <div
                      className={
                        this.state.isAdjustment
                          ? "dropdown-menu dropdown-menu-left show"
                          : "dropdown-menu dropdown-menu-left"
                      }
                      aria-labelledby="topnav-pages"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            <Link
                              to="adjustment-list"
                              className="dropdown-item"
                            >
                              List Stock Adjustment
                            </Link>
                            <Link to="add-adjustment" className="dropdown-item">
                              Add Stock Adjustment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ isExpense: !this.state.isExpense });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-pages"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti-minus"></i>Expenses
                    </Link>

                    <div
                      className={
                        this.state.isExpense
                          ? "dropdown-menu dropdown-menu-left show"
                          : "dropdown-menu dropdown-menu-left"
                      }
                      aria-labelledby="topnav-pages"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            <Link to="expense-list" className="dropdown-item">
                              List Expense
                            </Link>
                            <Link to="add-expense" className="dropdown-item">
                              Add Expense
                            </Link>
                            <Link
                              to="expense-category-list"
                              className="dropdown-item"
                            >
                              List Expense Category
                            </Link>
                            <Link
                              to="add-expense-category"
                              className="dropdown-item"
                            >
                              Add Expense Category
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ isReports: !this.state.isReports });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-pages"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti-bar-chart"></i>Reports
                    </Link>

                    <div
                      className={
                        this.state.isReports
                          ? "dropdown-menu dropdown-menu-left show"
                          : "dropdown-menu dropdown-menu-left"
                      }
                      aria-labelledby="topnav-pages"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            <Link
                              to="customer-report"
                              className="dropdown-item"
                            >
                              Customer Report
                            </Link>
                            <Link
                              to="supplier-report"
                              className="dropdown-item"
                            >
                              Supplier Report
                            </Link>
                            <Link to="product-report" className="dropdown-item">
                              Product Report
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ isBusiness: !this.state.isBusiness });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-pages"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti-settings"></i>Settings
                    </Link>

                    <div
                      className={
                        this.state.isBusiness
                          ? "dropdown-menu dropdown-menu-left show"
                          : "dropdown-menu dropdown-menu-left"
                      }
                      aria-labelledby="topnav-pages"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div>
                            <Link
                              to="business-settinsgs"
                              className="dropdown-item"
                            >
                              Business Settings
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ isLayouts: !this.state.isLayouts });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-pages"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti-tablet"></i>Layouts
                    </Link>
                    <div
                      className={
                        this.state.isLayouts
                          ? "dropdown-menu dropdown-menu-right show "
                          : "dropdown-menu dropdown-menu-right"
                      }
                      aria-labelledby="topnav-layouts"
                    >
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item"
                          onClick={this.changeLayout}
                        >
                          Vertical
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className={
                            this.props.layoutWidth === "boxed"
                              ? "dropdown-item active"
                              : "dropdown-item"
                          }
                          onClick={this.changeLayoutWidth}
                        >
                          {this.props.layoutWidth !== "fluid"
                            ? "Fluid Layout"
                            : "Boxed Layout"}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item"
                          onClick={this.changeThemePreloader}
                        >
                          {this.props.isPreloader === true
                            ? "Without Preloader"
                            : "Preloader"}
                        </Link>
                      </li>
                    </div>
                  </li> */}
                </ul>
              </Collapse>
            </nav>
          </div>
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
    changeLayout,
    changeLayoutWidth,
    changePreloader,
  })(Navbar)
);
