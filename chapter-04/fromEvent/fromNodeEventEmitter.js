import {Observable} from 'rxjs/Observable'
import EventEmitter from 'events'
import 'rxjs/add/observable/fromEvent'

// 关键点：fromEvent 产生的是 Hot Observable
const emitter = new EventEmitter()
const source$ = Observable.fromEvent(emitter, 'msg')

source$.subscribe(
    console.log,
    error => console.log('catch', error),
    () => console.log('complete'),
)

emitter.emit('msg', 1)
emitter.emit('msg', 2)
emitter.emit('another-msg', 'oops')
emitter.emit('msg', 3)
