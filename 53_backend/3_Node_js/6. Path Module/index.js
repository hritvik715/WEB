//imp-> initialyy install pkges using => npm init -y


//imp->path is a inbuilt module 
import path from "path"

//imp-> ye jo path likha hai ye random hai isme itna dimaag na lgaao

// Base Name ✅
console.log(path.basename("c://nodejs//index.html"));
console.log(path.basename("c://nodejs//app.js", ".js"));


// console.log(__filename);
// console.log(path.basename(__filename));

// omit extenction ✅
// console.log(path.basename(__filename, ".js"));

// Directory Name ✅
console.log(path.dirname("c:/nodejs/path/index.js"));
// console.log(path.dirname(__filename));

// Extenction ✅ => it allow to get the extension of that file
console.log(path.extname("c:/nodejs/path/index.js"));
console.log(path.extname("c:/nodejs/path/index.pug"));
// console.log(path.extname(__filename));

// Join✅
console.log(path.join("/c:", "huxn-webdev", "course", "golang", "structs"));

// dot dot means => Go Up a level ✅
console.log(
    path.join("/c:", "huxn-webdev", "course", "golang", "structs", "..")
);
console.log(
    path.join("/c:", "huxn-webdev", "course", "golang", "structs", "..", "..")
);

// Normalize ✅
console.log(path.normalize("c:\\courses\\\\redux-course\\"));
console.log(
    path.normalize("c:\\courses\\\\redux-course\\store\\\features\\..")
);
console.log(path.win32.normalize("C://projects//react///advance-search//"));

// Parse ✅
console.log(path.parse("c://nodejs//index.html"));
console.log(path.parse("c://nodejs//index.html").base);
console.log(path.parse("c://nodejs//index.html").name);
console.log(path.parse("c://nodejs//index.html").ext);
