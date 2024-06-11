
export const getItem = (key)=>{
    let record = JSON.parse(localStorage.getItem(key))

    if (!record) {
        return []
    }
    return record
}