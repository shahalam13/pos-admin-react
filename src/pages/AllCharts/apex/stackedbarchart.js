import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class stackedbarchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ["#7A6FBE", "#F0F1F4"],
        chart: {
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            columnWidth: "40%",
          },
        },
        grid: {
          borderColor: "#f8f8fa",
          row: {
            colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },

        xaxis: {
          categories: [],
          labels: {
            formatter: function (val) {
              return val;
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
        fill: {
          opacity: 1,
        },

        legend: {
          show: false,
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
      series: [
        {
          name: "Sales",
          data: [
            45,
            75,
            100,
            75,
            100,
            75,
            50,
            75,
            50,
            75,
            100,
            80,
            78,
            98,
            34,
            35,
            23,
            23,
            23,
            34,
            90,
            98,
            89,
            76,
            54,
            34,
            23,
            14,
            12,
            34,
          ],
        },
      ],
    };
  }

  formatDate(date) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var dd = date.getDate();
    var mm = monthNames[date.getMonth()];
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = dd + " " + mm + " " + yyyy;
    return date;
  }

  LastThirtyDays() {
    var result = [];
    for (var i = 0; i < 30; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push(this.formatDate(d));
    }

    this.setState({
      options: {
        ...this.state.options,
        xaxis: {
          ...this.state.options.xaxis,
          categories: result,
        },
      },
    });
  }

  componentDidMount() {
    this.LastThirtyDays();
  }

  render() {
    return (
      <React.Fragment>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="290"
        />
      </React.Fragment>
    );
  }
}

export default stackedbarchart;
