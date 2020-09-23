// Import React components
import React from "react";
import { Select } from 'antd';
// Import Redux components
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { setEventType, setSelectedEventType } from '../../utils/actions';

const { Option } = Select;

const SelectDropdown = ({ dispatch, registeredEvents, selectedSources}) => { 


    const FilteredEventTypes = registeredEvents.filter(obj => selectedSources.includes(obj.source));

    const eventTypes = [...new Set(([...FilteredEventTypes.map(obj => obj.typeName)]))];

    const customMenu = () => {
        const dropdownSources = eventTypes.map(source => {
        return (
        <Option 
            value={source} 
            key={source} 
            label={source}>
            <div>{source}</div>
        </Option>
        )})
       return dropdownSources;
    }
    return (
        <Select 
            mode="multiple" 
            placeholder="source" 
            defaultValue={"All Event Types"} 
            onChange={(e) => {
              dispatch(setEventType(e))
              dispatch(setSelectedEventType(e))
            }} 
            optionLabelProp="label"
            >
            {customMenu()}
        </Select>
    )
  } 

const mapStateToProps = state => {
    const { registeredEvents, selectedSources, } = state.eventsReduc;
    return {
      registeredEvents: registeredEvents,
      selectedSources: selectedSources
    };
  }

const mapDispatchToProps = dispatch => {
    return {
      dispatch,
      ...bindActionCreators({setEventType, setSelectedEventType}, dispatch)
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SelectDropdown);