const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    sorter: true,
    width: '10%'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: '20%'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
    width: '20%'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
];

export default columns;
