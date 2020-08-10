import React, { Component } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// import { Link, withRouter } from "react-router-dom";

import { MDBDataTable } from "mdbreact";

import { Link } from "react-router-dom";

//Import datatable css
import "../Tables/datatables.scss";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Bronox", link: "#" },
        { title: "Tables", link: "#" },
        { title: "Data Table", link: "#" },
      ],
    };
  }

  componentDidMount() {
    this.props.setBreadcrumbItems("Dashboard", this.state.breadcrumbItems);
  }

  render() {
    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 100,
        },
        {
          label: "Code",
          field: "code",
          sort: "asc",
          width: 50,
        },
        {
          label: "Category",
          field: "category",
          sort: "asc",
          width: 100,
        },
        {
          label: "Brand",
          field: "brand",
          sort: "asc",
          width: 100,
        },
        {
          label: "Purchase price",
          field: "p_price",
          sort: "asc",
          width: 50,
        },
        {
          label: "Selling price",
          field: "sale_price",
          sort: "asc",
          width: 50,
        },
        {
          label: "Current Stock",
          field: "current_stock",
          sort: "asc",
          width: 50,
        },
        {
          label: "Action",
          field: "action",
          sort: "asc",
          width: 50,
        },
      ],
      rows: [
        {
          name: "Oppo F1S",
          code: "O123",
          category: "Phone",
          brand: "Oppo",
          p_price: "13,500",
          sale_price: "15,000",
          current_stock: "49",
          action: (
            <span>
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-eye"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-pencil"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-delete"
              ></i>
            </span>
          ),
        },
        {
          name: "Sony Z",
          code: "S123",
          category: "Phone",
          brand: "Sony",
          p_price: "14,500",
          sale_price: "16,000",
          current_stock: "80",
          action: (
            <span>
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-eye"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-pencil"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-delete"
              ></i>
            </span>
          ),
        },
        {
          name: "Dell Latitude E5540",
          code: "D123",
          category: "Laptop",
          brand: "Dell",
          p_price: "50,500",
          sale_price: "53,490",
          current_stock: "12",
          action: (
            <span>
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-eye"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-pencil"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-delete"
              ></i>
            </span>
          ),
        },
      ],
    };
    return (
      <React.Fragment>
        <Row>
          <Col xs="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between">
                  <h4 className="card-title">All Products</h4>

                  <Link
                    type="button"
                    to="add-product"
                    className="waves-effect waves-light btn btn-primary"
                  >
                    Add Product
                  </Link>
                </div>
                <MDBDataTable responsive bordered striped data={data} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(null, { setBreadcrumbItems })(ProductList);
