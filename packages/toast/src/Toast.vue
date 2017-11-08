<template>
  <transition name="tpo-toast">
    <div class="tpo-toast-mask" v-if="visible" :class="{'tpo-toast-theme-light': theme === 'Light'}" >
      <div class="tpo-toast-box" :style="{ width: toastw }">
        <span v-html="content"></span>
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  props: {
    theme: {
      default: 'Dark',
      type: String
    },
    content: {
      default: '提示',
      type: String
    },
    iconClass: {
      default: '',
      type: String
    },
    toastw:{
       default: '',
       type: String
    }
  },
  components: {

  },
  data(){
    return {
      visible: false
    }
  }
}
</script>

<style>
.tpo-toast-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 29999;
  transition: opacity .3s linear;
}
.tpo-toast-mask .tpo-toast-box {
  position: absolute;
  overflow: hidden;
  z-index: 30000;
  top: 50%;
  left: 50%;
  max-width: 93%;
  box-sizing: border-box;
  font-size: 0.4266666666666667rem;
  line-height: 0.6rem;
  transform: translate(-50%, -50%);
  outline: none;
  padding: 0.4266666666666667rem 0.5333333333333333rem;
  text-align: center;
  background: rgba(33, 33, 33, 0.9);
  border-radius: 8px;
  color: #ffffff;
}
.tpo-toast-mask .tpo-toast-box-haveicon {
  width: 3.2rem !important;
  padding: 0.7466666666666667rem 0.5333333333333333rem;
  text-align: center;
}
.tpo-toast-mask .tpo-toast-icon {
  display: block;
  margin: 0 auto;
  margin-bottom: 0.32rem;
  vertical-align: sub;
}

.tpo-toast-theme-light {
  background: rgba(0, 0, 0, 0.4) !important;
}
.tpo-toast-theme-light .tpo-toast-box {
  background: #FFFFFF;
  color: #222222;
}
.tpo-toast-theme-light .tpo-toast-box-haveicon {
  width: 7.466666666666667rem !important;
  text-align: center;
  padding: 0.4266666666666667rem 0.5333333333333333rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tpo-toast-theme-light .tpo-toast-icon {
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 0;
}
.tpo-toast-theme-light .success {
  height: 0.64rem;
  background-size: 0.64rem auto;
}

.tpo-toast-enter-active, .tpo-toast-leave-active {
  transition: opacity 0.5s;
}

.tpo-toast-enter, .tpo-toast-leave-active {
  opacity: 0;
}

</style>
