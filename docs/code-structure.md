## 项目结构组织

常见 `React + Redux` 的项目有三种结构组织的方式：

- 按照类型
- 按照功能
- Ducks

> 推荐阅读：[面向React/Redux的可维护项目结构之旅](https://www.w3ctech.com/topic/1950)

### 按照类型

根据文件在项目中充当的角色类型，分别存放在不同的文件夹下：

```
src
├── components
│
├── pages
│  ├── auth.js
│  └── product.js
│
├── actions (ActionCreators)
│  ├── auth.js
│  └── product.js
│
├── constants (ActionTypes)
│  ├── auth.js
│  └── product.js
│
|── reducers
│  ├── auth.js
│  └── product.js
|
|── sagas
   ├── auth.js
   └── product.js
```

缺点：每增加一个新功能时，需要在各自文件夹下添加该功能需要的文件，并且频繁切换路径修改文件，项目复杂时会很不方便

### 按照功能

将每个功能需要的 `Redux` 相关的文件放在该功能模块对应的文件夹下：

```
src
├── components
│
├── auth
│  ├── container.js
│  ├── actions.js
│  ├── reducers.js
│  ├── types.js
│  ├── sagas.js
│
└── product
   ├── container.js
   ├── actions.js
   ├── reducers.js
   ├── types.js
   └── selectors.js
```

缺点：`Redux` 会中的 `Store` 是单一的，如果在 `feature1` 中派发一个 `action`，很可能会影响 `feature2` 的状态，因为 `feature1` 和 `feature2` 共享了部分状态，会响应相同的 `action`，导致不同模块间的功能被耦合在了一起

### Ducks

将相关的 `reducer`、`action` 等写到一个文件里去

```
src
├── components
│
├── pages
│  ├── auth.js
│  ├── productList.js
│  └── productDetail.js
│
├── reducers (ducks)
│  ├── index.js   (combineReducers)
│  ├── auth.js    (reducers, ActionCreators, ActionTypes, selectors)
│  └── product.js (reducers, ActionCreators, ActionTypes, selectors)
│
├── sagas
│  ├── index.js (rootSaga)
│  ├── auth.js
│  └── product.js
│
└── services
   ├── authenticationService.js
   └── productsApi.js
```

### 项目中 Redux 的使用

> 推荐阅读
> - [Redux 入门教程 - 阮一峰](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
> - [redux store取代react state合理吗？ - 知乎](https://www.zhihu.com/question/271693121)

本项目中依然采用了第一种按照类型来分的代码组织方式，使用起来确实会有上面所阐述的问题。而使用 `Redux` 的初衷，主要就是为了解决跨组价通信、状态共享等问题，所以没必要把所有状态存放在 `Redux Store` 中共享，这样做反而增加了复杂性。关于何时使用 `Redux`，列出以下几点总结进行参考：

- 其他组件是否需要该状态
- 组件被销毁后状是否仍要保留
- 是否需要缓存数据
