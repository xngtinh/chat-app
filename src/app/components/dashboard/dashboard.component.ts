import {Component, OnInit} from '@angular/core';
import {Story} from '../../models/story';
import {AuthService} from '../../services/auth.service';
import {StoryService} from '../../services/story.service';
import {ToastNotificationService} from '../../services/toast-notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stories: Story[] = [];

  constructor(
    private toastService: ToastNotificationService,
    private authService: AuthService,
    private storyService: StoryService
  ) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getTopStories();
  }

  getTopStories(): void {
    this.storyService.getStories(1, 5).subscribe(res => {
      this.stories = res.result.stories;
    });
  }

  // tslint:disable-next-line:typedef
  public showSuccessNotification() {
    this.toastService.success('This is the success message looooooong texxxxtttt asfasfs sdfsfsd a sdfsfas asdfsd asfsfsaaf dfas');
  }

  // tslint:disable-next-line:typedef
  public showErrorNotification() {
    this.toastService.error('This is the error message');
  }
}
