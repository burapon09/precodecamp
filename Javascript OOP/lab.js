class UserTemplate{
constructor(name,password,age,datecreate){
this.name = name
this.password = password
this.age = age
this.datecreate = datecreate
this.connected = false
}

login(){
    this.connected = true
    console.log('your login status :',this.connected)
}
logout(){
    this.connected = false
    console.log('your login status :',this.connected)
}

}

user1 = new UserTemplate('bura',1234,27,190563)

console.log(user1.name)
console.log(user1.password)
console.log(user1.age)
user1.login()
user1.logout()
