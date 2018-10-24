import {of} from 'rxjs/observable/of'
import {map} from 'rxjs/operators'

const source$ = of(1, 2, 3)
const result$ = source$.pipe(map(x => x * x))
source$.subscribe(console.log)