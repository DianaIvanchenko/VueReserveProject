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
    <form method="post" action="" class="subform" @submit.prevent="submitHandler">
      <h2>Забронювати столик </h2>
      <p>
          <label for="name">Вкажіть ім'я:</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            v-model="name"
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
          >
          <span
            v-if="$v.name.$dirty && !$v.name.required"
            class="helper-text-p"
          >
          Поле не може бути пустим
          </span>
      </p>
      <p>
          <label for="email">Вкажіть свій email:</label>
          <input 
            type="email" 
            name="email" 
            id="email-reserve"
            v-model="email"
            :class="{invalid: $v.email.$dirty && !$v.email.required}"
          >
          <span
            v-if="$v.email.$dirty && !$v.email.required"
            class="helper-text-p"
          >
          Поле не може бути пустим
          </span>
      </p>
      <p>
        <label for="phone">Вкажіть свій номер телефону:</label>
        <input 
          type="phone" 
          name="phone" 
          id="phone"
          v-model="phone"
          :class="{invalid: $v.phone.$dirty && !$v.phone.required}"
        >
        <span
            v-if="$v.phone.$dirty && !$v.phone.required"
            class="helper-text-p"
        >
        Поле не може бути пустим
        </span>
      </p>
      <p>
        <label for="date">Оберіть дату:</label>
        <input 
          type="date" 
          name="date" 
          id="date"
          v-model="date"
          :class="{invalid: $v.date.$dirty && !$v.date.required}"
        >
        <span
            v-if="$v.date.$dirty && !$v.date.required"
            class="helper-text-p"
        >
        Поле не може бути пустим
        </span>
      </p>
      <p>
        <label for="time">Оберіть час:</label>
        <input 
          type="time" 
          name="time" 
          id="time"
          v-model="time"
          :class="{invalid: $v.time.$dirty && !$v.time.required}"
        >
        <span
            v-if="$v.time.$dirty && !$v.time.required"
            class="helper-text-p"
        >
        Поле не може бути пустим
        </span>
      </p><br>
      <p>
          <input type="submit" name="submit" value="Надіслати" id="submit"><br>
      </p>
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
import {required} from 'vuelidate/lib/validators'
export default {
  name: 'reserve',
  data: () => ({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  }),
  validations: {
    name: {required},
    phone: {required},
    email: {required},
    date: {required},
    time: {required}
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try{
        const reserve = await this.$store.dispatch('createReserve', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          date: this.date,
          time: this.time
      })
        alert("Відправлено")
      }catch(e){
      }
    }
  }
}
</script>