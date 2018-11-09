import Mock from 'mockjs';

// 模拟坐标数据
const mockData = () => {
  const data = Mock.mock({
    'seriesData|10': [
      {
        'x|+1': 0,
        'y|1-10': 10
      }
    ]
  });
  return data.seriesData;
};

const series1 = mockData();

const series2 = mockData();

const series3 = mockData();

export { series1, series2, series3 };
