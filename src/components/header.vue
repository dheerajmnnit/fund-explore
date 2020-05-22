<template>
    <header class="container py-4">
        <div class="inner">
            <h4 class="brand text-uppercase">Funds explore page</h4>
            <nav class="nav nav-list justify-content-center">
                <router-link class="nav-link" exact to="/">Home</router-link>
                <router-link class="nav-link" exact to="/funds">Explore</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.brand {
    color: #112e4b;
}

.nav-list .nav-link {
    padding: 0.25rem 0;
    font-weight: 600;
    background-color: transparent;
    border-bottom: 0.25rem solid transparent;
}

.nav-list .nav-link:hover,
.nav-list .nav-link:focus {
    border-bottom-color: #2a2a91;
}

.nav-list .nav-link + .nav-link {
    margin-left: 1rem;
}

.nav-list .router-link-active {
    color: #2a2a91;
    border-bottom-color: #2a2a91;
}

@media (min-width: 48em) {
    .brand {
        float: left;
    }
    .nav-list {
        float: right;
    }
}
</style>