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
<div>
<div class="grey-darken-1-empty-layout">
<form class="card-auth-card" @submit.prevent="submitHandler">
  <div class="card-content">
    <h3 class="card-title">Особистий кабінет адміністратора</h3>
  <div class="inputs">
    <div class="input-field">
      <input 
        id="email" 
        type="text"  
        placeholder="Email" 
        v-model.trim="email"
        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
      > 
        <label class="temail" for="email">Email</label><br>
        <small
          class="helper-text-e"
          v-if="$v.email.$dirty && !$v.email.required"
        >Поле не повинно бути пустим
        </small>
        <small
          class="helper-text-e"
          v-else-if="($v.email.$dirty && !$v.email.email)"
        >Введіть коректний Email
        </small>
    </div>

    <div class="input-field">
      <input 
        id="password" 
        type="password" 
        placeholder="Password"
        v-model.trim="password"
        :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
      > 
        <label class="temail" for="password">Пароль</label><br>
        <small
          class="helper-text-p"
          v-if="$v.password.$dirty && !$v.password.required"
        >Введіть пароль
        </small>
        <small
          class="helper-text-p"
          v-else-if="($v.password.$dirty && !$v.password.minLength)"
        >Кількість символів повинна бути більше 6
        </small>
    </div>
  </div>
</div>
  <div class="card-action">
    <div>
      <button class="submit" type="submit">
        Увійти
      </button>
    </div>
  </div>
</form>
</div>
</div>
</body>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data: () => ({
    email: 'admin@gmail.com',
    password: '999999'
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    async submitHandler(){
      if (this.$v.$invalid){
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password
      }

      try{
        this.$router.push('/admin')
      }catch (e) {}
      
    }
  }
}
</script>