<template>
  <div id="app">
   <new-message-form @send="addMessage" />
   <message-list :messages="messages"/>
   <LoginPage/>
  </div>
</template>

<script>
import MessageList from './components/MessageList.vue'
import NewMessageForm from './components/NewMessageForm.vue'
import LoginPage from './components/LoginPage'


export default {
  name: 'App',
  components: {
   MessageList,
    NewMessageForm,
    LoginPage
  },
  data: () => ({
    messages:[]
  }),

  methods:{
    addMessage(text){
       this.messages.unshift(text)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
