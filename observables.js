import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.complete();
});

let observer = {
    next(x) { console.log('received ' + x); },
    error(err) { console.error('error: ' + err); },
    complete() { console.log('Observable completed'); }
  }

let subscription = observable.subscribe(observer);
//-----------------------------------------------------

observable.subscribe((x) => {console.log('received'+x)}, )

  

fromEvent(document, 'click').subscribe((x) => {
  console.log(x);
});