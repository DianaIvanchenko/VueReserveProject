//збереження в бд
import firebase from "firebase/compat/app"

export default {
  actions: {
    //отримати дані
    async fetchUsers({commit, dispatch}){
      try{
        const users = (await firebase.database().ref(`/users`).once('value')).val() || {}
      }catch(e) {
        alert('Error')
        throw e
      }
    },
    async fetchReservation({commit, dispatch}) {
      try{
        const uid = await dispatch ('getUid')
        const reservation = (await firebase.database().ref(`/users/${uid}/reserves`).once('value')).val() || {}

        //отримати масив з бд
        const res = []
        Object.keys(reservation).forEach(key => {
          res.push({
            name: reservation[key].name,
            email: reservation[key].email,
            phone: reservation[key].phone,
            date: reservation[key].date,
            time: reservation[key].time,
            id: key

          })
        })
        return res
      }catch(e) {
        alert('Error')
        throw e
      }
    },
    async createReserve({commit, dispatch}, {name, email, phone, date, time}) {
      try {
        const uid = await dispatch('getUid')
        const reserve = await firebase.database().ref(`/users/${uid}/reserves`).push({name, email, phone, date, time})
        return{name, email, phone, date, time, id: reserve.key}
      }catch(e){
        alert("Error")
        throw e
      }
    }
  }
}