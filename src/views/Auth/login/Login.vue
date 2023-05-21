<template>
  <section class="h-screen">
    <div class="h-full">
      <!-- Left column container with background-->
      <div
        class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-evenly"
      >
        <div
          class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12"
        >
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="w-full"
            alt="Sample image"
          />
        </div>

        <!-- Right column container -->
        <div>
          <section class="dark:bg-gray-900">
            <div
              class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
            >
              <div
                class="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
              >
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1
                    class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                  >
                    Sign in to your account
                  </h1>
                  <div class="space-y-4 md:space-y-6">
                    <div>
                      <label
                        for="username"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Your username</label
                      >
                      <input
                        type="username"
                        name="username"
                        id="username"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                        v-model="userLoginName"
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Password</label
                      >
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        v-model="password"
                      />
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label
                            for="remember"
                            class="text-gray-500 dark:text-gray-300"
                            >Remember me</label
                          >
                        </div>
                      </div>
                      <a
                        href="#"
                        class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >Forgot password?</a
                      >
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      @click="loginDefault()"
                    >
                      Sign in
                    </button>
                    <p
                      class="text-sm font-light text-gray-500 dark:text-gray-400"
                    >
                      Don’t have an account yet?
                      <a
                        href="#"
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >Sign up</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AuthApi from "../../../server/auth/authApi";

export default {
  data() {
    return {
      userLoginName: null,
      password: null,
      auth: new AuthApi(),
    };
  },
  methods: {
    async loginDefault() {
      console.log(this.userLoginName);
      const loginData = {
        userLoginName: this.userLoginName,
        password: this.password,
      };
      console.log(loginData);
      this.auth.loginApi(loginData).then((res) => {
        // if (res) {
        //   this.$router.push("/");
        // }
      });
    },
  },
};
</script>

<style></style>
