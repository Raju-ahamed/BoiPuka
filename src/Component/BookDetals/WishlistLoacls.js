const wishGetFromLocal = () => {
    const getLocal = localStorage.getItem("wishList");
    if (getLocal) {
        return JSON.parse(getLocal);
    }
    else {
        return [];
    }
}
const wishSetToLocal = (id) => {
    const wishId = wishGetFromLocal();
    if(wishId.includes(id)){
        alert("already exist")
    }
    else{
        wishId.push(id);
        const allId = JSON.stringify(wishId);
        localStorage.setItem("wishList",allId);
    }
}
export {
    wishGetFromLocal,
    wishSetToLocal
}