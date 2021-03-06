import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/let'

const map = fn => obs$ => new Observable(observer => (
    obs$.subscribe({
        next: value => observer.next(fn(value)),
        error: err => observer.error(error),
        complete: () => observer.complete(),
    })
))

const source$ = Observable.of(1, 2, 3)
const result$ = source$.let(map(x => x * 2))

result$.subscribe(console.log)