<template>
    <div id="checkApartment">
        <el-container>
            <el-header>
                <el-row class="CheckApartinfo" type="flex" justify="space-between">
                    <el-col :span="5">
                        <span class="CheckApart-title">查看</span>
                    </el-col>
                    <el-col :span="2">
                        <el-button type="primary" size="small" >关闭</el-button>
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
                <el-row class="apart-lay-list">
                    <el-col :span="4">
                        <el-checkbox v-model="checkAlls" @change="handleCheckAllChange" class="apart-title">平面图</el-checkbox>
                    </el-col>
                    <el-col :span="6" :offset="14">
                        <el-button-group>
                            <el-button type="primary" size="mini">预览</el-button>
                            <el-button type="primary" size="mini">查看</el-button>
                            <el-button type="primary" size="mini" @click="addImgVisible = true">新增</el-button>
                            <el-button type="primary" size="mini">修改</el-button>
                            <el-button type="primary" size="mini">删除</el-button>
                        </el-button-group>
                    </el-col>
                </el-row>
                <el-table :data="Data" border style="width: 100%" ref="multipleTable" tooltip-effect="dark" class="cate-table">
                    <el-table-column type="selection" label="ALL" width="50" prop="chk">
                    </el-table-column>
                    <el-table-column prop="pictureOrder" label="图片顺序">
                    </el-table-column>
                    <el-table-column prop="imgPath" label="图片">
                        <template slot-scope="scope">
                            <img :src="scope.row.imgPath" alt="" class="baseImg">
                        </template>
                    </el-table-column>
                    <el-table-column prop="remarks" label="备注">
                    </el-table-column>
                    <el-table-column prop="update" label="更新人员">
                    </el-table-column>
                    <el-table-column prop="ordering" label="调序">
                        <template slot-scope="scope">
                            <i class="el-icon-upload2" @click="order(scope.row.pictureOrder)"></i>
                            <i class="el-icon-download"></i>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination background layout="prev, pager, next" :total="tableData.length" :pageSize="pageSize" @current-change="handleCurrentChange" class="cate-page">
                </el-pagination>
            </el-main>
        </el-container>
        <!-- 新增图片弹窗 -->
        <el-dialog title="新增" :visible.sync="addImgVisible">
            <el-form ref="form" :model="ruleFormUplode" label-width="100px" size="small">
                <el-form-item label="添加文件:">
                    <el-upload action="/api/project/file/upload" :data="{file_name:'img'}" name="img" list-type="picture-card" :before-upload="beforeImgUpload" :on-success="addImgSuccess">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="upImgVisible">
                        <img width="100%" :src="upImgVisibleUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item label="备注:">
                    <el-input type="textarea" autosize placeholder="请输入内容" v-model="ruleFormUplode.remarks">
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addImgVisible = false">取 消</el-button>
                <el-button type="primary" @click="addImgVisible = false">确 定</el-button>
            </span>
        </el-dialog>
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
      addImgVisible: false
    }
  },
  created() {
    this.getCheckApartmentList();
  },
  methods: {
    getCheckApartmentList() {
      for (let i = 1; i < 100; i++) {
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
    }
  }
};
</script>
<style scoped>
.CheckApartinfo {
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
  color:#fff;
  background-color: #545c64;
}
.checkInfo-form {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 20px auto;
  width: 750px;
  padding: 0px 35px 10px 35px;
}
.el-main {
  padding: 0;
}
.apart-title {
  display: block;
  margin-left: 20px;
}
.CheckApart-title {
  display: block;
  margin-left: 20px;
}
.check-con {
  margin: -30px 20px 0;
  border: 1px solid #d3dce6;
}
.apart-lay-list {
  line-height: 50px;
  height: 50px;
  margin-bottom: 20px;
  border-top: 1px solid #d3dce6;
  border-bottom: 1px solid #d3dce6;
}
.baseImg {
  width: 50px;
}
.el-icon-upload2,
.el-icon-download {
  font-size: 20px;
  color: #409eff;
  cursor: pointer;
}
</style>


