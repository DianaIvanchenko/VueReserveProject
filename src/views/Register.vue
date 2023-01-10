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
    <h3 class="card-title">Реєстрація</h3>
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
    <div class="input-field">
      <input  
        type="text" 
        v-model.trim="name"
        :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.email.minLength)}" 
        placeholder="Name"> 
        <label class="temail" >Ім'я</label><br>
        <small
          class="helper-text-n"
          v-if="$v.name.$dirty && !$v.name.required"
        >Поле не повинно бути пустим
        </small>
        <small
          class="helper-text-n"
          v-else-if="($v.name.$dirty && !$v.name.minLength)"
        >Введіть ім'я
        </small>
    </div>
    <div class="input-field">
      <label class="temail" for="check">З правилами погоджуюсь</label><br><input id="check" type="checkbox" class="validate">
    </div>
  </div>
  </div>
  <div class="card-action">
    <div>
      <button id="register" class="submit" type="submit">
        Зареєструватись
      </button>
    </div><br>
    <p class="center">
      Маєте акаунт?
      <router-link to="/login" class="link">Увійти</router-link>
      <!-- <a class="link" href="/">Увійти</a> -->
    </p>
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
    email: '',
    password: '',
    name: ''
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    name: {required, minLength: minLength(3)}
  },
  methods: {
    async submitHandler(){
      if (this.$v.$invalid){
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      
      try{
        await this.$store.dispatch('register', formData)
        this.$router.push('/reserve')
      } catch (e) {}
    }
  }
}
</script>