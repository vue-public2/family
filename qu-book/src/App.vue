<template>
  <div id="app">
    <Head></Head>
    <hr>
    <Nav></Nav>
    <hr>
    <Cont></Cont>
  </div>
</template>

<script>
import Head from './pages/header.vue' ;
import Nav from './pages/nav.vue' ;
import Cont from './pages/content.vue';
export default {
    components:{
      Head , Nav , Cont
    }
}
</script>


<style lang="less" scoped>
  @import '~style/index.less' ;

</style>
