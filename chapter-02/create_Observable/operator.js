const Rx = require('rxjs/Rx')

const onSubscribe = observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
}

const source$ = Rx.Observable.create(onSubscribe)

source$.map(x => x*x).subscribe(console.log)