<template>
  <div id="projectImg">
    <el-row type="flex" justify="space-between" class="examine-title">
      <el-col :span="8">
        <breadcrumb :breadcrumbName="breadcrumbName"></breadcrumb>
      </el-col>
      <el-col :span="8">
        <el-button-group>
          <el-button type="primary" size="small">高级搜索</el-button>
          <el-button type="primary" size="small">预览</el-button>
          <el-button type="primary" size="small" @click="check()">查看</el-button>
          <el-button type="primary" size="small" @click="addImgTypeVisible = true">新增</el-button>
          <el-button type="primary" size="small" @click="changeImgTypeVisible = true">修改</el-button>
          <el-button type="primary" size="small">删除</el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <el-table :data="Data" border ref="multipleTable" tooltip-effect="dark" class="project-table">
      <el-table-column type="selection" width="50">
      </el-table-column>
      <el-table-column prop="param" label="图片类别">
      </el-table-column>
      <el-table-column prop="count" label="图片总数">
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tableData.length" :pageSize="pageSize" @current-change="handleCurrentChange" class="Img-page">
    </el-pagination>
    <!-- 新增弹窗 -->
    <el-dialog title="提示" :visible.sync="addImgTypeVisible" width="50%">
      <el-form>
        <el-form-item label="图片类别:">
          <input type="text" class="textImgType">
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addImgTypeVisible = false">取 消</el-button>
        <el-button type="primary" @click="addImgTypeVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改弹窗 -->
    <el-dialog title="提示" :visible.sync="changeImgTypeVisible" width="50%">
      <el-form>
        <el-form-item label="图片类别:">
          <input type="text" class="textImgType">
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changeImgTypeVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeImgTypeVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import breadcrumb from "@/components/shared/breadcrumb";
export default {
  name: "projectImg",
  components: { breadcrumb },
  data() {
    return {
      breadcrumbName: [{ breadcrumbname: "项目图片", router: "" }],
      Data: [],
      tableData: [],
      pageSize: 5,
      alltablesize: [],
      addImgTypeVisible: false,
      changeImgTypeVisible: false
    };
  },
  created() {
    this.getProjectImgList();
  },
  methods: {
    // 项目图片列表详情
    getProjectImgList() {
      this.$http.get('api/project/img/getNum').then(res=>{
        console.log("+++++++++++++++++++++++++++++++++++++++")
        this.tableData=res.data.data;
        this.page();
        console.log(res)
      })
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
    check() {
      this.$router.push({ path: "/index/categoryImg" });
    }
  }
};
</script>
<style scoped>
.el-breadcrumb__inner {
  font-size: 18px !important;
}
.examine-title {
  border-bottom: dashed 1px #b3c0d1;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.el-table {
  width: 80%;
  margin: 50px auto;
}
.Img-page {
  margin-left: 114px;
}
.textImgType {
  width: 80%;
  height: 25px;
}
</style>


