1. 请简述 React 16 版本中初始渲染的流程
(1)、render阶段，首先初始化 Fiber 数据结构: 创建 fiberRoot 及 rootFiber，然后为每个react jsx元素构建对应的fiber对象，其中包含其对应的DOM对象，及描述将要进行什么DOM操作的effectTag属性，这个filber对象被称为workInProgress fiber树，它被保存到fiberRoot中
(2)、commit阶段，根据render阶段的workInProgress fiber树，按照其中的effectTag属性进行相应的DOM操作。


2. 为什么 React 16 版本中 render 阶段放弃了使用递归
因为使用递归一旦执行无法中断，如果虚拟DOM层级很深时，比对任务会消耗大量时间，期间由于js的单线程无法执行其他任务，造成页面卡顿，影响用户操作。
所以React16后使用fiber架构使对比过程中的任务可拆分、可中断，利用浏览器空闲时间完成任务，解决了之前的问题。


3. 请简述 React 16 版本中 commit 阶段的三个子阶段分别做了什么事情
执行DOM操作前，处理类组件的getSnapshotBeforeUpdate声明周期函数
执行DOM操作，根据effectTag进行dom操作，将workingProgress Fiber树变成current Fiber树
执行DOM操作后，调用生命周期函数和钩子函数


4. 请简述 workInProgress Fiber 树存在的意义是什么
React中最多会同时存在两颗Fiber树，页面已有内容对应的current Fiber树和正在内存中构建的workInProgress Fiber 树，两颗树中的对应节点通过alternate属性连接。workInProgress Fiber树有以下好处：
(1)、使用内存预先构建了新的DOM，让页面DOM更新更平滑，不闪烁。
(2)、两颗fiber树的存在，实现了异步中断时，更新状态的保存，中断回来以后可以拿到之前的状态，让调度层Scheduler在浏览器空闲时进行对比任务的功能能够实现。

