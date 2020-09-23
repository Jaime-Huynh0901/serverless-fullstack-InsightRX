// Import React components
import React from "react";
// Import Redux components
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { setStartDate, setEndDate} from '../../utils/actions';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;


const DateSelector = ({dispatch}) => { 

  return (
  <Space direction="vertical" size={12}>
    <RangePicker
      ranges={{
        'Last 24 Hours': [moment().subtract(24, 'hours'), moment()],
        'Last 30 Days': [moment().subtract(30, 'days'),moment()],
        'Last 12 Months': [moment().subtract(12, 'months'), moment()]
      }}
      onChange={(dates, dateString) => {
        try{
        dispatch(setStartDate(dates[0].utc().format().toString().slice(0, -1)));
        dispatch(setEndDate(dates[1].utc().format().toString().slice(0, -1)));
        } catch {
          return
        }
      }}
    />
  </Space>
  )
};

const mapStateToProps = state => {
  const {"start-date": startDate, "end-date": endDate} =  state.eventsReduc.query
  return {
    startDate,
    endDate
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators({setStartDate, setEndDate}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);