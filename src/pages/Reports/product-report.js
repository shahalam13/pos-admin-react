import React, { Component } from "react";
import { Col, Row, Card, CardBody, FormGroup, Label } from "reactstrap";
import FilterBox from "../../component/Common/filterBox";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// import { Link, withRouter } from "react-router-dom";

import { MDBDataTable } from "mdbreact";

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

  filterContent = () => {
    return (
      <Row>
        <Col lg="4">
          <FormGroup>
            <Label>Select Product</Label>
            <div>
              <select className="form-control">
                <option>Select</option>
                <option>Fan</option>
                <option>Lamp</option>
              </select>
            </div>
          </FormGroup>
        </Col>
        <Col lg="4">
          <FormGroup>
            <Label>Select Brand</Label>
            <div>
              <select className="form-control">
                <option>Select</option>
                <option>Asus</option>
                <option>Dell</option>
              </select>
            </div>
          </FormGroup>
        </Col>
        <Col lg="4">
          <FormGroup>
            <Label>Select Category</Label>
            <div>
              <select className="form-control">
                <option>Select</option>
                <option>Electronics</option>
                <option>Furniture</option>
              </select>
            </div>
          </FormGroup>
        </Col>
      </Row>
    );
  };

  render() {
    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 50,
        },
        {
          label: "Total Sale",
          field: "total_sale",
          sort: "asc",
          width: 50,
        },
        {
          label: "Sale Return",
          field: "sale_reutrn",
          sort: "asc",
          width: 50,
        },
        {
          label: "Total Purchase",
          field: "total_purchase",
          sort: "asc",
          width: 50,
        },
        {
          label: "Purchase Return",
          field: "purchase_reutrn",
          sort: "asc",
          width: 50,
        },
        {
          label: "Stock",
          field: "stock",
          sort: "asc",
          width: 50,
        },
        {
          label: "Damage",
          field: "damage",
          sort: "asc",
          width: 50,
        },
        {
          label: "Stock In",
          field: "stock_in",
          sort: "asc",
          width: 50,
        },
        {
          label: "Stock Out",
          field: "stock_out",
          sort: "asc",
          width: 50,
        },
      ],
      rows: [
        {
          name: "Lamp",
          total_sale: "50,000",
          sale_reutrn: "13,500",
          total_purchase: "40,500",
          purchase_reutrn: "2000",
          stock: "400 pc",
          damage: "60 pc",
          stock_in: "00 pc",
          stock_out: "00 pc",
        },
        {
          name: "Fan",
          total_sale: "30,000",
          sale_reutrn: "1,500",
          total_purchase: "90,500",
          purchase_reutrn: "00",
          stock: "900 pc",
          damage: "00 pc",
          stock_in: "100 pc",
          stock_out: "00 pc",
        },
      ],
    };
    return (
      <React.Fragment>
        <Row>
          <FilterBox filterContent={this.filterContent} />
          <Col xs="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between">
                  <h4 className="card-title">Product Report</h4>
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
