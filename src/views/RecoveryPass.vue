<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">

      <div class="title">
        <img src="https://vuematerial.io/assets/logo-color.png">
        <div class="md-title">Recovery Password</div>
        <div class="md-body-1">type your email</div>
      </div>

      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="login.email" autofocus></md-input>
        </md-field>
      </div>


      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>

    </md-content>

    <div class="background" />
  </div>
</template>


<script>
export default {
  name: "RecoveryPass",
  data() {
    return {
      loading: false,
      login: {
        email: "",
      }
    };
  },
  methods: {
    auth() {
      // your code to login user
      // this is only for example of loading
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }
};
</script>

<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
