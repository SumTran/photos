import { async, TestBed } from '@angular/core/testing';
import { SharedUiLoadingSpinnerModule } from './shared-ui-loading-spinner.module';

describe('SharedUiLoadingSpinnerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiLoadingSpinnerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiLoadingSpinnerModule).toBeDefined();
  });
});
