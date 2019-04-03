import React, { Component } from "react";
import { Row, Col, BackTop } from "antd";
import Introduction from "./components/Introduction";
import Resume from "./components/Resume";
import { Icon } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <div>
        <BackTop>
          <Icon  name="angle up" size="big" />
        </BackTop>
        <Row>
          <Col lg={12}>
            <Introduction />
          </Col>
          <Col lg={12}>
            <Resume />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
