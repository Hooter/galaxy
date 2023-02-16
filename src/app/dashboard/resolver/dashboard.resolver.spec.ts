import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DashboardResolver } from './dashboard.resolver';

describe('DashboardResolver', () => {
  let resolver: DashboardResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    resolver = TestBed.inject(DashboardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
