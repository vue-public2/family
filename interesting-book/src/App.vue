<template>
  <div id="app">
      <Head></Head>
      <hr>
      <Nav></Nav>
      <hr>
      <Content></Content>
  </div>
</template>

<script>
import Head from './pages/header'
import Nav from './pages/nav'
import Content from "./pages/content";
export default {
  components : {
    Head , Nav , Content
  }
}
</script>


<style>

</style>
