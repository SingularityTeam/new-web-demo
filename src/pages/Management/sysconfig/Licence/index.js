import React from 'react';
import { Card, Row, Col, Breadcrumb, Button} from 'antd';
import '../style.css';
const { Item } = Breadcrumb;

// 模拟的数据
const licenceData = [
  {
    title: '授权码激活状态',
    total: 60,
    leave: 30,
    unit: '个'
  },
  {
    title: '当前数据总容量',
    total: 500,
    leave: 200,
    unit: 'GB'
  },
  {
    title: '授权使用天数',
    total: 30,
    leave: 10,
    unit: '天'
  }
];

const Licence = () => {
  return (
    <div className="content-wrapper">
      <Breadcrumb className="breadcrumb-wrapper">
        <Item>首页</Item>
        <Item>管理</Item>
        <Item>系统管理</Item>
        <Item>存储管理</Item>
        <Item>磁盘管理</Item>
      </Breadcrumb>
      <div className="sysconfig-licence">
        <div>
          <Row gutter={16}>
            {licenceData.map(item => (
              <Col key={item} span={8}>
                <Card title={item.title} border={false}>
                  <p className="licence-card">
                    <span>{item.leave}</span>
                    <span>/{item.total}</span>
                    <span>{item.unit}</span>
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className='licence-oprate'>
            <div><Button icon='plus' className='licence-btn'>添加授权码</Button><Button icon='plus' className='licence-btn'>查看机器码</Button></div>
            <div className='licence-data'></div>
        </div>
      </div>
    </div>
  );
};

export default Licence;
