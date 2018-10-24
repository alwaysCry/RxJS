const Rx = require('rxjs/Rx')

// 该函数完全决定了 Observable 对象的行为
/* const onSubscribe = observer => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
} */
// 在前一个基础上加入时间间隔
/* const onSubscribe = observer => {
    let number = 1
    const handle = setInterval(() => {
        observer.next(number++)
        if (number > 3) {
            clearInterval(handle)
        }
    }, 1000)
} */
// 无限推送
const onSubscribe = observer => {
    let number = 1
    const handle = setInterval(() => {
        observer.next(number++)
    }, 1000)
}


// 调用 Observable 构造函数，产生一个名为 source$ 的数据流对象
const source$ = new Rx.Observable(onSubscribe)

const theObserver = {
    next: item => console.log(item)
}
source$.subscribe(theObserver)