class users{
    constructor (name, age,height){
        this.name=name
        this.age=age
        this.height= height
    }
}

var user1= new users("keke",12,34)
var calvin= new users("calvin",56,123.5)
console.log(user1);
console.log(calvin);

class people extends users{
    constructor(name,age,height){
        super (name,age,height)

    }
}
