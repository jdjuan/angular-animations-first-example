# SEPTEMBER

## 1. Let's import the animation dependencies

1. First import `BrowserAnimationsModule` in your `app.module.ts` using this line `import { BrowserAnimationsModule } from '@angular/platform-browser/animations';`. Remeber to put it in the `imports` array.
2. In your `app.component.ts` import the following functions: `trigger, state, style, animate, transition` from `'@angular/animations'`;

## 2. Let's scaffold our app

1. Create a `animationState` variable inside your component
1. Add a photo of an adorable face using this line: `<img src="https://api.adorable.io/avatars/120" [@faceAnimation]="animationState">` take a close look at: `[@faceAnimation]="animationState"`

## 3. Let's create our animation state

1. Create two buttons that change the `animationState` variable
```
<button (click)="changeState('round')">Round out</button>
<button (click)="changeState('bye')">Bye</button>
```
2. Finally add this method that allow us to change the state:`
```
changeState(effect: string): void {
    this.animationState = effect;
}
```

## 4. Let's animate!

1. Add the following property to the component's decorator

````
animations: [
    trigger('faceAnimation', [
      state('round', style({ borderRadius: '100%' })),
      state('bye', style({ opacity: '0' })),
    ]),
  ]
```

2. Cool, right? Now let's add some transitions
```
trigger('faceAnimation', [
      state('round', style({ borderRadius: '100%' })),
      state('bye', style({ opacity: '0' })),
      transition('* => round', [animate(1000, style({ borderRadius: '100%' }))]),
      transition('* => bye', [animate(2000, style({ opacity: '0' }))]),
]),
```