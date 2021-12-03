import { animate, state, style, transition, trigger } from "@angular/animations";

export class indexAnimations {
    //TITLE ANIMATION
    static titleAnimation: any =
        trigger('letterAnimation', [
            state('compressed', style({
                'margin': '0 -3px',
                'opacity': '0.9'
            })),
            transition('* => *', animate('.6s ease-in')),
        ]);
}