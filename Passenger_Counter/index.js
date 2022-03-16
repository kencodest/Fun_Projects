const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const totalEl = document.getElementById("total-el")
let count = 0
let prevCount = 0
let entryArr = []
let sum = 0

function increment(){
    count += 1
    countEl.textContent = count
}

//this function reduces the count by one 
//if count is 0, it does not reduce the count
function reduce(){
    if (count === 0){

    }
    else{
        count -= 1
        countEl.textContent = count
    }
}

//this function saves the entries that have been input by the user
function save(){
    while (count > 0){
        entryArr.push(count)
        sum = entryArr.reduce((partialSum, a) => partialSum +a , 0)

        if (entryArr.length === 1){
            saveEl.textContent += `${count}`
        }
        else {
            saveEl.textContent += ` - ${count}`
        }  

        totalEl.textContent = "Total Entries: " + sum
        count = 0
        countEl.textContent = count

    }    
}
