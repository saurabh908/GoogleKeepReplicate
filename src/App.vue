<!--<template>
  <div id="app">
    <notes></notes>
  </div>
</template>-->

<template>
  <div>
    <create-note-form></create-note-form>
    <notes></notes>
  </div>
</template>

<script>
import Notes from './components/notes/Index'
import CreateNoteForm from './components/notes/Create'

  export default {
    components: {
      Notes,
      CreateNoteForm
    }
  }
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    font-family: sans-serif;
  }
  body{
    background: #eee;
    padding: 0 16px;
  }
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>
