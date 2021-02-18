<template>
  <div>
      <input type="text" data-test="messageText" v-model="inputText">
      <button data-test="sendButton" @click="send">Send</button>
</div>  
</template>
<script>
export default {
     name: "NewMessageForm",
 data: () => ({
     inputText:""
 }),

 methods:{
     send(){
         this.$emit("send", this.inputText);
        this.inputText = ""
     }
 }

}
</script>