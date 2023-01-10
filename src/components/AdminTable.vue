<template>
  <table  id="admin-table">
    <thead>
      <tr>
        <th>#</th>
        <th>ім'я</th>
        <th>пошта</th>
        <th>телефон</th>
        <th>дата</th>
        <th>час</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(reservations, idx) of reservations" :key="reservations.id">
        <td>{{idx + 1}}</td>
        <td>{{reservations.name}}</td>
        <td>{{reservations.email}}</td>
        <td>{{reservations.phone}}</td>
        <td>{{reservations.date}}</td>
        <td>{{reservations.time}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    reservations:{
      reguired: true,
      type: Array
    }
  }
}
</script>