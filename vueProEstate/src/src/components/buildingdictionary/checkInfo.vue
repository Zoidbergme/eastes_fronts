<template>
  <div id="checkInfo">
    <el-row class="checkInfo-title" type="flex" justify="space-between">
      <el-col :span="5">
        <span class="check-basetitle"  >查看</span>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" size="small" >确定</el-button>
        <el-button  size="small" >取消</el-button>
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
            <el-input v-model="ruleFormcheck.building">
            </el-input>
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
            <el-input v-model="ruleFormcheck.ladderRatio">
            </el-input>
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
        building: "",
        permit: "",
        issueTime: "",
        openWay: "",
        openTime: "",
        othersTime: "",
        unit: "",
        floorNumber: "",
        downstairsNumber: "",
        ladderRatio: "",
        households: ""
      }
    }
  },
  created(){
  	
  },
  computed:{
 			...mapState({
 			project_id:state=>state.beConfirmed.sels
 		})
  },
  methods:{
  	
  }
};
</script>
<style scoped>
#checkInfo el-date-picker {
  width: 275px !important;
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
</style>


