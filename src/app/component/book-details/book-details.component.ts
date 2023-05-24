import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { AdminBookService } from 'src/app/Service/AdminBook/admin-book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  form: FormGroup;
  isUpdate : boolean = false;
  bookId : any;

  constructor(
    private adminBookService : AdminBookService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<BookDetailsComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      bookName: ['',[Validators.required]],
      author: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      price: ['',[Validators.required]],
      discountedPrice: ['',[Validators.required]],
      description : ['',[Validators.required]]
    });
    if(data){
      this.form.patchValue({
        bookName:  this.data.bookName ,
        author: this.data.author ,
        quantity: this.data.quantity ,
        price: this.data.price,
        discountedPrice: this.data.discountPrice,
        description : this.data.description
      })
    }


    this.bookId = data ? data._id : '';
  }
  ngOnInit() {

  }

  onSubmit(): void {

    console.log(this.bookId);
    let reqData = {
      bookName: this.form.value.bookName,
      author: this.form.value.author,
      description: this.form.value.description,
      quantity: this.form.value.quantity,
      price: this.form.value.price,
      discountPrice: this.form.value.discountedPrice
    }
    if (this.form.valid) {
      if(this.bookId === ''){
          this.adminBookService.addNewBookByAdmin(reqData).subscribe((result : any) => {
            console.log(result);
          })
        this.dialogRef.close(this.form.value);
      }
      else {
        this.adminBookService.updateBookByAdmin(reqData,this.bookId).subscribe((result : any) => {
          console.log(result);
        })
      this.dialogRef.close(this.form.value);
      }
    }


  }
}
