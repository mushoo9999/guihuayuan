/**
 * Created by huangliyao on 5/10/2017.
 */
var baseData = [{
    expand: true,
    title: '设计电站',
    disabled: true,
    children: [{
        title: '南京',
        type: "sk"
    }]
}, {
    title: '常规水库',
    expand: true,
    checked: true,
    children: [{
        title: "彭水",
        type: "sk"

    }, {
        title: "丹江口",
        type: "sk"

    }, {
        title: "三峡",
        type: "sk"

    }]
}, {
    title: '控制站',
    type: "sk",
    expand: true,
    checked: true,
    children: [{
        type: "sk",
        title: "九江"

    }]
}, {
    type: "dm",
    title: '河流断面',
    expand: true,
    checked: true,
    children: [{
        type: "dm",
        title: "汉江",
        children: [{
            type: "dm",
            title: "断面1"
        }, {
            type: "dm",
            title: "断面2"
        }, {
            type: "dm",
            title: "断面3"
        }]
    }, {
        type: "dm",
        title: "长江"
    }]
}]

