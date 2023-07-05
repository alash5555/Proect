export const http = "http://localhost:3000"
export const enviroments = {
    home:{
      AllPost:http + "/allPost",
      category:http + "/category",
      ahutors:http + "/ahutors",
    },
    blog:{
      BlogPost:http + "/post"
    },
    blogPost:{
      read:http + "/readNext"
    },
    category:{
      PostCategory:http + "/PostCategory",
      categoryMin:http + "/categoryMin",
      allTags:http + "/allTags"
    },
    ahutors:{
        ahutorsPost:http +"/ahutorPost"
    }
}