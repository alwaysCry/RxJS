const Rx = require('rxjs/Rx')

const onSubscribe = observer => {
    let number = 1;
    const handle = setInterval(() => {
        observer.next(number++)
    }, 1000)

    return {
        unsubscribe: () => {
            clearInterval(handle)
        }
    }
}

const source$ = new Rx.Observable(onSubscribe)
const subscription = source$.subscribe(item => console.log(item))

setTimeout(() => {
    subscription.unsubscribe()
}, 3500)