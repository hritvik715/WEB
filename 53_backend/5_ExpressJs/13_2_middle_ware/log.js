function userCredentials(req, res, next) {
    console.log("username: (alex)");
    console.log("email: (alex21@gmail.com)");
    console.log("password: (alex214)");
    console.log("age: (18)");
    next();
}

export default userCredentials;