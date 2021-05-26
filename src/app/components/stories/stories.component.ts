import {Component, OnInit} from '@angular/core';
import {Story} from '../../models/story';
import {StoryService} from '../../services/story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  public paginatorConfig: any;
  stories: Story[];

  constructor(private storyService: StoryService) {
    this.paginatorConfig = {
      id: 'paginatorStory',
      currentPage: 1,
      itemsPerPage: 20,
      totalItems: 0
    };
  }

  ngOnInit(): void {
    this.getStories(1);
  }

  getStories(event): void {
    this.paginatorConfig.currentPage = event;
    this.storyService.getStories(event, this.paginatorConfig.itemsPerPage)
      .subscribe(res => {
        this.stories = res.result.stories;

        // Set paginator
        this.paginatorConfig.currentPage = res.result.page;
        this.paginatorConfig.totalItems = res.result.count;
      });
  }
}
