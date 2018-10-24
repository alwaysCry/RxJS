const Rx = require('rxjs/Rx')

const onSubscribe = observer => {
    let number = 1
    const handle = setInterval(() => {
        observer.next(number++)
        if (number > 3) {
            clearInterval(handle)
            observer.complete()
        }
    }, 1000)
}

const source$ = new Rx.Observable(onSubscribe)

const theObserver = {
    next: item => console.log(item),
    complete: () => console.log('No More Data'),
}

source$.subscribe(theObserver)