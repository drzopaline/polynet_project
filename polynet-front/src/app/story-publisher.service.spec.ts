import { TestBed } from '@angular/core/testing';

import { StoryPublisherService } from './story-publisher.service';

describe('StoryPublisherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryPublisherService = TestBed.get(StoryPublisherService);
    expect(service).toBeTruthy();
  });
});
