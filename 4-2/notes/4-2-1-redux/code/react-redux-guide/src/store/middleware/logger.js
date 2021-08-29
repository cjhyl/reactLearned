export default store => next => action => {
  console.log('store', store);
  console.log('action', action);
  next(action);
}

// export default function (store) {
//   return function (next) {
//     return function (axtion) {
//       console.log(store);
//       console.log(action);
//       next(action);
//     }
//   }
// }