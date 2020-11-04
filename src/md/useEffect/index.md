# useEffect

---

useEffect 的作用和 componentDidMount 以及 componentDidUpdate 有点类似，只不过 useEffect 的粒度更细，可以在 useEffect 中控制一个流程的发起和销毁。具体用法可以查看[官网](https://zh-hans.reactjs.org/docs/hooks-effect.html),这里主要讨论下 useEffect 和 componentDidMount/componentDidUpdate 的区别 以及 useEffect 和 useLayoutEffect 的区别。

## 1. useEffect vs componentDidMount/componentDidUpdate

componentDidMount 是 class 组件初次渲染结束时执行的生命周期函数，是在 react 的 commit 阶段，紧接着组件渲染完后执行的，会阻塞浏览器的渲染，如果在其中执行耗时的任务，那在耗时任务结束前，页面是看不到更新的，componentDidUpdate 和 componentDidMount 的行为差不多，只是执行的时机不是初次渲染。

useEffect 是依赖更新的时候会去执行
