<script>
  import { mapState,mapActions } from 'vuex'
  export default {
    name: 'wt-button',
    computed: {
      ...mapState([
        'filterKey',
        'user'
      ]),
    },
    methods: {
      // 拼接class
      className() {
        return this.type + ' ' + this.size;
      }
    }
  };
</script>

<template>
  <div class="wt-button" >
    
  </div>
</template>

<style scoped lang="less" >
.confirm {
  border: none;
  color: #fff;
  width: 100%;
  padding: 1rem 0;
  border-radius: 4px;
  font-size: 1.6rem;
  background: #5da1fd;
  &:focus {
    outline: none;
  }
}
</style>
