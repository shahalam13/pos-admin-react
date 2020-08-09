import React from "react";
import { Redirect } from "react-router-dom";

import Pageslogin from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Pagesregister from "../pages/Authentication/Register";
import ForgetPassword from "../pages/Authentication/ForgetPassword";
import LockScreen from "../pages/Authentication/pages-lock-screen";

//Dashboard
import Dashboard from "../pages/Dashboard/dashboard";

//user management
import UserList from "../pages/Users/users";
import AddUser from "../pages/Users/add-user";

//category management
import CategoryList from "../pages/Categories/categories";
import AddCategory from "../pages/Categories/add-category";

//product management
import ProductList from "../pages/Products/list-product";
import AddProduct from "../pages/Products/add-product";

//purchase management
import PurchaseList from "../pages/Purchase/list-purchase";
import AddPurchase from "../pages/Purchase/add-purchase";

//Sales management
import SalesList from "../pages/Sale/list-sale";
import AddSale from "../pages/Sale/add-sale";

//Stock transfer
import TransferList from "../pages/StockTransfer/list-transfer";
import AddTransfer from "../pages/StockTransfer/add-trnasfer";

//Stock adjustment
import AdjustmentList from "../pages/Adjustment/list-adjustment";
import AddAdjustment from "../pages/Adjustment/add-adjustment";

//Expense adjustment
import ExpenseList from "../pages/Expenses/list-expense";
import AddExpense from "../pages/Expenses/add-expense";

//Expense category
import ExpenseCategoryList from "../pages/ExpenseCategory/list-category";
import AddExpenseCategory from "../pages/ExpenseCategory/add-category";

//Reports
import CustomerReport from "../pages/Reports/customer-report";
import SupplierReport from "../pages/Reports/supplier-report";
import ProductReport from "../pages/Reports/product-report";

//Business Settings
import BusinessSettings from "../pages/Settings/business-settings";

//Extra Pages
import Pages404 from "../pages/Extra Pages/pages-404";
import Pages500 from "../pages/Extra Pages/pages-500";

const authProtectedRoutes = [
  // DashBoard
  { path: "/pos-admin-react/dashboard", component: Dashboard },

  //user management
  { path: "/pos-admin-react/user-list", component: UserList },
  { path: "/pos-admin-react/add-user", component: AddUser },

  //category management
  { path: "/pos-admin-react/category-list", component: CategoryList },
  { path: "/pos-admin-react/add-category", component: AddCategory },

  //product management
  { path: "/pos-admin-react/product-list", component: ProductList },
  { path: "/pos-admin-react/add-product", component: AddProduct },

  //purchase management
  { path: "/pos-admin-react/purchase-list", component: PurchaseList },
  { path: "/pos-admin-react/add-purchase", component: AddPurchase },

  //purchase management
  { path: "/pos-admin-react/sales-list", component: SalesList },
  { path: "/pos-admin-react/add-sale", component: AddSale },

  //stock transfer
  { path: "/pos-admin-react/transfer-list", component: TransferList },
  { path: "/pos-admin-react/add-transfer", component: AddTransfer },

  //stock adjustment
  { path: "/pos-admin-react/adjustment-list", component: AdjustmentList },
  { path: "/pos-admin-react/add-adjustment", component: AddAdjustment },

  //expense adjustment
  { path: "/pos-admin-react/expense-list", component: ExpenseList },
  { path: "/pos-admin-react/add-expense", component: AddExpense },

  //expense category
  {
    path: "/pos-admin-react/expense-category-list",
    component: ExpenseCategoryList,
  },
  {
    path: "/pos-admin-react/add-expense-category",
    component: AddExpenseCategory,
  },

  //reports
  { path: "/pos-admin-react/customer-report", component: CustomerReport },
  { path: "/pos-admin-react/supplier-report", component: SupplierReport },
  { path: "/pos-admin-react/product-report", component: ProductReport },

  //busness stiitngs
  { path: "/pos-admin-react/business-settinsgs", component: BusinessSettings },

  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/pos-admin-react/dashboard" />,
  },
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Pageslogin },
  { path: "/register", component: Pagesregister },
  { path: "/forget-password", component: ForgetPassword },
  { path: "/pages-lock-screen", component: LockScreen },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },
];

export { authProtectedRoutes, publicRoutes };
