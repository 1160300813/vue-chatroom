<template>
    <div>
    	
    	
    	
    	<div class="mein">
        
    	<list></list>
    	<button>创建群聊</button>
    	</div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Card from '@/components/card';
  import List from '@/components/list';
  import Text from '@/components/text';
  import Message from '@/components/message';
  import Button from '@/components/button';
    export default {
        name: "HelloWorld2",
    components: { Card, List, Text, Message,Button },
    methods: {
      ...mapActions({
        initData: 'initData' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
      })
    },
    created () {
      this.initData();
    }
  
}
 </script> 


<script>

// var roomName = 'The Third Room';

//     var chatSocket = new WebSocket(
//         'ws://' + window.location.host +
//         '/ws/chat/' + roomName + '/');

//     chatSocket.onmessage = function (e) {
//         console.log(e)
//         var data = JSON.parse(e.data);
//         var message = data['message'];
//         document.querySelector('#chat-log').value += (message + '\n');
//     };

//     chatSocket.on = function (e) {
//         console.log(e)
//     };


//     chatSocket.onclose = function (e) {
//         console.error('Chat socket closed unexpectedly');
//     };

//     document.querySelector('#chat-message-input').focus();
//     document.querySelector('#chat-message-input').onkeyup = function (e) {
//         if (e.keyCode === 13) {  // enter, return
//             document.querySelector('#chat-message-submit').click();
//         }
//     };

//     document.querySelector('#chat-message-submit').onclick = function (e) {
//         var messageInputDom = document.querySelector('#chat-message-input');
//         var message = messageInputDom.value;
//         chatSocket.send(JSON.stringify({
//             'message': message
//         }));

//         messageInputDom.value = '';
//     };

</script>

<style lang="less" scoped>
  #app {
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar, .mein {
      height: 100%;
    }
    .sidebar {
      float: left;
      width: 200px;
      color: #f4f4f4;
      background-color: #2e3238;
    }
    .mein {
      position: relative;
      overflow: hidden;
      background-color: #eee;
    }
    .text {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    }
    .message {
      height: ~'calc(100% - 160px)';
    }
  }
</style>
