import React from "react";
import useDropdown from "./useDropdown";
import NestedPropInput from "./NestedPropInput";
import { Form, Card, Button, Row, Col, Space, Divider } from "antd";
import styled from "styled-components";

// const layout = { labelCol: { span: 24 }, wrapperCol: { span: 32 } };
// const Content = styled.div`
//   max-width: 1080px;
//   z-index: 2;
//   width: 100%;
//   border: 1px solid #001529;
//   border-radius: 5px;
//   padding: 10px;
//   margin: 0 auto;
//   margin-top: 0;
// `;

const PropInputs = ({
  idx,
  propState,
  nestedPropState,
  handleEventPropChange,
  handleNestedPropChange,
  handleTypeSelectChange,
  handleNestedTypeSelectChange,
  removeProperty,
  removeNestedProperty,
  errorProp,
  errorNestedProp,
}) => {
  const propId = `prop-${idx}`;
  const valId = `val-${idx}`;
  const delId = `del-${idx}`;
  const typeList = ["string", "number", "object", "array", "boolean"];
  const [type, TypeOfProp] = useDropdown(
    "        ",
    "",
    typeList,
    handleTypeSelectChange,
    idx
  );

  return (
    <div>
      <div className="registerEventForm2">
        <div key={`props-${idx}`}>
          <Form layout="inline" className="registerEventForm form-group">
            <Space>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                  <Form.Item label={`Property #${idx + 1}`}>
                    <input
                      type="text"
                      name={propId}
                      data-idx={idx}
                      id={propId}
                      className="property"
                      value={propState[idx].property}
                      onChange={handleEventPropChange}
                    />
                  </Form.Item>
                </Col>
                <Col span={1} />
                <Col className="gutter-row" span={5}>
                  <Form.Item>
                    <TypeOfProp
                      handleTypeSelectChange={handleTypeSelectChange}
                    />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={6}>
                  {type !== "object" ? (
                    <Form.Item label={`Value #${idx + 1}`}>
                      <input
                        name={valId}
                        data-idx={idx}
                        id={valId}
                        className="valOfProp"
                        value={propState[idx].valOfProp}
                        onChange={handleEventPropChange}
                        type="text"
                      />
                    </Form.Item>
                  ) : null}
                </Col>
                <Col span={1} />

                <Col className="gutter-row" span={5}>
                  <Form.Item>
                    <input
                      type="button"
                      name={delId}
                      data-idx={idx}
                      id={delId}
                      className="deleteButton"
                      value="Delete"
                      onClick={removeProperty}
                    />
                  </Form.Item>
                </Col>
                {errorProp[idx].errMessage && (
                  <p>{errorProp[idx].errMessage}</p>
                )}
              </Row>
            </Space>
          </Form>
          {type === "object"
            ? nestedPropState
                .filter((arr) => arr.propNum === idx)
                .map((val) => (
                  <Form.Item>
                    <NestedPropInput
                      key={`Nestedprop-${val.index}`}
                      nestedidx={val.index}
                      nestedPropState={nestedPropState}
                      errorProp={errorProp}
                      handleTypeSelectChange={handleTypeSelectChange}
                      removeNestedProperty={removeNestedProperty}
                      handleNestedPropChange={handleNestedPropChange}
                      handleNestedTypeSelectChange={
                        handleNestedTypeSelectChange
                      }
                      errorNestedProp={errorNestedProp}
                    />
                  </Form.Item>
                ))
            : null}
        </div>
      </div>

      <Divider />
    </div>
  );
};

export default PropInputs;
