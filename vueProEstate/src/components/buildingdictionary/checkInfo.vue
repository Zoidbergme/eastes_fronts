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
    <el-form :model="ruleFormcheck" ref="form" label-width="100px" size="small" class="checkInfo-form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="名称:">
            <el-input v-model="ruleFormcheck.name">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="绑定楼栋:">
         				<el-select v-model="ruleFormcheck.building">
         					 <el-option label="1栋" :value="27"></el-option>
         					 <el-option label="2栋" :value="28"></el-option>
         				</el-select>  
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="预售许可证:">
            <el-input v-model="ruleFormcheck.permit">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发证时间:">
            <div class="block">
              <el-date-picker v-model="ruleFormcheck.issueTime" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="开盘方式:">
            <el-input v-model="ruleFormcheck.openWay">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开盘时间:">
            <div class="block">
              <el-date-picker v-model="ruleFormcheck.openTime" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="交房时间:">
            <div class="block">
              <el-date-picker v-model="ruleFormcheck.othersTime" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单元数:">
            <el-input v-model="ruleFormcheck.unit">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="楼上层数:">
            <el-input v-model="ruleFormcheck.floorNumber">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="楼下层数:">
            <el-input v-model="ruleFormcheck.downstairsNumber">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="梯户比:">
            <el-select class="floor" v-model="ruleFormcheck.floorId">
            		<el-option label="1" :value="1"></el-option>
         				<el-option label="2" :value="2"></el-option>
            </el-select>
            <font>梯</font>
            <el-select class="floor" v-model="ruleFormcheck.houseId">
            		<el-option label="1" :value="1"></el-option>
         				<el-option label="2" :value="2"></el-option>
            </el-select>
            <font>户</font>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总户数:">
            <el-input v-model="ruleFormcheck.households">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "checkInfo",
  data() {
    return {
      ruleFormcheck: {
        name: "",
        building: "1栋",
        permit: "",
        issueTime: "",
        openWay: "",
        openTime: "",
        othersTime: "",
        unit: "",
        floorNumber: "",
        downstairsNumber: "",
        ladderRatio: "",
        households: "",
        houseId:1,
       	floorId:1
      }
    }
  },
  created(){
 			//load();等待接口，未对接
  },
  computed:{
 			...mapState({
 			project_id:state=>state.beConfirmed.sels
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
  	 }
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


