import { Post } from "./post";

export class User {
    public id:number;
    public firstname:string;  
    public lastname :string;
    public email :string;
    public mobile :string;
    public password :string;
    public dob :Date;
    public gender :string 
    public profileUrl :string;
    public coverUrl :string;
    public photos:string[];
    public bio :string;
    public post :Post[]
}
