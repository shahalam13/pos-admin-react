import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Components
import MiniCard from "./mini-card";
import MonthlyEarnings from "./montly-earnings";
import EmailSent from "./email-sent";
import MonthlyEarnings2 from "./montly-earnings2";
import LineChart from "./bar-chart";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Bronox", link: "#" },
        { title: "Dashboard", link: "#" },
        { title: "Dashboard", link: "#" },
      ],
      reports: [
        {
          title: "Orders",
          icon: "mdi-cube-outline",
          result: "+11%",
          value: "1,587",
          desc: "From previous period",
          color: "info",
        },
        {
          title: "Revenue",
          icon: "mdi-buffer",
          result: "-29%",
          value: "$46,782",
          desc: "From previous period",
          color: "danger",
        },
        {
          title: "Total Expenses",
          icon: "mdi-minus",
          result: "0%",
          value: "$1500.9",
          desc: "From previous period",
          color: "warning",
        },
        {
          title: "Product Sold",
          icon: "mdi-briefcase-check",
          result: "+89%",
          value: "1890",
          desc: "From previous period",
          color: "info",
        },
      ],
    };
  }

  componentDidMount() {
    this.props.setBreadcrumbItems("Dashboard", this.state.breadcrumbItems);
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <MiniCard reports={this.state.reports} />
        </Row>

        <Row>
          <Col xl="3">
            {/* Monthly Earnings */}
            <MonthlyEarnings />
          </Col>

          <Col xl="6">
            {/* Email sent */}
            <EmailSent />
          </Col>

          <Col xl="3">
            <MonthlyEarnings2 />
          </Col>
        </Row>

        <Row>
          <Col xl="12">
            <LineChart />
          </Col>
        </Row>

        {/* <Row>
                        <Col xl="4" lg="6">
                            <Inbox/>
                        </Col>
                        <Col xl="4" lg="6">
                            <RecentActivity/>

                        </Col>
                        <Col xl="4">
                            <WidgetUser/>

                            <YearlySales/>
                        </Col>
                    </Row> */}

        {/* <Row>
                        <Col xl="6">
                            <LatestTransactions/>
                        </Col>

                        <Col xl="6">
                            <LatestOrders/>
                        </Col>
                    </Row> */}
      </React.Fragment>
    );
  }
}

export default connect(null, { setBreadcrumbItems })(Dashboard);
