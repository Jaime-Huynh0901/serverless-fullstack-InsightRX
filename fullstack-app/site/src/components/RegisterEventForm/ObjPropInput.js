import React from "react";
import useDropdown from "./useDropdown";
import { Form, Row, Col } from "antd";
import styled from "styled-components";
import "./RegisterEventForm.css";

const layout = { labelCol: { span: 24 }, wrapperCol: { span: 32 } };
const Content = styled.div`
  width: 100%;
  max-width: 800px;
  border-left: 1px solid #001529;
  border-right: 1px solid #001529;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  align: middle;
  padding: 20px;
`;

const PropInputs = ({
  idx,
  propState,
  handleEventPropChange,
  handleTypeSelectChange,
  removeProperty,
  errorProp,
}) => {
  const propId = `objprop-${idx}`;
  const valId = `objval-${idx}`;
  const delId = `objdel-${idx}`;
  const typeList = ["string", "number", "array", "boolean"];
  const [type, TypeOfProp] = useDropdown(
    "        ",
    "",
    typeList,
    handleTypeSelectChange,
    idx
  );

  return (
    <>
      <Content>
        <Form {...layout} layout="horizontal" className="form-group">
          <div key={`objprop-${idx}`}>
            <Row
              type="flex"
              align="middle"
              justify="center"
              className="px-3 bg-white mh-page textCenter"
            >
              <Col span={6}>
                <Form.Item label={`Obj-Prop #${idx + 1}`}></Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Type of Obj-Prop"></Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label={`Obj-Value #${idx + 1}`}></Form.Item>
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
              style={{ margin: 0, padding: 0 }}
            >
              <Col span={6}>
                <Form.Item>
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
              <Col span={6}>
                <TypeOfProp handleTypeSelectChange={handleTypeSelectChange} />
              </Col>
              <Col span={6}>
                <Form.Item>
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
                  {errorProp[idx].errMessage && (
                    <p>{errorProp[idx].errMessage}</p>
                  )}
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Form>
      </Content>
    </>
  );
};

export default PropInputs;
