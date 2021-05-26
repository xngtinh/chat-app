import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Story } from '../../models/story';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit {
  @Input() story: Story;

  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private storyService: StoryService
  ) {}

  ngOnInit(): void {
    this.getStory();
  }

  getStory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.storyService.getStoryByID(id)
        .subscribe(res => {
          this.story = res.result;
        });
  }

  goBack(): void {
    this.location.back();
  }
}
