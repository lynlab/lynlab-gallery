<template>
  <div class="login">
    <h1>갤러리에 로그인</h1>
    <form>
      <input name="password" type="password" placeholder="비밀번호" v-model="form.password">
      <button @click.prevent="submit">로그인</button>
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
