<template>
	<div>
    	聊天
    	
    	<div class="sidebar">
    	<card></card>
    	<list></list>  
    	</div>
    	
    	<div class="mein">
    	<message></message>
    	<text></text>  
    	</div>

	</div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Card from '@/components/card';
  import List from '@/components/list';
  import Text from '@/components/text';
  import Message from '@/components/message';

  export default {
    name: "HelloWorld",
    components: { Card, List, Text, Message },
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
