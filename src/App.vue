<template>

<div id="comp1">
<p id="title">Country Information</p>
<input id="inp" type="text" @change="setName" placeholder="type Country Name.. ">
<router-link to="/search" id="ser">search</router-link>
</div>

<hr>
  
  <router-view />

</template>
<script>
export default{
 methods:{
   setName(event){
     console.log(event.target.value)
    this.$store.dispatch('changeName',event.target.value);
   }
 }
}
</script>

<style>
body{

}

#comp1{
  
  text-align: center;
}
#title{
  display: inline-block;
  margin-right:50px;
  font-weight: bolder;
  font-size: 20px;

}
#inp{
  width:300px;
  height:20px;
border-radius: 20px;
}
#ser{
  text-decoration: none;
  margin-left: 20px;
  font-size: 20px;
  /* font-weight: bold; */
  background: #1B98F5;
  color: white;
  border-radius: 5px;
  padding-top: 2px;
  padding-bottom:2px;
  padding-left: 10px;
  padding-right: 10px;
}

</style>
