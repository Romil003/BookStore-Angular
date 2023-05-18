import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Service/WishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist: any = [];
  constructor(private wishlistService : WishlistService){}
  ngOnInit() {
    this.getAllBooksAddedInWishlist();
  }

  getAllBooksAddedInWishlist(){
    console.log("getting list of books which are added in wishlist => ");

    this.wishlistService.getAllWishlist().subscribe((result : any) => {
      console.log(result);
      this.wishlist = result.result.filter((data : any) => data.product_id != null);
      console.log(this.wishlist);
      
      
    })
    
  }

  removeFromList(productId : any){
    console.log("removing book from wishlist => ");

    this.wishlistService.removeBookFromWishlist(productId).subscribe((result : any) => {
      console.log(result
        );
      
    })

    this.getAllBooksAddedInWishlist();
  }

}
