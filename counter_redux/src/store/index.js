import {createStore} from "redux"

const INITIAL_VALUE={
  counter:0,
  privacy:false
}

const counterReducer=(store=INITIAL_VALUE,action)=>{
  //if you have few variables inside the object, you can pass them as a parameter,
  //but it is not feasible in case of large number of variables
  
  // if(action.type==="INCREMENT"){
  //   return {counter:store.counter+1,privacy:store.privacy}
  // }else if(action.type==="DECREMENT"){
  //   return {counter:store.counter-1,privacy:store.privacy}
  // }else if(action.type==="ADD"){
  //   return {counter:store.counter+action.payload.num,privacy:store.privacy}
  // }else if(action.type==="SUBTRACT"){
  //   return {counter:store.counter-action.payload.num,privacy:store.privacy}
  // }else if(action.type==="PRIVACY_TOGGLE"){
  //   return {counter:store.counter,privacy:!store.privacy}
  // }

  //in case of large number of variables, we can use spread operator
  if(action.type==="INCREMENT"){
    return {...store,counter:store.counter+1}
  }else if(action.type==="DECREMENT"){
    return {...store,counter:store.counter-1}
  }else if(action.type==="ADD"){
    return {...store,counter:store.counter+action.payload.num}
  }else if(action.type==="SUBTRACT"){
    return {...store,counter:store.counter-action.payload.num}
  }else if(action.type==="PRIVACY_TOGGLE"){
    return {...store,privacy:!store.privacy}
  }

  
  return store
}

const counterStore=createStore(counterReducer);

export default counterStore;
