
// Javascript Class
class Support {
    name;
    role = 'Support web Dev';
    address = 'BD';
    constructor (name){
        this.name = name
    }
    startSesson(){
        console.log(this.name,'Start Support Session')
    }
}

const fastPerson =new Support('rubel')
const secondPerson =new Support('fardin')
const thirdPerson = new Support('ashraful')
const forthPerson = new Support('robin')


    console.log(fastPerson)
    console.log(secondPerson)
    console.log(thirdPerson)
    console.log(forthPerson)

fastPerson.startSesson()
thirdPerson.startSesson()


class Person {
    constructor(name,email){
        name = name
        email = email
    }
    print (){
        console.log(`Name: ${this.name},email: ${this.email} `)
    }
}
export default Person;