import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

describe(AppComponent.name, () => {
  let spec: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    shallow: true,
    detectChanges: false,
  });

  beforeEach(() => (spec = createComponent()));

  it('should be created', () => {
    expect(spec.component).toBeInstanceOf(AppComponent);
  });
});
