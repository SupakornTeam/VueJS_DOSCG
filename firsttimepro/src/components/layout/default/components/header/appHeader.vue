<template>
  <div class="layout-default-header">
    <Header>
      <Icon @click.native="triggerCollapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
      <div class="layout-default-header-nav">
        <appSlider 
          :open-names="openNames" 
          :menu-list="menuList"
          :active-name="pagePath"
          @on-select="turnToPage"
          sliderMode="horizontal" 
          theme="light" 
          class="layout-default-header-nav-menu"/>
        <user class="layout-default-header-nav-user"></user>
      </div>
    </Header>
  </div>
</template>

<script>
import user from "../user";
import appSlider from '../slider/appSlider';
export default {
  props: {
    openNames: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    appSlider,
    user
  },
  computed: {
    rotateIcon() {
      return [
        'menu-icon',
        this.isCollaspsed ? 'rotate-icon' : ''
      ]
    },
    menuList() {
      return this.$store.state.nav.menuList || [];
    },
    pagePath() {
      return this.$store.state.page.pagePath || "";
    }
  },
  data() {
    return {
      isCollaspsed: false
    };
  },
  methods: {
    triggerCollapsedSider() {
      this.isCollaspsed = !this.isCollaspsed;
      this.$emit('toggleMenu', !this.isCollaspsed);
    },
    turnToPage(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>
<style lang="less">
.layout-default-header {
  border-bottom: 1px solid #ccc;

  &-nav {
    display: inline-block;
    float: right;
    margin: 0 40px;
    &-user {
      display: inline-block;
      float: right;
    }
    &-menu {
      display: inline-block;
      float: left;
    }
    &-menu:after {
     background: transparent!important;
   }
  }

  .ivu-layout-header {
    background: #fff;
    padding: 0 !important;
    height: 64px;
    line-height: 64px;
  }
  .ivu-menu-dark {
    background: #000;
  }
  .ivu-menu-horizontal {
    height: 64px;
    line-height: 64px;
  }
}
.rotate-icon{
  transform: rotate(-90deg);
}
.menu-icon{
  transition: all .3s;
}
</style>
