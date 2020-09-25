import React from 'react';
import { Row, Col } from 'antd';

class Footer extends React.Component {
  render() {
    return <div>
            <Row type="flex" align="middle" justify="center" style={{
              backgroundColor: '#183045',
              height: 112,
              borderTop: "8px solid #35bbb1",
              bottom: 0,
              marginBottom: 0}}
              >
            <Col span={24}>
            <h6 style={{
              color: '#ffffff',
              textAlign: 'center'}}
              >&copy; 2020 Insight RX. Powered by CALA Technologies.</h6>
            </Col>
            </Row>
            </div>
  }
}

export default Footer;