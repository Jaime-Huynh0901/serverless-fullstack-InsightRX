import React from "react";
import useDropdown from "./useDropdown";
import NestedPropInput from "./NestedPropInput";
import { Form, Input, Button, Row, Col, Space } from "antd";

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
}) => {
  const propId = `prop-${idx}`;
  const valId = `val-${idx}`;
  const delId = `del-${idx}`;
  const typeList = ["string", "number", "object", "array", "boolean"];
  const [type, TypeOfProp] = useDropdown(
    "",
    "",
    typeList,
    handleTypeSelectChange,
    idx
  );

  return (
    <div className="registerEventForm2">
      <div key={`prop-${idx}`}>
        <div>
          <Form layout="inline" className="registerEventForm form-group">
            <Space>
              <Row gutter={[24, 16]}>
                <Col span={6}>
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
                <Col span={5}>
                  <Form.Item label={`Prop Type`}>
                    <TypeOfProp
                      handleTypeSelectChange={handleTypeSelectChange}
                      required
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
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

                <Col span={6}>
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
                      key={`prop-${val.index}`}
                      nestedidx={val.index}
                      nestedPropState={nestedPropState}
                      errorProp={errorProp}
                      handleTypeSelectChange={handleTypeSelectChange}
                      removeNestedProperty={removeNestedProperty}
                      handleNestedPropChange={handleNestedPropChange}
                      handleNestedTypeSelectChange={
                        handleNestedTypeSelectChange
                      }
                    />
                  </Form.Item>
                ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default PropInputs;
