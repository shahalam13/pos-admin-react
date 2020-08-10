import React, { Component } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// import apexChart
import StackedBarChart from "../AllCharts/apex/stackedbarchart";

class ChartsAppex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Bronox", link: "#" },
        { title: "Charts", link: "#" },
        { title: "Appex Chart", link: "#" },
      ],
    };
  }

  componentDidMount() {
    this.props.setBreadcrumbItems("Appex Chart", this.state.breadcrumbItems);
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs="12">
            <Card>
              <CardBody>
                <h4 className="card-title mb-4">Last 30 Days Sales</h4>

                {/* <Row className="text-center mt-4">
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">86541</h5>
                    <p className="text-muted">Activated</p>
                  </Col>
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">2541</h5>
                    <p className="text-muted">Pending</p>
                  </Col>
                  <Col sm="4">
                    <h5 className="mb-0 font-size-20">102030</h5>
                    <p className="text-muted">Deactivated</p>
                  </Col>
                </Row> */}

                <div dir="ltr">
                  <StackedBarChart />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(null, { setBreadcrumbItems })(ChartsAppex);
