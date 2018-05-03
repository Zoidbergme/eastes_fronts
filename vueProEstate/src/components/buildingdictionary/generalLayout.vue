<template>
  <div id="generalLayout">
    <el-container>
      <el-header>
        <el-col class="geninfo">
          <span class="gen-title">总平图</span>
        </el-col>
      </el-header>
      <el-main>
        <el-row v-if="upImgVisibleUrl!==''">
          <el-col :span="13" :offset="4" class="gen-con">
            <img :src="upImgVisibleUrl" alt="">
          </el-col>
          <el-col :span="5" :offset="1">
            <el-row>
              <el-button type="primary" @click="seeImgVisible = true">预览</el-button>
              <el-dialog :visible.sync="seeImgVisible" width="90%">
                <img :src="upImgVisibleUrl" alt="" class="seeImg">
              </el-dialog>
            </el-row>
            <el-row>
              <el-button class="gen-btn" type="primary" @click="changeImgVisible = true">修改图片</el-button>
              <el-dialog title="新增:" :visible.sync="changeImgVisible">
                <el-form ref="form" :model="ruleFormUplode" label-width="100px" size="small">
                  <el-form-item label="添加文件:">
                    <el-upload action="" list-type="picture-card" :before-upload="beforeImgUpload">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="upImgVisible">
                      <img width="100%" :src="upImgVisibleUrl" alt="">
                    </el-dialog>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="changeImgVisible = false">取 消</el-button>
                  <el-button type="primary" @click="changeImgVisible = false">确 定</el-button>
                </span>
              </el-dialog>
            </el-row>
            <el-row>
              <el-button type="primary">删除</el-button>
            </el-row>
          </el-col>
        </el-row>

        <el-row v-if="upImgVisibleUrl===''">
          <el-col :span="13" :offset="4" class="gen-con">
            <el-row>
              <el-col class="addBuildingImg">
                还没有楼栋图片,
                <span @click="addImgVisible = true">前去添加！</span>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-row>
              <el-button type="primary">预览</el-button>
            </el-row>
            <el-row>
              <el-button class="gen-btn" type="primary" @click="addImgVisible = true">新增</el-button>
              <el-dialog title="新增:" :visible.sync="addImgVisible">
                <el-form ref="form" :model="ruleFormUplode" label-width="100px" size="small">
                  <el-form-item label="添加文件:">
                    <el-upload action="" list-type="picture-card">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="upImgVisible">
                      <img width="100%" :src="upImgVisibleUrl" alt="">
                    </el-dialog>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="addImgVisible = false">取 消</el-button>
                  <el-button type="primary" @click="addImgVisible = false">确 定</el-button>
                </span>
              </el-dialog>
            </el-row>
            <el-row>
            </el-row>
          </el-col>
        </el-row>
        <el-row v-if="upImgVisibleUrl!==''">
          <el-col class="gen-lay">
            <span class="gen-title">楼栋设置</span>
          </el-col>
          <el-col class="gen-lay-info">
            <el-button type="primary" size="mini">一栋</el-button>
            <el-button type="primary" size="mini">二栋</el-button>
            <el-button type="primary" size="mini">三栋</el-button>
          </el-col>
          <el-row class="gen-lay-list">
            <el-col :span="5">
              <span class="gen-title">楼栋信息</span>
            </el-col>
            <el-col :span="5" :offset="14">
              <el-button-group>
                <el-button type="primary" size="mini" @click="newInfo()">查看</el-button>
                <el-button type="primary" size="mini">新增</el-button>
                <el-button type="primary" size="mini">修改</el-button>
                <el-button type="primary" size="mini">删除</el-button>
              </el-button-group>
            </el-col>

          </el-row>

          <el-table :data="Data" border style="width: 100%" ref="multipleTable" tooltip-effect="dark" size='mini'>
            <el-table-column type="selection" width="50">
            </el-table-column>
            <el-table-column prop="key" label="序号" width="55">
            </el-table-column>
            <el-table-column prop="name" label="名称">
            </el-table-column>
            <el-table-column prop="preSaleLicenseNumber" label="预售许可证编号">
            </el-table-column>
            <el-table-column prop="issueTime" label="发证时间">
            </el-table-column>
            <el-table-column prop="openWay" label="开盘方式">
            </el-table-column>
            <el-table-column prop="openTime" label="开盘时间">
            </el-table-column>
            <el-table-column prop="endTime" label="交房时间">
            </el-table-column>
            <el-table-column prop="units" label="单元数">
            </el-table-column>
            <el-table-column prop="ladderRatio" label="梯户比">
            </el-table-column>
            <el-table-column prop="households" label="总户数">
            </el-table-column>
            <el-table-column prop="floorNumber" label="楼上层数">
            </el-table-column>
            <el-table-column prop="downstairsNumber" label="楼下层数">
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="tableData.length" :pageSize="pageSize" @current-change="handleCurrentChange">
          </el-pagination>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>
<script>
export default {
  name: "generalLayout",
  data() {
    return {
      Data: [],
      tableData: [],
      pageSize: 5,
      alltablesize: [],
      changeImgVisible: false,
      addImgVisible: false,
      upImgVisible: false,
      seeImgVisible:false,
      ruleFormUplode: {},
      upImgVisibleUrl: "/static/img/generalpic.jpg"
    };
  },
  created() {
    this.getgeneralLayoutlist();
  },
  methods: {
    // 验证图片格式大小
    beforeImgUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    getgeneralLayoutlist() {
      for (let i = 1; i < 100; i++) {
        this.tableData.push({
          key: i,
          name: i + "栋",
          preSaleLicenseNumber: "CDSFCZNO_134" + i,
          issueTime: "2017/12/21",
          openWay: "网上开盘",
          openTime: "2017/12/12",
          endTime: "2017/12/12",
          units: "4",
          ladderRatio: "2梯4户",
          households: "200",
          floorNumber: "12",
          downstairsNumber: "2"
        });
      }
      this.page();
    },
    page() {
      console.log(this.tableData.length);
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

      console.log(this.alltablesize);
      this.Data = this.alltablesize[0];
    },
    handleCurrentChange(val) {
      this.Data = this.alltablesize[val - 1];
    },
    newInfo() {
      this.$router.push({ path: "/index/checkInfo" });
    },
    
  }
};
</script>
<style scoped>
.el-header {
  padding: 0px;
}
.geninfo {
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  margin-top: -20px;
  background-color: #dcdfe6;
}
.gen-title {
  display: block;
  margin-left: 20px;
}
.gen-btn {
  margin: 10px 0px;
}
.gen-lay {
  height: 30px;
  margin-top: 20px;
  border: 1px solid #d3dce6;
  line-height: 30px;
}
.seeImg {
  width: 100%;
}
.addBuildingImg {
  width: 100%;
  height: 500px;
  text-align: center;
  padding-top: 20px;
  border: 1px solid #d3dce6;
}

.addBuildingImg span {
  color: #008000;
  text-decoration: underline #008000;
  cursor: pointer;
}
.gen-con img {
  width: 100%;
}
.gen-lay-info {
  height: 80px;
  margin-top: 5px;
  border: 1px solid #d3dce6;
}
.gen-lay-info .el-button {
  margin: 21px 0px 0px 20px;
}
.gen-lay-list {
  height: 40px;
  line-height: 40px;
  margin-top: 140px;
  border: 1px solid #d3dce6;
}

.el-pagination {
  margin-top: 20px;
}
</style>


