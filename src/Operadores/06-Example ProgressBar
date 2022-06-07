import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const calcScrollPercentage = ({ target }) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent<Event>(document, 'scroll');

const progress = scroll$.pipe(map(calcScrollPercentage));

progress.subscribe(percent => {
    const progressBar: HTMLDivElement = document.querySelector('.progress-bar');
    progressBar.style.width = `${percent}%`;
});