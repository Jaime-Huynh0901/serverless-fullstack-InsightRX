import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchEvents } from "../../utils/actions";

const RefreshButton = ({ dispatch, reportQuery }) => {
  return (
    <Button
      type="button"
      className="ant-btn ant-btn-lg"
      onClick={() => dispatch(fetchEvents(reportQuery))}
      style={{
        backgroundColor: "#7b94b7",
        borderRadius: 5,
        marginLeft: 7,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <span style={{ color: "#ffffff" }}>REFRESH CHART</span>
    </Button>
  );
};

const mapStateToProps = (state) => {
  const { reportQuery } = state.eventsReduc;
  return {
    reportQuery: reportQuery,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ fetchEvents }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RefreshButton);
