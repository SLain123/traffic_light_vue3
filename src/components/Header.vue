<template>
  <header>
    <div class="logo">
      <router-link to="/">Traffic Signal</router-link>
    </div>
    <nav>
      <router-link class="green" to="/green/">Green</router-link>
      <router-link class="yellow" to="/yellow/">Yellow</router-link>
      <router-link class="red" to="/red/">Red</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: wheat;
  border-radius: 5px;
}

.logo a {
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: #333;
}

nav {
  display: flex;
  justify-content: space-between;
  width: 30%;

  & a {
    font-size: 20px;
    opacity: 0.8;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      opacity: 1;
    }
  }
}

.green {
  color: green;
}

.yellow {
  color: yellow;
}

.red {
  color: red;
}
</style>
