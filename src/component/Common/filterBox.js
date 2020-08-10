import React, { Component } from "react";
import { Col, Card, CardBody, Button } from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class FilterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowFilerContent: false,
      breadcrumbItems: [
        { title: "Bronox", link: "#" },
        { title: "Tables", link: "#" },
        { title: "Data Table", link: "#" },
      ],
    };
  }

  isOpenFilter = (value) => {};

  render() {
    return (
      <React.Fragment>
        <Col lg="12">
          <Card>
            <h4
              className="card-header font-16 mt-0"
              style={{ cursor: "pointer" }}
              onClick={() =>
                this.setState({
                  isShowFilerContent: !this.state.isShowFilerContent,
                })
              }
            >
              <i className="ti-filter"></i>
              Filters
            </h4>
            {this.state.isShowFilerContent ? (
              <CardBody>
                {this.props.filterContent()}
                <Col lg="12" className="d-flex justify-content-end">
                  <Button
                    type="submit"
                    color="primary"
                    className="waves-effect waves-light mr-1"
                  >
                    Apply Filter
                  </Button>
                </Col>
              </CardBody>
            ) : null}
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default connect(null, { setBreadcrumbItems })(FilterBox);
