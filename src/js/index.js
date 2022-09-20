import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from "snabbdom";

//创建patch函数--test
const patch = init([classModule, propsModule, styleModule, eventListenersModule])
//key 是唯一标识 有key才能实现最小化更新
//只有同一个虚拟节点，才能进行精细化比较 如何定义是同一个虚拟节点 选择器相同且key相同
const vnode1 = h('div', {}, [
    h('p', { key: 'A' }, 'A'),
    h('p', { key: 'B' }, 'B'),
    h('p', { key: 'C' }, 'C'),
    h('p', { key: 'D' }, 'D'),
])

const container = document.getElementById('container')
const btn = document.getElementById('btn')

patch(container, vnode1)

const vnode2 = h('div', {}, h('section', {}, [
    h('p', { key: 'A' }, 'A'),
    h('p', { key: 'B' }, 'B'),
    h('p', { key: 'C' }, 'C'),
    h('p', { key: 'D' }, 'D'),
]))

//点击按钮时将vnode1变成vnode2
btn.onclick = function () {
    patch(vnode1, vnode2)
}
