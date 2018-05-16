<template>
    <div id="index">
        <el-container>
            <el-header></el-header>
            <el-container>
                <el-aside width="201px">
                    <el-menu :router="true" default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                        <el-submenu v-for="menu in menulist" v-bind:key="menu.id" :index="menu.menucode" v-if="menu.menutype===1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{menu.menuname}}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item v-for="submenu in menu.submenulist" v-bind:key="submenu.id" :index="submenu.submenurouter">{{submenu.submenuname}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item v-for="menu in menulist" v-bind:key="menu.id" :index="menu.menurouter" v-if="menu.menutype===2"><i class="el-icon-location"></i>{{menu.menuname}}</el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      menulist: []
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    getMenuList() {
      let data = {};
      let url=""
      this.$http
        .get("../../static/mockdata/menulist.json")
        .then(res => {
          this.menulist = res.data;
        })
        .catch(res => {});
    }
  }
};
</script>

<style scoped>
#index {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}
.el-menu-vertical-demo {
  height: 100%;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0px 0 20px 0 !important;
}
.el-form{
	margin-top:0px!important;
}
.examine-title,#projectImg,#apartmentInfo,#dynamicList,#allCustomer,#beConfirmed,#effective,#invalid,#dealed{
	padding-top:10px!important;
}
.el-breadcrumb{
	padding-left:10px!important;
}
</style>

