import h from '../mySnabbdom/h.js'

var myVode1 = h('div', {}, '文字')

var myVode2 = h('div', {}, [
    h('p', {}, [
        h('span', {}, 'lxs')
    ]),
    h('p', {}, '嘻嘻'),
    h('p', {}, '呵呵'),
    // h('p',{},h('span', {}, 'lxs'))
])

var myVode3 = h('div', {}, h('span', {}, 'lxs'))

console.log(myVode3)