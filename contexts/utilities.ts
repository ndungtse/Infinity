export const compare = (a:any, b:any)=>{
   
    for (let i = 0; i < b.length; i++) {
        if (b[i].id === Number(a)) {
            return true
        }
    }
    return false
}