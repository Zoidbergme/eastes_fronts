<template>
  <div id="#AddInfo">
    <el-row class="checkInfo-title" type="flex" justify="space-between">
      <el-col :span="5">
        <span class="check-basetitle"  >新增楼栋信息</span>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="add" size="small" >确定</el-button>
        <el-button  size="small" @click="back" >取消</el-button>
      </el-col>
    </el-row>
    <el-form :model="ruleFormcheck" ref="form" label-width="100px" size="small" class="checkInfo-form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="名称:">
            <el-input v-model="build_name">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="绑定楼栋:">
         				<el-select ref="select" v-model="ruleFormcheck.ys_build_id">
         					 <el-option v-for="(item,idx) in YsBuild"  :key="idx"  :value="item.build_id" :label="item.build_name" ></el-option>
         				</el-select>  
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="预售许可证:">
            <el-input v-model="ruleFormcheck.sale_permit">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发证时间:">
            <div class="block">
              <el-date-picker v-model="ruleFormcheck.permit_time" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="开盘方式:">
            <el-input v-model="ruleFormcheck.open_way">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开盘时间:">
            <div class="block">
              <el-date-picker v-model="ruleFormcheck.open_time" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="交房时间:">
            <div class="block">
              <el-date-picker v-model="ruleFormcheck.handing_room_time" type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="unit_num" label="单元数:">
            <el-input v-model.number="ruleFormcheck.unit_num">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item prop="upper_floor_num" label="楼上层数:">
            <el-input  v-model.number="ruleFormcheck.upper_floor_num">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="down_floor_num" label="楼下层数:">
            <el-input v-model.number="ruleFormcheck.down_floor_num">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="梯户比:">
          			<el-input class="floor"  v-model.number="floorId"></el-input>
            <font>梯</font>
            		<el-input class="floor" v-model.number="houseId"></el-input>
            <font>户</font>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="总户数:">
            <el-input v-model="ruleFormcheck.total_house_num">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
  name: "AddInfo",
  data() {
  	const checkNum=(rule,value,callback)=>{
  			 if(value != null && value != "") {
             if(!(typeof(value)==="number"&&value%1==0)) {
                 callback(new Error('请输入正整数!'))
             }else if(value>9999){
                  callback(new Error("不能大于9999"))
             }else{
             	callback()
             }
         }
	 			 else if(!value){
	 	 				callback(new Error("不能为空"));
	 	 		 }
         else{
              callback();
         }
  	};
    return {
      ruleFormcheck: {
 				ys_build_id:'',
  		  sale_permit:'',
 		    permit_time:'',
		    open_way:'',
		    open_time:'',
		    handing_room_time:'',
		    unit_num:'',
		    upper_floor_num:'',
 		    down_floor_num:'',
		    ladder_ratio:'',
		    total_house_num:''
      },
      floorId:'',
      build_name:'',
      houseId:'',
      canUpload:true,
      rules:{
      	down_floor_num:[
      		{validator:checkNum,trigger:'blur'}
      	],
      	upper_floor_num:[
      		{validator:checkNum,trigger:'blur'}
      	],
      	total_house_num:[
      		{validator:checkNum,trigger:'blur'}
      	],
      	floorId:[
      		{validator:checkNum,trigger:'blur'}
      	],
      	houseId:[
      		{validator:checkNum,trigger:'blur'}
      	],
      	handing_room_time:[
      		{type:'date',required:true,message:'交房时间错误',trigger:'blur'}
      	]
      }
    
    }
  },
  created(){
 		this.getYsBuild();
  },
  computed:{
 			...mapState({
 			YsBuild:state=>state.generalLayout.YsBuild,
 			formData:state=>state.AddInfo.formData
 		})
  },
  methods:{
  	 back(){
  	 		this.$router.push({path:'/index/generalLayout'});
  	 },
 		 ...mapActions([
 		 		'getYsBuild','UpdateBuildDetail'
 		 ]),
 		 add(){
 		 		if(this.canUpload){
 		 				this.ruleFormcheck.ys_build_id=this.$refs.select.value;
 		 				this.ruleFormcheck.ladder_ratio=`${this.floorId},${this.houseId}`;
 		 			  this.UpdateBuildDetail(this.ruleFormcheck);
 		 				this.ruleFormcheck=this.formData;
 		 		}
 		 
 		 }
  }
 }

</script>
<style scoped>
#AddInfo .el-date-picker ,.el-select{
  width: 275px !important;
  text-align: center;
}
.el-option{
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
}
</style>


