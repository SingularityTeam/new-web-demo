import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import columns from './columns';
import { fetchTableList, changeTableList } from 'Actions/discover';

class DiscoverTable extends PureComponent {
  static propTypes = {
    result: PropTypes.any.isRequired,
    pagination: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchTable: PropTypes.func.isRequired,
    handleTableChange: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { fetchTable } = this.props;
    fetchTable();
  }

  render() {
    const { result, pagination, loading, handleTableChange } = this.props;
    const data = result.toJS();
    const paper = pagination.toJS();
    data.map(({ gender }, index, array) => (array[index].gender = gender ? 'Male' : 'Female'));

    return (
      <Table
        columns={columns}
        rowKey={record => record.id}
        dataSource={data}
        pagination={paper}
        loading={loading}
        onChange={handleTableChange}
      />
    );
  }
}

// Immutable 的 getIn 方法获取state 中的数据
const mapStateToProps = state => ({
  result: state.getIn(['discover', 'result']),
  pagination: state.getIn(['discover', 'pagination']),
  loading: state.getIn(['discover', 'loading'])
});

const mapDispatchToProps = dispatch => ({
  fetchTable: () => dispatch(fetchTableList()),
  handleTableChange: pagination => dispatch(changeTableList(pagination))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverTable);
