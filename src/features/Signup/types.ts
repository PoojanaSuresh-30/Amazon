export interface Product
{
    id : number,
    name : string,
    price : number,
    imageURL : string;
}

export interface wishlistItem extends Product
{

}

export interface wishlistState{
    items : wishlistItem [];
}