<template>
  <div id="checkInfo">
    <el-row class="checkInfo-title" type="flex" justify="space-between">
      <el-col :span="5">
        <span class="check-basetitle"  >查看楼栋信息</span>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" size="small" >确定</el-button>
        <el-button  size="small" @click="back" >取消</el-button>
      </el-col>
    </el-row>
    <el-form :model="sels" ref="form" label-width="100px" size="small" class="checkInfo-form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="名称:">
            <el-input v-model="sels.build_name">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col v-if="builds" :span="12">
           <el-form-item label="梯户比:">
          			<el-input class="floor"  v-model.number="floorId"></el-input>
            <font>梯</font>
            		<el-input class="floor" v-model.number="houseId"></el-input>
            <font>户</font>
          </el-form-item>
          
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="预售许可证:">
            <el-input v-model="sels.sale_permit">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发证时间:">
            <div class="block">
              <el-date-picker v-model="sels.permit_time" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="开盘方式:">
            <el-input v-model="sels.open_way">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开盘时间:">
            <div class="block">
              <el-date-picker v-model="sels.open_time" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="交房时间:">
            <div class="block">
              <el-date-picker v-model="sels.handing_room_time" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单元数:">
            <el-input v-model="sels.unit_num">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="楼上层数:">
            <el-input v-model="sels.down_floor_num">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="楼下层数:">
            <el-input v-model="sels.uppper_floor_num">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="梯户比:">
            <el-select class="floor" v-model="sels.project_id">
            		<el-option label="1" :value="1"></el-option>
         				<el-option label="2" :value="2"></el-option>
            </el-select>
            <font>梯</font>
            <el-select class="floor" v-model="sels.state">
            		<el-option label="1" :value="1"></el-option>
         				<el-option label="2" :value="2"></el-option>
            </el-select>
            <font>户</font>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总户数:">
            <el-input v-model="sels.total_house_num">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: "checkInfo",
  data() {
    return {
     
    }
  },
  created(){
 			//load();等待接口，未对接
 			this.getBuild();
 		
  },
  computed:{
 			...mapState({
 			project_id:state=>state.checkInfo.sels,
 			builds:state=>state.checkInfo.builds,
 			totalData:state=>state.checkInfo.totalData,
 			sels:state=>state.checkInfo.sels
 		})
  },
  methods:{
  	 back(){
  	 		this.$router.push({path:'/index/generalLayout'});
  	 },
  	 load(){//修改差接口，未对接
  	 	let url=this.Rooturl+""
  	 	 	this.$http.get(url,{
  	 	 		params:{
  	 	 			project_id:this.project_id
  	 	 		}
  	 	 	}).then(res=>{this.ruleFormcheck=res.data})
  	 },
  	 add(){//修改差接口，未对接
  	 	 	let url=this.Rooturl+""
  	 	 	this.$http.get(url,{
  	 	 		params:{
  	 	 			project_id:this.project_id,
  	 	 			data:ruleFormcheck
  	 	 		}
  	 	 	}).then(res=>{
  	 	 		if(res.code==200){
  	 	 			this.$router.push({path:'/index/generalLayout'});
  	 	 		}else{
  	 	 			this.$message.error("网络错误")
  	 	 		}
  	 	 	})
  	 },
  	 ...mapActions([
  	 	 'getBuild'
  	 ])
  	
  },
  mounted(){
  		console.log(this.totalData);
  }
}
</script>
<style scoped lang="scss">
#checkInfo .el-date-picker ,.el-select{
  width: 275px !important;
  text-align: center;
}
#checkInfo {.el-option{
	 text-align: center!important;
}
.checkInfo-form {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 150px auto;
  width: 750px;
  padding: 0px 35px 10px 35px;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 100% !important;
}
.checkInfo-title {
  height: 40px;
  line-height: 40px;

  background-color: #545c64;
}
.check-basetitle {
  display: block;
  margin-left: 20px;
  color: #fff;
}
.floor{
	width: 115px !important;
}}
</style>


