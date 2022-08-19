import h from '../mySnabbdom/h.js'


var myVode1 = h('div', {}, [
    h('p', {}, [
        h('span', {}, 'lxs')
    ]),
    h('p', {}, '嘻嘻'),
    h('p', {}, '呵呵'),
    // h('p',{},h('span', {}, 'lxs'))
])

var myVode2 = h('ul', {}, [
    h('li', {}, '苹果'),
    h('li', {}, '西瓜'),
    h('li', {}, [
        h('div', {}, [
            h('p', {}, '哈哈'),
            h('p', {}, '嘻嘻')
        ])
    ]),
    h('li', {}, h('span', {}, '火龙果'))
])

console.log(myVode2)