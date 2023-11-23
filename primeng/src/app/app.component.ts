import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'primeng';

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  items1:MenuItem[] | undefined;
  items2:MenuItem[] | undefined;
  positionOptions:any
  position: "bottom" | "top" | "left" | "right" = "bottom";
label: string|undefined;

sidebarVisible:boolean=false;

cities:any[] | undefined;
selectedCity!: string ;
  ngOnInit() {
      this.items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

      this.home = { icon: 'pi pi-home', routerLink: '/' };
      this.items1 = [{ label: 'View', icon: 'pi pi-fw pi-search' },{ label: 'Delete', icon: 'pi pi-fw pi-trash' }];
      {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
    console.log(this.selectedCity)

    this.positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];
        this.items2 = [
            {
                label: 'Finder',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
            },
            {
                label: 'App Store',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
            },
            {
                label: 'Photos',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
            },
            {
                label: 'Trash',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
            }
        ];
  }


  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  onSubmit() {
    // Handle form submission logic here
    if (this.form.valid) {
      console.log(this.form.value);
      // You can send the form data to a service or perform other actions here
    } else {
      console.error('Form is invalid. Please check the fields.');
    }
  }
}
