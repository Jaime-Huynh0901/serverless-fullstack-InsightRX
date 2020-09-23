import React, { Component } from "react";

// Import Presentational components
import SelectDropdown from "../Dropdown/event";
import SelectDropdownVersionNumber from "../Dropdown/versionNumber";
import SelectDropdownSource from "../Dropdown";
import Table from "../Table2";
import DateSelector from "../DateSelector";
import Linechart from "../Charts/Linechart";
import Count from "../Count";
import CsvDownload from "react-json-to-csv"; // download json table into a csv report

// Import Redux components
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchDatedEvents,
  fetchEvents,
  fetchRegisteredEvents,
  fetchSources,
} from "../../utils/actions";
import { Link } from "react-router-dom";

import { Layout, Breadcrumb, Row, Col, Button } from "antd";
import "./Overview.css";
/**
 * This component's responsibility is to display the data that it receives from its parent. If a component
 * does not need to manage state, it's good practice to just make it a plain function like this.
 */

class Events extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
  };

  /**
   * This component's responsibility is to display the data that it receives from its parent. If a component
   * does not need to manage state, it's good practice to just make it a plain function like this.
   */

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Layout className="overview">
            <Row style={{ marginBottom: 10 }}>
              <Col span={24}>
                <Breadcrumb>
                  <h4>
                    <Breadcrumb.Item>
                      <Link to="/">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <Link to="/Events">Events</Link>
                    </Breadcrumb.Item>
                  </h4>
                </Breadcrumb>
              </Col>
            </Row>

            <Row style={{ marginBottom: 20 }}>
              <div className="antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6">
                <div
                  className="antd-card ant-card mb-4 ant-card-bordered"
                  style={{
                    backgroundColor: "#007bff",
                    borderRadius: 5,
                    minHeight: 144,
                  }}
                >
                  <div className="ant-card-body">
                    <div className="ant-row-flex ant-row-flex-start ant-row-flex-middle">
                      <div className="ant-col">
                        <h4 className="text-white">Source</h4>
                        <h3 className="text-white">
                          <SelectDropdownSource />
                        </h3>
                      </div>
                      <span className="mr-auto"></span>
                      <div className="ant-col"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6">
                <div
                  className="antd-card ant-card mb-4 ant-card-bordered"
                  style={{
                    backgroundColor: "#0000f5",
                    borderRadius: 5,
                    minHeight: 144,
                  }}
                >
                  <div className="ant-card-body">
                    <div className="ant-row-flex ant-row-flex-start ant-row-flex-middle">
                      <div className="ant-col">
                        <h4 className="text-white">Event Type</h4>
                        <h3 className="text-white">
                          <SelectDropdown />
                        </h3>
                      </div>
                      <span className="mr-auto"></span>
                      <div className="ant-col"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6">
                <div
                  className="antd-card ant-card mb-4 ant-card-bordered"
                  style={{
                    backgroundColor: "#faad14",
                    borderRadius: 5,
                    minHeight: 144,
                  }}
                >
                  <div className="ant-card-body">
                    <div className="ant-row-flex ant-row-flex-start ant-row-flex-middle">
                      <div className="ant-col">
                        <h4 className="text-white">Version Number</h4>
                        <h3 className="text-white">
                          <SelectDropdownVersionNumber />
                        </h3>
                      </div>
                      <span className="mr-auto"></span>
                      <div className="ant-col"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="antd-col ant-col ant-col-xs-24 ant-col-sm-12 ant-col-md-6">
                <div
                  className="antd-card ant-card mb-4 ant-card-bordered"
                  style={{
                    backgroundColor: "#f5222d",
                    borderRadius: 5,
                    minHeight: 144,
                  }}
                >
                  <div className="ant-card-body">
                    <div className="ant-row-flex ant-row-flex-start ant-row-flex-middle">
                      <div className="ant-col">
                        <h4 className="text-white">Date Range</h4>
                        <h3 className="text-white">
                          <DateSelector />
                        </h3>
                      </div>
                      <span className="mr-auto"></span>
                      <div className="ant-col"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>

            <Row>
              <Col span={24}>
                <div>
                  <CsvDownload
                    data={this.props.eventsWithDates}
                    filename="report_data.csv"
                    style={{ border: 0 }}
                  >
                    <Button
                      type="button"
                      className="ant-btn ant-btn-primary ant-btn-lg"
                      style={{ paddingTop: -10 }}
                    >
                      <i
                        aria-label="icon: download"
                        className="anticon anticon-download"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          className=""
                          data-icon="download"
                          width="2em"
                          height="2em"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="true"
                        >
                          <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                      </i>
                      <span>Download</span>
                    </Button>
                  </CsvDownload>
                </div>
              </Col>
            </Row>

            <Row
              style={{ width: "100%", padding: 0, margin: 0, marginTop: 20 }}
            >
              <Col span={24}>
                <Table />
              </Col>
            </Row>

            <Row
              type="flex"
              align="middle"
              justify="center"
              className="linechart-events bg-error"
            >
              <Col span={24}>
                <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 barchart">
                  <div className="ant-card mb-24 ant-card-bordered">
                    <div className="ant-card-head">
                      <div className="ant-card-head-wrapper">
                        <div className="ant-card-head-title">
                          <h4 style={{ color: "#f5222d" }}>Events Over Time</h4>
                        </div>
                      </div>
                    </div>
                    <div className="ant-card-body">
                      <Linechart />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Layout>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    eventsWithDates,
    query,
    registeredEvents,
    sources,
    events,
    eventsReport,
    filteredEvents,
    selectedSources,
  } = state.eventsReduc;
  return {
    query: query,
    registeredEvents: registeredEvents,
    sources: sources,
    eventsWithDates: eventsWithDates,
    eventsReport: eventsReport,
    events: events,
    filteredEvents: filteredEvents,
    selectedSources: selectedSources,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(
      { fetchDatedEvents, fetchEvents, fetchRegisteredEvents, fetchSources },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
