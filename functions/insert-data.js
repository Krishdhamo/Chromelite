import "./database.js"
import { PostMode1 } from "./models.js"

import posts from "./posts.json" with {type: "json"}

PostMode1.insertMany(posts).then(() => {
    console.log("Inserted")
}).catch(error => {
    console.error("Failed to insert",error)
})