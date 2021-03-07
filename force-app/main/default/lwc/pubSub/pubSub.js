const store={};
const subscribe=(eventName,callback)=>{
    if(!store[eventName]){
        store[eventName]=new Set();

    }
    store[eventName].add(callback);

}
//create publish method
const publish=(eventName,payload)=>{
    if(store[eventName]){
        store[eventName].forEach(callback=> {
            try {
                callback(payload)
            } catch (error) {
                console.error(error)
            }
        })

    }
}

//create Unsubscribe
const unsubscribe=(eventName,callback)=>{
    if(store[eventName]){
        store[eventName].delete(callback)

    }
}
export default{
    subscribe,
    unsubscribe,
    publish
}