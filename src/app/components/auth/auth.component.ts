import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {first} from 'rxjs/operators';
import {ToastNotificationService} from '../../services/toast-notification.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  isSubmitted = false;
  return = '';

  constructor(
    private toast: ToastNotificationService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    // Redirect to home if already logged in
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit(): void {
    // Get the query params
    this.route.queryParams
      .subscribe(params => this.return = params.return || '/admin');
  }

  get formControls(): any {
    return this.authForm.controls;
  }

  signIn(): void {
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }

    this.authService.login(this.authForm.value.email, this.authForm.value.password).pipe(first())
      .subscribe(data => {
        if (data.status === 'error') {
          this.toast.error(data.message);
          return;
        }

        this.ngOnInit();
        this.router.navigateByUrl(this.return);
      });
  }
}
