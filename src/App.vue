<template>
  <main>
    <nav>
      <router-link to="/SobreMi">Sobre Mi</router-link> |
    <router-link to="/Curriculum">Curriculum</router-link> |
    <router-link to="/Proyecto">Proyecto</router-link> |
    <router-link to="/Contacto">Contacto</router-link>
    </nav>
  <router-view/>
  </main>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
