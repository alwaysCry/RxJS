import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/repeat'

// 关键点：使用 repeat 一定要保证上游对象一定会完结

const source$ = Observable.create(observer => {
    console.log('on subscribe')
    setTimeout(() => observer.next(1), 1000)
    setTimeout(() => observer.next(2), 2000)
    setTimeout(() => observer.next(3), 3000)
    setTimeout(() => observer.complete(), 4000)

    return {
        unsubscribe: () => {
            console.log('on unsubscribe')
        }
    }
})
const repeat$ = source$.repeat()

repeat$.subscribe(
    console.log,
    null,
    () => console.log('complete')
)