import React, { Component } from 'react';
import { Row, Col, Steps, Button, Icon } from 'antd';

const { Step } = Steps;
const { Group } = Button;

const steps = [
  {
    title: '预览指标',
    content: 'First-content'
  },
  {
    title: '创建任务',
    content: 'Second-content'
  },
  {
    title: '查看结果',
    content: 'Last-content'
  }
];

class AbnormalDetectionSteps extends Component {
  state = {
    current: 0
  };

  render() {
    return (
      <Row>
        <Col span={1}>
          <h3>异常检查</h3>
        </Col>
        <Col span={6}>
          <Steps progressDot>
            {steps.map(({ title }) => (
              <Step key={title} title={title} />
            ))}
          </Steps>
        </Col>
        <Col span={4}>
          <Group>
            <Button>
              <Icon type="left" />
              上一步
            </Button>
            <Button type="primary">
              下一步
              <Icon type="right" />
            </Button>
          </Group>
        </Col>
      </Row>
    );
  }
}

export default AbnormalDetectionSteps;
