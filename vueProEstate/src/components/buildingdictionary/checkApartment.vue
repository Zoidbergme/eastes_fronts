<template>
    <div id="checkApartment">
        <el-container>
            <el-header>
                <el-row class="CheckApartinfo" type="flex" justify="space-between">
                    <el-col :span="5">
                        <span class="CheckApart-title">查看户型信息</span>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" @click="back" size="small" >关闭</el-button>
                    </el-col>
                </el-row>
            </el-header>
            <el-main class="check-con">  
                <el-form :model="ruleFormcheckApart" ref="form" label-width="100px" class="checkInfo-form">
                    <el-form-item label="户型编号:">
                        <el-input v-model="ruleFormcheckApart.houseNum">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="户型:">
                        <el-input v-model="ruleFormcheckApart.house">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="产权面积:">
                        <el-col :span="11">
                            <el-input v-model="ruleFormcheckApart.min_area">
                                <template slot="append">m
                                    <sup>2</sup>
                                </template>
                            </el-input>
                        </el-col>
                        <el-col :span="2">
                            &nbsp;&nbsp;
                            <i class="el-icon-minus"></i>
                        </el-col>
                        <el-col :span="11">
                            <el-input v-model="ruleFormcheckApart.max_area">
                                <template slot="append">m
                                    <sup>2</sup>
                                </template>
                            </el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="户型卖点:">
                        <el-input type="textarea" autosize v-model="ruleFormcheckApart.sell">
                        </el-input>
                    </el-form-item>
                </el-form>
             
             	<el-row class="nav">	
             		<font>选择户型图类型：</font>
                	<router-link :to="{name:'palnPho'}">平面图</router-link>
                	<router-link :to="{name:'thressDPic'}">3D图</router-link>
                	<router-link :to="{name:'LivePic'}">实景图</router-link>
                	<router-link :to="{name:'effectPic'}">效果图</router-link>
                </el-row>  
       
                <router-view></router-view>   
            </el-main>
        </el-container>
        <!-- 新增图片弹窗 -->
        
    </div>
</template>
<script>
export default {
  name: "checkApartment",
  data() {
    return {
      ruleFormcheckApart: {
        houseNum: "",
        house: "",
        min_area: "",
        max_area: "",
        sell: ""
      },
      ruleFormUplode: {
        remarks: ""
      },
      Data: [],
      tableData: [],
      pageSize: 5,
      alltablesize: [],
      checkAll: false,
      checkAlls: false,
      checkTableAll: false,
      isIndeterminate: false,
      upImgVisibleUrl: "",
      upImgVisible: false,
      addImgVisible: false,
      checkImgVisible:false,
      changeImgVisible:false
    }
  },
  created() {
    this.getCheckApartmentList();
  },
  methods: {
    getCheckApartmentList() {
      for (let i = 1; i <20; i++) {
        this.tableData.push({
          chk: false,
          pictureOrder: i,
          imgPath: "",
          remarks: "******",
          update: "张三",
          ordering: "",
          imgPath: "/static/img/generalpic.jpg"
        });
      }
      this.page();
    },
    page() {
      for (
        let i = 0;
        i < Math.ceil(this.tableData.length / this.pageSize);
        i++
      ) {
        let arr = new Array();
        for (let j = 0; j < this.tableData.length; j++) {
          if (
            j >= (i == 0 ? 0 : i * this.pageSize) &&
            j < (i + 1) * this.pageSize
          ) {
            arr.push(this.tableData[j]);
          }
        }
        this.alltablesize.push(arr);
      }
      this.Data = this.alltablesize[0];
    },
    handleCurrentChange(val) {
      this.Data = this.alltablesize[val - 1];
    },
    handleCheckAllChange() {
      //this.checkAlls = true;
      this.Data[0].chk = true;
      console.log(this.Data);
      console.log(this.Data[0].chk);
    },
    // 验证图片格式大小
    beforeImgUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 上传图片成功
    addImgSuccess(res, file) {
      let imgUrl = res.data;
      seeImgVisible = imgUrl;
    },
    back(){
    	this.$router.push({path:"/index/apartmentInfo"});
    }
  }
};
</script>
<style scoped>
	
#checkApartment .CheckApartinfo {
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
  color:#fff;
  background-color: #545c64;
}
#checkApartment .checkInfo-form {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 20px auto;
  width: 750px;
  padding: 0px 35px 10px 35px;
}
#checkApartment .el-main {
  padding: 0;
}
#checkApartment .apart-title {
  display: block;
  margin-left: 20px;
}
#checkApartment .CheckApart-title {
  display: block;
  margin-left: 20px;
}
#checkApartment .check-con {

  border: 1px solid #d3dce6;
}
#checkApartment .apart-lay-list {
  line-height: 50px;
  height: 50px;
  margin-bottom: 20px;
  border-top: 1px solid #d3dce6;
  border-bottom: 1px solid #d3dce6;
}
#checkApartment .baseImg {
  width: 50px;
}
.el-icon-upload2,
.el-icon-download {
  font-size: 20px;
  color: #409eff;
  cursor: pointer;
}
#checkApartment .el-header{
	padding: 0px!important;
}
#checkApartment .nav{
	height:40px;
	box-sizing: border-box;
	padding-left:20px;
}
#checkApartment .nav  a{
	margin-left:10px;
	padding:3px 9px;
	border:1px solid #ddd;
	color:#409EFF;
	background: #fff;
}
#checkApartment .nav  a:hover{
	color:#fff;
	background: #409EFF;
	
}
</style>


