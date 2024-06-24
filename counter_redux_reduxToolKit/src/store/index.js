import {configureStore,createSlice} from "@reduxjs/toolkit"

import counterSlice from "./counter"

import privacySlice from "./privacy"

// const counterSlice=createSlice({
//   name:'counter',
//   initialState:{counterVal:0},
//   reducers:{
//     increment:(state)=>{
//       state.counterVal++;
//     },
//     decrement:(state)=>{
//       state.counterVal--;
//     },
//     add:(state,action)=>{
//       state.counterVal+=action.payload;
//     },
//     subtract:(state,action)=>{
//       state.counterVal-=action.payload.num;
//     },
//   }
// })

// const privacySlice=createSlice({
//   name:'privacy',
//   initialState:false,
//   reducers:{
//     toggle:(state)=>{
//       return state=!state
//     }
//   }
// })

const counterStore=configureStore({reducer:{
counter:counterSlice.reducer,
privacy:privacySlice.reducer
}});

// export const counterActions=counterSlice.actions;

// export const privacyActions=privacySlice.actions;

export default counterStore;
