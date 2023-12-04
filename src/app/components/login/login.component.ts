import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup

	constructor(private router: Router, private authService: AuthService) { }

	onSubmit() {
		this.authService.login(this.loginForm.value).subscribe({
			next: () => this.router.navigate(['admin']),
			error: (error) => alert(error.message)
		});
	}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			'email': new FormControl('', [Validators.required, Validators.email]),
			'password': new FormControl(
				'',
				[
					Validators.required,
					Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
				]
			)
		})
	}

}
