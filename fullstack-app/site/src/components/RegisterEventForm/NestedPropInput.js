import React from "react";
import useDropdown from "./useDropdown.jsx";
import { Form, Row, Col } from "antd";
import styled from "styled-components";
import "./RegisterEventForm.css";

const layout = { labelCol: { span: 24 }, wrapperCol: { span: 32 } };
const Content = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  align: middle;
  padding: 20px;
`;

const NestedPropInput = ({
  idx,
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
    <Content>
      <Form {...layout} layout="horizontal" className="form-group">
        <div key={`nestedprop-${nestedidx}`}>
          <Row
            type="flex"
            align="middle"
            justify="center"
            className="px-3 bg-white mh-page textCenter"
          >
            <Col span={6}>
              <Form.Item
                label={`Nested-Property #${idx + 1}.${nestedidx}`}
              ></Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Type of Prop"></Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label={`Nested-Value #${idx + 1}.${nestedidx}`}
              ></Form.Item>
            </Col>
            <Col span={6}>
              <span>{/* No Text Here */}</span>
            </Col>
          </Row>

          <Row
            type="flex"
            align="top"
            justify="center"
            className="px-3 bg-white mh-page textCenter"
            style={{ margin: 20, padding: 0 }}
          >
            <Col span={6}>
              <Form.Item>
                <input
                  type="text"
                  name={nestedPropId}
                  data-idx={nestedidx}
                  id={nestedPropId}
                  className="property"
                  value={nestedPropState[nestedidx].property}
                  onChange={(e) => handleNestedPropChange(e, idx)}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <TypeOfNestedProp
                handleNestedTypeSelectChange={handleNestedTypeSelectChange}
              />
            </Col>
            <Col span={6}>
              <Form.Item>
                <input
                  name={nestedvalId}
                  data-idx={nestedidx}
                  id={nestedvalId}
                  className="valOfProp"
                  value={nestedPropState[nestedidx].valOfProp}
                  onChange={(e) => handleNestedPropChange(e, idx)}
                  type="text"
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <input
                  type="button"
                  name={delId}
                  data-idx={nestedidx}
                  id={delId}
                  className="deleteButton"
                  value="Delete"
                  style={{ backgroundColor: "#faad14" }}
                  onClick={removeNestedProperty}
                />
              </Form.Item>
            </Col>
            {errorNestedProp[nestedidx].errMessage && (
              <p>{errorNestedProp[nestedidx].errMessage}</p>
            )}
          </Row>
        </div>
      </Form>
    </Content>
  );
};

export default NestedPropInput;
