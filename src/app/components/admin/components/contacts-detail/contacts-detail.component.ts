import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { User } from '../../user.interface';

@Component({
	selector: 'app-contacts-detail',
	templateUrl: './contacts-detail.component.html',
	styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {
	id!: number;
	user!: Observable<User>;

	constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((params) => this.id = params?.['id']);
		this.user = this.adminService.getPerson(this.id);
	}

}
