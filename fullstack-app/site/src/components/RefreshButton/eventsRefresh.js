import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDatedEvents } from '../../utils/actions';

  const RefreshButton = ({ dispatch, query}) => {
    
    return (
        <Button type="button" className="ant-btn ant-btn-lg"
            onClick={() => dispatch(fetchDatedEvents(query))}
            style={{ backgroundColor: '#7b94b7', borderRadius: 5, marginLeft: 7, paddingLeft: 10, paddingRight: 10 }}>
            <span style={{ color: '#ffffff' }}>REFRESH CHART</span>
        </Button>
    )
  };
  
  const mapStateToProps = state => {
    const { query } = state.eventsReduc;
    return {
      query: query
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
      dispatch,
      ...bindActionCreators({fetchDatedEvents}, dispatch)
  
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(RefreshButton);