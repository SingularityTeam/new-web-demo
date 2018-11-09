const getGraphChartOption = () => ({
  title: {
    text: 'NPM Dependencies'
  },
  animationDurationUpdate: 1000,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      data: [],
      edges: [],
      label: {
        emphasis: {
          position: 'right',
          show: true
        }
      },
      roam: true,
      focusNodeAdjacency: true,
      lineStyle: {
        normal: {
          width: 0.5,
          curveness: 0.3,
          opacity: 0.7
        }
      }
    }
  ]
});

const getLoadingOption = () => ({
  text: '加载中...',
  color: '#4413c2',
  textColor: '#270240',
  zlevel: 0
});

export { getGraphChartOption, getLoadingOption };
