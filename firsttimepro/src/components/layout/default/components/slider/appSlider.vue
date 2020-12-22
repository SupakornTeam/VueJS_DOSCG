<template>
  <Menu
    :active-name="activeName"
    :open-names="openNames"
    :theme="theme"
    width="auto"
    @on-select="handleSelect"
    :mode="sliderMode"
    :class="menuitemClasses"
  >
    <template v-for="(menu, i) in menuList">
      <!-- 展开有子菜单 -->
      <Submenu v-if="!isCollapsed && menu.submenu" :key="i" :name="menu.path">
        <template v-slot:title>
          <Icon :type="menu.icon" v-if="menu.icon"></Icon>
          <span>{{ menu.label }}</span>
        </template>
        <MenuItem
          v-for="(item, j) in menu.submenu"
          :key="j"
          :name="item.path"
        >
          <Icon :type="item.icon" v-if="item.icon"></Icon>
          <span>{{ item.label }}</span>
        </MenuItem>
      </Submenu>
      <!-- 展开没有子菜单 -->
      <MenuItem v-else-if="!isCollapsed && !menu.submenu" :key="i" :name="menu.path">
        <Icon :type="menu.icon" v-if="menu.icon"></Icon>
        <span>{{ menu.label }}</span>
      </MenuItem>
      <!-- 未展开有子菜单 -->
      <Dropdown v-else-if="isCollapsed && menu.submenu" :key="i" placement="right-start" class="collapsed-menu-dropdown">
        <MenuItem :name="menu.path" :to="menu.path" >
          <Icon :type="menu.icon" v-if="menu.icon"></Icon>
          <span>{{ menu.label }}</span>
        </MenuItem>
        <DropdownMenu slot="list">
          <DropdownItem v-for="(submenu, index) in menu.submenu" :key="index" style="padding: 0 0; background-color:#515a6e;">
            <MenuItem :name="submenu.path">
              <Icon :type="submenu.icon" v-if="submenu.icon"></Icon>
              <span>{{ submenu.label }}</span>
            </MenuItem>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <!-- 未展开无子菜单 -->
      <Tooltip v-else-if="isCollapsed" :content="menu.label" placement="right" :key="i">
        <MenuItem :name="menu.path" :to="menu.path">
          <Icon :type="menu.icon" v-if="menu.icon"></Icon>
          <span>{{ menu.label }}</span>
        </MenuItem>
      </Tooltip>
    </template>
  </Menu>
</template>

<script>
export default {
  props: {
    openNames: {
      type: Array,
      default() {
        return [];
      }
    },
    sliderMode: {
      type: String,
      default: 'vertical'
    },
    theme: {
      type: String,
      default: 'dark' 
    },
    isCollapsed: {
      type: Boolean,
      default: false 
    },
    menuList: {
      type: Array,
      default() {
        return [];
      }
    },
    activeName: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      menuitemClasses: ['layout-primary-menu-item']
    };
  },
  watch: {
    isCollapsed(val) {
      val ? this.menuitemClasses = ['layout-primary-menu-item', 'layout-primary-menu-item-collapsed-menu'] : this.menuitemClasses = ['layout-primary-menu-item']
    }
  },
  methods: {
    /**
     * @param {String} name select item name
     */
    handleSelect(name) {
      this.$emit("on-select", name);
    }
  }
};
</script>
<style lang="less">
@menuBackgroundColor: #061529;
.layout-primary-menu-item.ivu-menu-dark {
  background: @menuBackgroundColor;
  span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
}
.layout-primary-menu-item.ivu-menu-dark.layout-primary-menu-item-collapsed-menu {
    span {
      width: 0px;
      transition: width .2s ease;
    }
    i {
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
    }
    .ivu-menu-submenu-title-icon:before {
      content: '';
      transition: width .2s ease;
    }
    .collapsed-menu-dropdown {
      width: 100%;
      .ivu-select-dropdown {
        width: auto;
        padding: 0;
        overflow: hidden;
        border-radius: 4px;
        span {
          width: 100%;
        }
      }
    }
    .ivu-tooltip {
      width: 100%;
    }
  }
</style>
