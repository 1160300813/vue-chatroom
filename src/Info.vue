<script>
import { mapActions } from 'vuex'

import Card from '@/components/card';
import List from '@/components/list';
import Text from '@/components/text';
import Message from '@/components/message';
import Button from '@/components/button';


export default {
	name:"Info",
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

<template>
<div id="app">

    <div class="main">
        <List></List>
        <Button></Button>
    </div>
</div>
</template>

<style lang="less" scoped>
#app {
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;


    .main {
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
