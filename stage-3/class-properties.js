class User {
    // Private Property
    #isAdmin = true;

    // Property
    name = "natalia";
    getName = () => {
        return this.name;
    };

    // Static properties
    static surname = "calvet";
    static getSurname = function() {
        return User.surname;
    };
}

const natalia = new User;

// Property are not on the prototype.
console.log(natalia.__proto__.name); // > undefined

console.log(natalia.getName.call(undefined)); // > "natalia"
console.log(natalia.isAdmin); // > "undefined"

// Static function exists on the class.
console.log(User.getSurname()); // > "calvet"