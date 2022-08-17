import vnode from './vnode'

//编写一个低配版的h函数,这个函数必须接受3个参数,缺一不可
//相当于它的重载功能较弱
//调用的时候形态必须是下面的三种之一
//1.h('div',{},'文字')
//2.h('div',{},[])
//3.h('div',{},h())

export default function h(sel, data, c) {
    //检查参数的个数
    if (arguments.length != 3)
        throw new Error('对不起,h函数必须传入3个参数,我们是低配版h函数!')

    //检查参数c的类型
    if (typeof c === 'string' || typeof c == 'number') {
        //说明现在调用h函数是形态1
        return vnode(sel, data, undefined, c, undefined)
    } else if (Array.isArray(c)) {
        //说明现在调用h函数是形态2
        let children = []
        //遍历c
        for (let i = 0; i < c.length; i++) {
            //检查c[i]必须是一个对象,如果不满足
            if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel')))
                throw new Error('传入的数组参数中有项不是h函数')
            //此时只需要收集就可以
            children.push(c[i])
        }
        //循坏结束了就说明children收集完毕了,它有children属性
        return vnode(sel,data,children,undefined,undefined)
    } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
        //说明现在调用h函数是形态3
        

    } else {
        throw new Error('传入的第三个参数类型不对')
    }

}