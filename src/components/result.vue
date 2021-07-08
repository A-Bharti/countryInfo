<template>
  <p>{{load}}</p>
<div id="main">




  <img :src="db.data[0].flag" />
  <p>Name: {{ db.data[0].name }}</p>
  <p>Capital: {{ db.data[0].capital }}</p>
  <p>Continent: {{ db.data[0].region }}</p>
  <p>Population: {{ db.data[0].population }}</p>
  <p>Area: {{ db.data[0].area }}</p>
  <p>TimeZone: {{ db.data[0].timezones[0] }}</p>
  <p>Neighbours:</p>
    <ol>
       <li v-for="count in db.data[0].borders">{{count}}</li> 
    </ol>


 
  <p>Currency Name: {{ db.data[0].currencies[0].name }} | code: {{ db.data[0].currencies[0].code }} | Symbol: {{ db.data[0].currencies[0].symbol }}</p>
  <p>Language: {{ db.data[0].languages[0].name }}</p>
  <p>Calling Code: {{ db.data[0].callingCodes[0] }}</p>
</div>
</template>
<script>
import axios from "axios";

const Result = {
  data() {
    return {
        db: "Getting data...",
    };
  },
  computed: {
    getName() {
      return this.$store.getters.getName;
    },
    demo(){
        var x=this.getName;
        return x;
    },
    load() {
      axios
        .get(
          "https://restcountries.eu/rest/v2/name/" +
            this.getName            
        )
        .then((response) => {
          this.db = response;
          console.log(response);
        });
      return null;
    }
  },
};

export default Result;
</script>

<style >
img{
    width:300px;
    height: 300px;
    border:solid black;
    float: right;
}
#main{
    /* text-align: right; */
    
    font-family: cursive;
    margin: auto;
    width:80%;
    background-image: radial-gradient(yellow, rgb(245, 247, 157));
    padding:10px;
    box-shadow:0px 4px 8px 0px rgba(0,0,0,0.7);
}
p{
    /* width:40%; */
    font-size: 15px;
}
</style>
