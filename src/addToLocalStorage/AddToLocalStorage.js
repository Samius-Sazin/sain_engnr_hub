//get Engnr from Local Storage and return
const getEngnrListFrmLS = () => {
    let getEngnrList = localStorage.getItem('Engnr_List');

    return getEngnrList ? JSON.parse(getEngnrList) : {};
}

//add Engnr to Local Storage
const addToLocalStorage = (newEngnrList) => {
    const convertedEngnrListToJson = JSON.stringify(newEngnrList);
    
    localStorage.setItem('Engnr_List', convertedEngnrListToJson);
}

// Add Engnr to EngnrList obj and pass to addToLocalStorage
const addEngnr = (Engnr) => {
    const EngnrList = getEngnrListFrmLS();

    if(Engnr in EngnrList){
        EngnrList[Engnr]++;
    }
    else{
        EngnrList[Engnr] = 1;
    }
    addToLocalStorage(EngnrList);
}

//Delete Engnr from EngnrList Obj, and pass list to addTOLocalStorageObj
const deleteEngnr = (Engnr) => {
    const EngnrList = getEngnrListFrmLS();

    if((Engnr in EngnrList === false)){
        console.log("Engnr not found!!");
    }
    else if((Engnr in EngnrList) && EngnrList[Engnr] <= 1){
        delete EngnrList[Engnr];
    }
    else{
        EngnrList[Engnr]--;
    }
    addToLocalStorage(EngnrList);
}

export {addEngnr, deleteEngnr, getEngnrListFrmLS}