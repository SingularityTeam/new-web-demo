import React from 'react';
import { Card, Row, Col, Breadcrumb, Button, Table, Modal } from 'antd';
import '../../style.less';
const { Item } = Breadcrumb;

class Licence extends React.Component {
  state = {
    licenceData: [
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
    ],
    tableData: {
      columns: [
        {
          title: '授权码',
          key: 'authrizationCode',
          dataIndex: 'authrizationCode'
        },
        {
          title: '类型',
          key: 'type',
          dataIndex: 'type'
        },
        {
          title: '有效期',
          key: 'validityTime',
          dataIndex: 'validityTime'
        },
        {
          title: '授权储存容量',
          key: 'authrizationStorage',
          dataIndex: 'authrizationStorage'
        },
        {
          title: '状态',
          key: 'state',
          dataIndex: 'state'
        },
        {
          title: '操作',
          key: 'oprate',
          dataIndex: 'oprate'
        }
      ],
      dataSource: []
    },
    authrizationCode: false,
    robotCode: false
  };

  render() {
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
              {this.state.licenceData.map((item, index) => (
                <Col key={index} span={8}>
                  <Card title={item.title} border="false">
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
          <div className="licence-oprate">
            <div>
              <Button icon="plus" className="licence-btn" onClick={() => this.addAuthrizationCode()}>
                添加授权码
              </Button>
              <Button icon="plus" className="licence-btn" onClick={() => this.lookRobotCode()}>
                查看机器码
              </Button>
            </div>
            <div className="licence-data">
              <Table columns={this.state.tableData.columns} dataSource={this.state.tableData.dataSource} />
            </div>
          </div>

          {/*弹出添加授权码框*/}
          <Modal
            title="添加授权码"
            visible={this.state.authrizationCode}
            onOk={() => this.handleOkAuthrization()}
            onCancel={() => this.handleCancelAuthrization()}
          >
            <div className="authrization">
              <p>请输入您要添加的授权码，多个授权码以回车键隔开：</p>
              <textarea />
            </div>
          </Modal>

            {/*弹出查看机器码框*/}
            <Modal
            title="查看机器码"
            visible={this.state.robotCode}
            footer={null}
            onCancel={() => this.handleCancelRobotCode()}
          >
            <div className="robot">
              <div className='robot-pic'>
                <span>机器码:</span>
                <img src='' alt=''/>
              </div>
              <p className='robot-footer'>收集扫一扫获取机器码</p>
            </div>
          </Modal>
        </div>
      </div>
    );
  }

  // 添加授权码
  addAuthrizationCode() {
    this.setState(() => ({
      authrizationCode: !this.state.authrizationCode
    }));
  }

  // 查看机器码
  lookRobotCode() {
    this.setState(() => ({
      robotCode: !this.state.robotCode
    }));
  }

  // 添加授权码点击确定
  handleOkAuthrization() {
    this.setState(() => ({
      authrizationCode: false
    }));
  }

  // 添加授权码点击取消
  handleCancelAuthrization() {
    this.setState(() => ({
      authrizationCode: false
    }));
  }

   // 查看机器码点击确定
   handleOkRobotCode() {
    this.setState(() => ({
      robotCode: false
    }));
  }

  // 查看机器码点击取消
  handleCancelRobotCode() {
    this.setState(() => ({
      robotCode: false
    }));
  }
}


export default Licence;
