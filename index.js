import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase,
    ref,
    push,
    onValue } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";


const firebaseConfig = {
    projectId: "leads-tracker-app-8b677",
    firebaseURL:"https://leads-tracker-app-8b677-default-rtdb.firebaseio.com/"

}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "information")



let test = document.getElementById("here")
let butt = document.getElementById("but")
let tit = document.querySelector("#halo")
let info



console.log(butt)
console.log(tit)
tit.textContent = "Home is where people live "
let par = document.createElement("div")






butt.addEventListener("click", function(){
    test.innerText = "finally I did it"
    info = test.innerText
    push(referenceInDB,info)
})


 
onValue(referenceInDB, function(snapshot){
   const snapshotValues = snapshot.val()
    const infos = Object.entries(snapshotValues)
    console.log(infos)
})









