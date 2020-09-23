// Import React components
import React, {Component} from "react";
// Import Redux components
import { connect } from 'react-redux';
// Import Ant components
import { Table, Row } from 'antd';
import styled from 'styled-components';

import {setFilteredEvents } from "../../utils/actions";
import {bindActionCreators} from 'redux';

const layout = { labelCol: { span: 32 }, wrapperCol: { span: 64 } };
const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 960px;
  padding: 10px;
  margin-top: 0;
  margin-left: -10px;
  margin-right: -10px;
`;


class RenderTable extends Component {
  constructor(props) {
    super(props);
  } 

 
  columns = () => {
  const title = Object.getOwnPropertyNames(this.props.registeredEvents[0]);
  const dataIndex = title;
  const key = dataIndex;
  
    const columnData = [];
      for (let i=0; i<title.length; i++) {
        const obj = {};
        obj.title = title[i] 
        obj.dataIndex = dataIndex[i]
        obj.key = key[i]
        columnData.push(obj)
     }
      return columnData; 
    }

    data = () => {
      const initialDataSet = this.props.registeredEvents.map((data, index) => ({
        ...data, typeDefinition: JSON.stringify(data.typeDefinition), key: index}))

      if (this.props.selectedSources.length === 0 || this.props.selectedSources[0] === "All Sources" ){
          return initialDataSet
      } else {
        const filteredDataSet = initialDataSet.filter(obj => this.props.selectedSources.includes(obj.source) )
            return filteredDataSet
      }
      }


      componentDidUpdate = ()=>{
        const { dispatch } = this.props;
        dispatch(setFilteredEvents(this.data()));
      }
      
    render() {
      
    if (this.props.registeredEvents.length> 0){
     return (

        <Row type="flex" align="middle" justify="center" className="bg-primary">
        <Content>
          <div>
        <Table {...layout}
          columns={this.columns(this.props.registeredEvents)} 
          dataSource={this.data(this.props.registeredEvents)}
          bordered
          title={() => <h3 style={{color: "#007bff"}}>List of Registered Events for Selected Source</h3>}
          footer={() => <h5 style={{color: "#007bff"}}>Insight RX Hero</h5>} />
          </div>
        </Content>
        </Row>
      )
    } else {
      return (
      <Table 
        columns={[{title: "Table", dataIndex: "table", key: "table"}]} 
        dataSource={[{key: 0, table: "no data"}]} />
    ) 
  }
}
}
const mapStateToProps = state => {
    const { registeredEvents, selectedSources } = state.eventsReduc;
    return {
      registeredEvents: registeredEvents,
      selectedSources: selectedSources
    };
  }

 const mapDispatchToProps = (dispatch) => {
    return {
      dispatch,
      ...bindActionCreators({setFilteredEvents}, dispatch)
  
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(RenderTable);