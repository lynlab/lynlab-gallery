<template>
  <div class="login">
    <h1>갤러리에 로그인</h1>
    <form>
      <input id="password" name="password" type="password" placeholder="비밀번호" v-model="form.password">
      <button id="submit" @click.prevent="submit">로그인</button>
    </form>
  </div>
</template>

<script>
import { auth } from '../../lib/lynlab';

export default {
  name: 'Login',
  methods: {
    submit() {
      auth(this.form.password)
        .then((result) => {
          if (result) {
            this.$session.set('state-auth', true);
            this.$router.push('/');
          } else {
            alert('비밀번호가 틀립니다.'); // eslint-disable-line no-alert
          }
        });
    },
  },
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style>
  .login {
    padding: 40% 12% 0 12%;
    background-color: #fafafa;
    margin: 0;
    text-align: center;
  }

  form #password {
    height: 2rem;
    width: 100%;
    font-size: large;
    border: #f0f0f0 1px solid;
    text-align: center;
  }

  form #submit {
    height: 2rem;
    width: 30%;
    margin: 0.2rem auto 0 auto;
    font-size: large;
    border: #f0f0f0 1px solid;
    text-align: center;
  }

  h2 {
    font-weight: lighter;
  }
</style>
