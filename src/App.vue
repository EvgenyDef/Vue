<script setup>
import { reactive, ref } from 'vue'

const userInfo = reactive({
  name: '',
  surname: '',
  gender: '',
  password: '',
  confirmPassword: ''
});

const showPassword = ref(false); 

function printUser() {
  console.log(userInfo.name, 
              userInfo.surname, 
              userInfo.gender,
              userInfo.password,
              userInfo.confirmPassword);
}

function togglePassword(show) {
  showPassword.value = show
}
</script>

<template>
  <form id="registrationForm">
    <div class="form-group">
      <label for="firstName">Имя пользователя:</label>
      <input type="text" id="firstName" v-model="userInfo.name" name="firstName" required />
    </div>

    <div class="form-group">
      <label for="lastName">Фамилия пользователя:</label>
      <input type="text" id="lastName" v-model="userInfo.surname" name="lastName" required />
    </div>

    <div class="form-group">
      <label>Пол:</label>
      <div class="radio-group">
        <div class="radio-option">
          <input type="radio" id="male" v-model="userInfo.gender" name="gender" value="male" />
          <label for="male">Мужской</label>
        </div>
        <div class="radio-option">
          <input type="radio" id="female" v-model="userInfo.gender" name="gender" value="female" />
          <label for="female">Женский</label>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="password">Пароль:</label>
      <input
        :type="showPassword ? 'text' : 'password'"
        id="password"
        v-model="userInfo.password"
        name="password"
        required
        minlength="6"
      />
    </div>

    <div class="form-group">
      <label for="confirmPassword">Подтверждение пароля:</label>
      <input
        :type="showPassword ? 'text' : 'password'"
        id="confirmPassword"
        v-model="userInfo.confirmPassword"
        name="confirmPassword"
        required
        minlength="6"
      />
    </div>

    <div class="form-group">
      <button
        type="button"
        class="show-password-btn"
        @mousedown="togglePassword(true)"
        @mouseup="togglePassword(false)"
        @mouseleave="togglePassword(false)"
      >
        Показать пароль
      </button>
    </div>

    <button 
      v-show="userInfo.password === userInfo.confirmPassword && userInfo.password.length >= 6" 
      @click="printUser()"
      type="submit" 
      id="submit"
    >
      Зарегистрироваться
    </button>
  </form>
  
  <pre>
    Пользователь: {{userInfo.name}} {{userInfo.surname}}
    Пол: {{userInfo.gender ? userInfo.gender : ''}}   
  </pre>
</template>

<style scoped>
.form-group {
  margin-bottom: 15px;
  display: flex;
  justify-content: right;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
.radio-group {
  margin-top: 5px;
}
.radio-option {
  margin-bottom: 5px;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #45a049;
}
.show-password-btn {
  background-color: #f0f0f0;
  color: #333;
  margin-right: 10px;
}
.show-password-btn:hover {
  background-color: #e0e0e0;
}
</style>