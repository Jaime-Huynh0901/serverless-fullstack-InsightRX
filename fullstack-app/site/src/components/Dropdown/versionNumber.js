// Import React components
import React from "react";
import { Select } from 'antd';
// Import Redux components
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { setVersionNumber } from '../../utils/actions';

const { Option } = Select;

const SelectDropdown = ({ dispatch, registeredEvents, selectedEventType, selectedSources }) => { 

    const FilteredEventTypes = registeredEvents.filter(obj => selectedSources.includes(obj.source) && selectedEventType.includes(obj.typeName));

    const versionNumber = [...new Set(([...FilteredEventTypes.map(obj => obj.versionNumber)]))];

    const customMenu = () => {
        const dropdownSources = versionNumber.map(source => {
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
            defaultValue={"All Version Numbers"} 
            onChange={(e) => {
              dispatch(setVersionNumber(e))
            }} 
            optionLabelProp="label"
            >
            {customMenu()}
        </Select>
    )
  } 

const mapStateToProps = state => {
    const { registeredEvents, selectedSources, selectedEventType } = state.eventsReduc;
    return {
      registeredEvents: registeredEvents,
      selectedSources: selectedSources,
      selectedEventType: selectedEventType
    };
  }

const mapDispatchToProps = dispatch => {
    return {
      dispatch,
      ...bindActionCreators({setVersionNumber}, dispatch)
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SelectDropdown);