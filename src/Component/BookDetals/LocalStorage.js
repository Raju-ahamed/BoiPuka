const getFromLocalStorage = () => {
    const getLocal = localStorage.getItem("readId");
    if (getLocal) {
        return JSON.parse(getLocal);
    }
    else {
        return []
    }
}
const setToLocalStorage = (id) => {
    const card = getFromLocalStorage();
    if (card.includes(id)) {
        alert("already exist")
    }
    else {
        card.push(id);
        const newCard = JSON.stringify(card);
        localStorage.setItem("readId",newCard);
    }
}







































/**
 * 
 * 
const getFromLocalStorage = () => {
    const getLocal = localStorage.getItem("readId")
    if (getLocal) {
        return JSON.parse(getLocal);
    }
    else {
        return [];
    }

}
const setToLocalStorage = (id) => {
    const localReadIdSTR = getFromLocalStorage();
    if (localReadIdSTR.includes(id)) {
        alert("already exist")
    }
    else {
        localReadIdSTR.push(id);
        const localReadId = JSON.stringify(localReadIdSTR)
        localStorage.setItem("readId", localReadId)
    }

}

 */










export {
    setToLocalStorage
}




