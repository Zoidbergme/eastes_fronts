<template>
    <div id="breadcrumb">
        <el-row class="title">
            <el-col>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item v-for="(name,index) in breadcrumbName" v-bind:key="name.id" :to="name.router">
                        <i class="el-icon-message" v-if="index===0"></i>
                        <span @click="addColor($event)" style="cursor: pointer;" v-bind:style="[{fontWeight:src==name.breadcrumbname?'700':'400'}]">{{name.breadcrumbname}}</span>
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
  name: "CommissionManageHeader",
  data(){
  	return{
  		
  	}
  },
  props: {
    breadcrumbName: Array
  },
  computed:{
  	...mapState({
  		src:state=>state.CommissionManage.ele
  	})
  },
  methods:{
  	addColor(e){
     let src=e.currentTarget;
     this.changeCommissionManage(src.innerHTML);
   },
   ...mapMutations([
   		'changeCommissionManage'
   ])
  },
  mounted(){
  	
  }
};
</script>

<style scoped>
.title {
  height: 30px;
  line-height: 30px;
 
}
.el-breadcrumb {
  line-height: 30px;
  padding-left: 20px;
}
.el-breadcrumb__inner span {
  font-weight: 700;
}
.el-breadcrumb__inner i {
  margin: 0px 5px 0px 0px;
}
</style>