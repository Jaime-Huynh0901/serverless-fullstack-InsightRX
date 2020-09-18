import React from "react";
import useDropdown from "./useDropdown.jsx";
import { Form, Input, Button, Row, Col, Space } from "antd";

const NestedPropInput = ({
  nestedidx,
  nestedPropState,
  handleNestedTypeSelectChange,
  removeNestedProperty,
  handleNestedPropChange,
  errorNestedProp,
}) => {
  const nestedPropId = `nestedprop-${nestedidx}`;
  const nestedvalId = `nestedval-${nestedidx}`;
  const delId = `nesteddel-${nestedidx}`;
  const typeList = ["string", "number", "array", "boolean"];

  const [nestedType, TypeOfNestedProp] = useDropdown(
    "",
    "",
    typeList,
    handleNestedTypeSelectChange,
    nestedidx
  );

  return (
    <div className="registerEventForm2">
      <div key={`nestedprop-${nestedidx}`}>
        <div>
          <Form layout="inline" className="registerEventForm form-group">
            <Space>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={1} />
                <Col span={5}>
                  <Form.Item label={`NestedProperty #${nestedidx + 1}`}>
                    <input
                      type="text"
                      name={nestedPropId}
                      data-idx={nestedidx}
                      id={nestedPropId}
                      className="property"
                      value={nestedPropState[nestedidx].property}
                      onChange={handleNestedPropChange}
                    />
                  </Form.Item>
                </Col>
                <Col span={1} />
                <Col span={5}>
                  <Form.Item>
                    <TypeOfNestedProp
                      handleNestedTypeSelectChange={
                        handleNestedTypeSelectChange
                      }
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label={`NestedValue #${nestedidx + 1}`}>
                    <input
                      name={nestedvalId}
                      data-idx={nestedidx}
                      id={nestedvalId}
                      className="valOfProp"
                      value={nestedPropState[nestedidx].valOfProp}
                      onChange={handleNestedPropChange}
                      type="text"
                    />
                  </Form.Item>
                </Col>
                <Col span={1} />
                <Col span={5}>
                  <Form.Item>
                    <input
                      type="button"
                      name={delId}
                      data-idx={nestedidx}
                      id={delId}
                      className="deleteButton"
                      value="Delete"
                      onClick={removeNestedProperty}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Space>
          </Form>
          {errorNestedProp[nestedidx].errMessage && (
            <p>{errorNestedProp[nestedidx].errMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NestedPropInput;
