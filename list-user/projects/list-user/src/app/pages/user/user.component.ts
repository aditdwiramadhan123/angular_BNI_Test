import { Component, OnInit } from '@angular/core';
import { DataSend, User } from '../../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;
  dataSend: DataSend = { name: '', email: '', street: '' };
  displayedColumns: string[] = ['name', 'email', 'street', 'actions'];
  isUpdate = false;
  userId = 0;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  cancelUpdate(): void {
    this.isUpdate = false
    this.userForm.reset();
  }

  fetchUsers(): void {
    this.apiService.fetchData().subscribe(
      (response) => {
        this.users = response;
        console.log('berhasil dapat data user:', this.users);
      },
      (error) => {
        console.error('Ada error saat mengambil data pengguna:', error);
      }
    );
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      if (this.isUpdate) {
        this.apiService
          .updateData(this.userId, userData)
          .subscribe((response) => {
            console.log('user berhasil diedit', response);
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Berhasil edit user',
            });
            this.isUpdate = false;
            this.fetchUsers();
            this.userForm.reset();
          });
      } else {
        this.apiService.createUser(userData).subscribe(
          (response) => {
            console.log('User berhasil dibuat', response);
            this.fetchUsers(); // Refresh daftar pengguna setelah pembuatan berhasil
            this.userForm.reset(); // Reset form setelah berhasil
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Berhasil membuat user baru',
            });
          },
          (error) => {
            console.error('Error creating user:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'error',
              detail: 'Gagal membuat user',
            });
          }
        );
      }
    } else {
      console.error('Form is invalid.');
    }
  }

  editUser(user: User) {
    // Mengisi form dengan nilai pengguna yang dipilih

    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      street: user.address.city,
    });

    this.isUpdate = true;
    this.userId = user.id;
    console.log("click edit")

    window.scrollTo(0, 0);

  }

  deleteUser(userId: number) {
    this.apiService.deleteUser(userId).subscribe(
      (response) => {
        if (response) {
          console.log(`User berhasil dihapus`);
          this.messageService.add({
            severity: 'success',
            summary: 'success',
            detail: 'berhasil dihapus',
          });
          this.fetchUsers(); // Refresh daftar pengguna setelah penghapusan berhasil
        } else {
          console.error('Respon dari server tidak valid setelah penghapusan');
          this.messageService.add({
            severity: 'error',
            summary: 'error',
            detail: 'berhasil dihapus',
          });
        }
      },

      (error) => {
        console.error('Error deleting user:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'error',
          detail: 'gagal dihapus',
        });
      }
    );
  }
}
