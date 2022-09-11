import mongoose from "mongoose";
import Blog from "./model/Blog.js";

mongoose.connect("mongodb+srv://GiseleCavalli:gisele@cluster0.tyocqt5.mongodb.net/TDE01?retryWrites=true&w=majority");

const article = Blog.create({
    title:"TDE01",
    slug:"Primeiro TDE na matéria",
    published: true,
    content: "Quinta postagem",
    tags:['tde','tde01']
});
 
console.log(article);