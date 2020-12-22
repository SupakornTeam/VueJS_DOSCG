<template>
  <div class="layout-default-container">
    <Layout>
      <Sider ref="menuSide" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" class="layout-default-sider">
        <div class="layout-default-logo"></div>
        <appSlider
          :menu-list="menuList"
          :active-name="pagePath"
          :open-names="openNames"
          @on-select="turnToPage"
          :isCollapsed="isCollapsed"
        />
      </Sider>
      <Layout class="layout-default-body-right">
        <appHeader 
          :open-names="openNames" @toggleMenu="changeMenu"/>
        <Breadcrumb v-if="breadcrumb.length > 1" :data="breadcrumb" />
        <Content class="layout-default-body-right-content">
          <router-view />
        </Content>
        <Footer class="layout-default-body-right-footer">Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import appHeader from "./components/header/appHeader";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import appSlider from "./components/slider/appSlider";

export default {
  components: {
    appHeader,
    Breadcrumb,
    appSlider
  },
  data() {
    return {
      isCollapsed: false,
      defaultOpenNames: ''
    };
  },

  computed: {
    menuList() {
      return this.$store.state.app.menuList || [];
    },

    pagePath() {
      return this.$store.state.page.pagePath || "";
    },

    breadcrumb() {
      return this.computeBreadCrumbList(this.pagePath, this.menuList);
    },

    openNames() {
      return this.defaultOpenNames ? [this.defaultOpenNames] : [];
    }
  },

  methods: {
    turnToPage(path) {
      this.$router.push({
        path
      });
    },
    changeMenu() {
      this.$refs.menuSide.toggleCollapse();
    },
    computeBreadCrumbList(currentPath = "", menuList = []) {
      let breadCrumbList = [];
      menuList.forEach(item => {
        if (item.submenu) {
          item.submenu.forEach(subItem => {
            if (currentPath === subItem.path) {
              breadCrumbList.push(item.label, subItem.label);
            }
          });
        } else {
          if (currentPath === item.path) {
            breadCrumbList.push(item.label);
          }
        }
      });
      return breadCrumbList;
    }
  }
};
</script>
<style lang="less" scoped>
@siderBackgroundColor: #061529;
.layout-default {
  border: 1px solid #d7dde4;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  &-body {
    display: flex;
    flex-direction: row;
    &-right {
      min-height: 100%;
      margin-bottom: 32px;
      &-content {
        margin: 24px 32px;
        padding: 24px;
        background: #fff;
        flex: 0 1 auto;
      }
      &-footer {
        text-align: center;
      }
    }
  }
  &-container {
      height: 100%;
      overflow-y: scroll;
  }
  &-sider {
    width: 240px;
    background: @siderBackgroundColor;
  }
  &-logo {
    width: 70px;
    height: 64px;
    border-radius: 3px;
    position: relative;
    top: 6px;
    left: 10px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("./images/logo.png");
  }
}
.ivu-layout-has-sider {
    min-height: 100%;
}
</style>
