// Import React components
import React from "react";
import { Select } from "antd";
// Import Redux components
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSourceName, setSelectedSources } from "../../utils/actions";

const { Option } = Select;

const SelectDropdown = ({ dispatch, sources }) => {
  try {
    const sourceOptions = [...sources.map((obj) => obj.eventSource)];

    const customMenu = () => {
      const dropdownSources = sourceOptions.map((source) => {
        return (
          <Option value={source} key={source} label={source}>
            <div>{source}</div>
          </Option>
        );
      });
      return dropdownSources;
    };
    return (
      <Select
        mode="multiple"
        style={{ width: "100%", marginRight: -10 }}
        placeholder="Select Source"
        // defaultValue={"Select Source"}
        defaultActiveFirstOption={true}
        allowClear={true}
        onDeselect={() => {
          dispatch(setSelectedSources(["All Sources"]));
        }}
        onChange={(e) => {
          dispatch(setSourceName(e));
          dispatch(setSelectedSources(e));
        }}
        optionLabelProp="label"
      >
        {customMenu()}
      </Select>
    );
  } catch {
    return (
      <Select
        mode="multiple"
        style={{ width: "100%", marginRight: -10 }}
        placeholder="source"
        defaultValue={"No Sources"}
        onChange={(e) => {
          dispatch(setSourceName(e));
          dispatch(setSelectedSources(e));
        }}
        optionLabelProp="label"
      ></Select>
    );
  }
};

const mapStateToProps = (state) => {
  const { sources } = state.eventsReduc;
  return {
    sources: sources,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ setSourceName, setSelectedSources }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectDropdown);
