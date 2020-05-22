<template>
  <div class="home container">
    <div class="row align-items-center justify-content-center" style="min-height:30rem;">
      <div class="col-md-12">
        <h3 class="text-center">
          Funds List and Detail Assignment
          <br />
          <small
            class="text-muted"
          >This is a front-end exercise. In this exercise showing data in table and for particular fund detail in detail page.</small>
        </h3>
        <br />
        <h5 class="text-center mt-4">
          <router-link class="nav-link" exact to="/funds">Go to Funds List Page</router-link>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>
