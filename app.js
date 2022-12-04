const mongoose=require("mongoose");
//const person =require("./personPrototype")
const personSchema= new mongoose.Schema (
    {    name: { type: String, required: true },
        age: Number,  
        favoriteFoods: [String]
    });
const person=mongoose.model('person',personSchema);
async function run() {
    var db="mongodb://localhost:27017/mongoosetest";
    await mongoose.connect(db,()=>{console.log('database connected !')}, err=>{console.error(err)});
}
run()
//Create and Save a Record of a Model
const person0=new person({name:"Ness",age:40,favoriteFoods:["fish","appel"]});
person0.save()
.then(console.log(person0))
.catch(err => {console.error(err)})
//Create Many Records with model.create()
creation()
async function creation()
{ const arrayOfPeople=[{name:"Chama",age:25,favoriteFoods:["chocolate","juice"]},{name:"Mary",age:65,favoriteFoods:["chocolate","juice"]},{name:"Chama",age:26,favoriteFoods:["milk","cake"]},{name:"Azer",age:35,favoriteFoods:["chocolate","kiwi","burritos"]},{name:"Radhia",age:10,favoriteFoods:["orange","butter","burritos"]}]
const peaple = await person.create(arrayOfPeople); console.log(peaple)}
//Search in Database
async function search()
{const person1= await person.find({name:"Chama"}).exec(); console.log(person1)}
//Search with findOne in Database
async function searchOne()
{const person2= await person.findOne({favoriteFoods:"orange"}).exec(); console.log(person2)}
//Find by id
var id = '638cc204efdae83743584deb';
person.findById(id, function (err, docs) {
    if (err){console.error(err);}
    else{console.log(docs);}
});
//Classic update method
//async function classic()
var theid = '638cc204efdae83743584deb';
const classic = function() {
    //const itemToAdd = 'hamburger'
    const person3 = person.findById({_id: theid}, function(err, data){
      if (err) {return console.error(err) }
      data.favoriteFoods.push("hamburger")
      data.save()
    })
    console.log(person3)
  }
  
classic()
// update 
const filter = {name:"Azer"};
const update = { age:20};
const person4 =person.findOneAndUpdate(filter, update); console.log(person4)
//findByIdAndRemove
console.log("remooooooooooooooooooooooooving")
var id = '5eb987e377d884411cac6b69';
person.findByIdAndRemove({_id:id}, function (err, docs) {
    if (err){console.log(err)}
    else{console.log(docs);}
});
//remove
const person5= person.remove({name:'Mary'}, function done (err) {
    if (err) { err.type = 'database';}})
console.log(person5)
//Query Helpers
person.find({favoriteFoods:"burritos"}).sort({name:1}).limit(2).select({age:false}).exec(function done (err, data) {
    if (err){console.error(err);}
    else{console.log(data);}
})