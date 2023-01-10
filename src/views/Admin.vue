<template>
  <body>
  <header class="header-top">
    <div class="header_top">
      <div class="container">
        <div class="header_contacts">
          <a class="header_phone" href="tel:380646592314">+38 (064) 659 23 14</a>
          <a class="header_email" href="#">email@gmail.com</a>
          <router-link to="/" class="header-name" tag="p">AUGUST</router-link>  
        </div>
      </div>
    </div>
  </header>
  <div class="container">
    <div class="user">ADMIN</div>
    
    
    <p class="empty" v-if="!reservations.length" >Бронювання відсутні</p>

    <form method="post" action="" class="subform" v-else>
      <h2>Список бронювань </h2>
        <AdminTable  :reservations="reservations"/>
    </form>
    
</div>
<footer class="footer">
  <div class="footer-content">
    <div class="container">
      <div class="footer-inner">
      <div class="footer-info">
        <div class="footer-title">
          Ресторан "August"
        </div>
        <div class="footer-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt 
          voluptatibus nulla voluptas, ad repellendus ipsum, labore voluptate delectus 
          quos soluta blanditiis dignissimos sit? Consectetur molestiae incidunt consequuntur 
          maiores quia!
        </div>
        <p class="footer-name">AUGUST</p>
        <ul class="footer-list">
          <li><a class="footer-phone" href="tel:380640252356">+38 (064) 025 23 56</a></li>
          <li><a class="footer-email" href="#">email@gmail.com</a></li>
          <li><a class="footer-address" href="#">Київ, вул. Теодори Пушиної, 19</a></li>
        </ul>
      </div>
      <div class="footer-map">
       
      </div>
      </div>
    </div>
  </div>
  <div class="footer-copy">
    <div class="container">
      <div class="copy-text">
        2022 Template by Author
      </div>
    </div>
  </div>
</footer>
</body>
</template>

<script>
import AdminTable from '@/components/AdminTable'
export default {
  name: 'reservations',
  data: () => ({
    reservations: [],
    users: []
  }),
  components: {
    AdminTable
  },
  async mounted() {
    //this.users = await this.$store.dispatch('fetchUsers')
    this.reservations = await this.$store.dispatch('fetchReservation')
    /*const users = await this.$store.dispatch('fetchUsers')
    this.users = users.map(users => {
      return {
        ...users,
        reserveName: this.reservations.find(n => n.id === users.reservationsId).name,
        reserveEmail: this.reservations.find(e => e.id === users.reservationsId).email,
        reservePhone: this.reservations.find(p => n.id === users.reservationsId).phone,
        reserveDate: this.reservations.find(d => d.id === users.reservationsId).date,
        reserveTime: this.reservations.find(t => t.id === users.reservationsId).time,

      }
    })*/
    console.log(this.reservations)
  }
}
</script>