import React from 'react';

const Async = (Component) => {
  const LazyComponent = React.lazy(Component);
  return class App extends React.PureComponent {
    render() {
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <LazyComponent {...this.props} />
        </React.Suspense>
      );
    }
  };
};

const routes = [
  {
    path: '/',
    title: '首页',
    exact: true,
    hidden: true,
    component: Async(() => import(/* webpackChunkName:'Home' */'./Home/Home')),
  },
  {
    path: '/Page',
    title: 'Page',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'Page' */'./../component/Page/doc')),
  }, {
    path: '/TableSelectCountBar',
    title: 'TableSelectCountBar',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'TableSelectCountBar' */'./../component/TableSelectCountBar/doc')),
  }, {
    path: '/TableHeader',
    title: 'TableHeader',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'TableHeader' */'./../component/TableHeader/doc')),
  },
  {
    path: '/NumberSplitLine',
    title: 'NumberSplitLine',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'NumberSplitLine' */'./../component/NumberSplitLine/doc')),
  }, {
    path: '/ModalConfirm',
    title: 'ModalConfirm',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'ModalConfirm' */'./../component/ModalConfirm/doc')),
  }, {
    path: '/ModalWrapper',
    title: 'ModalWrapper',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'ModalWrapper' */'./../component/ModalWrapper/doc')),
  }, {
    path: '/CanSelectorDescription',
    title: 'CanSelectorDescription',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'CanSelectorDescription' */'./../component/CanSelectorDescription/doc')),
  }, {
    path: '/From',
    title: 'Form',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'Form' */'./../component/Form/doc')),
  }, {
    path: '/Input',
    title: 'Input',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'Input' */'./../component/Input/doc')),
  }, {
    path: '/Selector',
    title: 'Selector',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'Selector' */'./../component/Selector/doc')),
  }, {
    path: '/RadioGroup',
    title: 'RadioGroup',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'RadioGroup' */'./../component/RadioGroup/doc')),
  }, {
    path: '/FormItemLabelInput',
    title: 'FormItemLabelInput',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'FormItemLabelInput' */'./../component/FormItemLabelInput/doc')),
  }, {
    path: '/DatePicker',
    title: 'DatePicker',
    exact: true,
    component: Async(() => import(/* webpackChunkName:'DatePicker' */'./../component/DatePicker/doc')),
  },
];

export default routes;
