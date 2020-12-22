<template>
  <div class="hello">
  
  <h3>Hi</h3><br>
    <hr>
    <h1>{{ msg }}</h1>
    <hr>
    <p>
      Supakorn <br>
      This is first time use vue.js and first time use Node.js <br>
      I think Node.js vue.js so good But I must to Learn <br>
    </p>
    <h3>EDUCATION</h3>
    <p>
    Application Development 
     </p>
    <h3>ACTIVITIES</h3>
     <p>
     Football , Guitar and Other
      </p>
    <h3>KEY COURSES</h3>
   <p>
    -	Computer Networking and Security<br>
    -	Database Management System<br>
    -	Parallel Processing<br>
    -	Mobile Application, iOS, (Android Flutter) (But Good at iOS)<br>
    -	Microprocessor and interface (AVR)<br>
    -	Visual Programming (C#.NET, ABAP*)<br>
   </p>
    <hr>
  </div>


</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
