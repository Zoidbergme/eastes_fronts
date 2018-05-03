<template>
    <div id="dynamicList">
        <el-row type="flex" justify="space-between" class="dynamicList-title">
            <el-col :span="8">
                <breadcrumb :breadcrumbName="breadcrumbName"></breadcrumb>
            </el-col>
            <el-col :span="8">
                <el-button-group>
                    <el-button type="primary" size="small">高级搜索</el-button>
                    <el-button type="primary" size="small">预览</el-button>
                    <el-button type="primary" size="small" @click="previewVisible = true">查看</el-button>
                    <el-button type="primary" size="small" @click="addDynamicVisible = true">新增</el-button>
                    <el-button type="primary" size="small">修改</el-button>
                    <el-button type="primary" size="small">删除</el-button>
                </el-button-group>
            </el-col>
        </el-row>
        <el-table :data="Data" border ref="multipleTable" tooltip-effect="dark" class="apart-table">
            <el-table-column type="selection" label="ALL" width="50">
            </el-table-column>
            <el-table-column prop="key" label="序号">
            </el-table-column>
            <el-table-column prop="dynamicTitle" label="动态标题">
            </el-table-column>
            <el-table-column prop="contain" label="发布内容">
            </el-table-column>
            <el-table-column prop="areaRange" label="产权面积范围">
            </el-table-column>
            <el-table-column prop="releasePeople" label="发布人">
            </el-table-column>
            <el-table-column prop="releaseDate" label="发布日期">
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="tableData.length" :pageSize="pageSize" @current-change="handleCurrentChange" class="Img-page">
        </el-pagination>
        <!-- 查看弹窗 -->
        <el-dialog title="查看" :visible.sync="previewVisible">
            <el-form ref="form" :model="ruleFormSee" label-width="100px" size="small" class="dynamicForm">
                <el-form-item label="标题:">
                    <el-input placeholder="请输入内容" v-model="ruleFormSee.title">
                    </el-input>
                </el-form-item>
                <el-form-item label="内容:">
                    <el-input type="textarea" autosize placeholder="请输入内容" v-model="ruleFormSee.contain">
                    </el-input>
                </el-form-item>
                <el-form-item label="图片:">
                    <el-row class="dialogImg">
                        <img :src="imgUrl" alt="">
                        <img :src="imgUrl" alt="">
                    </el-row>
                </el-form-item>
                <el-form-item label="发布人:">
                    <el-input placeholder="请输入内容" v-model="ruleFormSee.releasePeople">
                    </el-input>
                </el-form-item>
                <el-form-item label="发布时间:">
                    <el-input placeholder="请输入内容" v-model="ruleFormSee.releaseDate">
                    </el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="previewVisible = false">预 览</el-button>
                <el-button @click="previewVisible = false">关 闭</el-button>
            </span>
        </el-dialog>
        <!-- 新增弹窗 -->
        <el-dialog title="添加" :visible.sync="addDynamicVisible" class="addDialog">
            <el-row class="dynamicTitle">
                <span class="addTitle">添加动态</span>
            </el-row>
            <el-form ref="form" :model="ruleFormAdd" label-width="100px" size="small" class="dynamicForm">
                <el-form-item label="标题:">
                    <el-input placeholder="请输入内容" v-model="ruleFormAdd.title">
                    </el-input>
                </el-form-item>
                <el-form-item label="内容:">
                    <el-input type="textarea" autosize placeholder="请输入内容" v-model="ruleFormAdd.contain">
                    </el-input>
                </el-form-item>
                <el-form-item label="图片:">
                    <el-upload action="" list-type="picture-card" :before-upload="beforeImgUpload">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="upImgVisible">
                        <img width="100%" :src="upImgVisibleUrl" alt="">
                    </el-dialog>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addDynamicVisible = false">预 览</el-button>
                <el-button type="primary" @click="addDynamicVisible = false">确 定</el-button>
                <el-button @click="addDynamicVisible = false">关 闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import breadcrumb from "@/components/shared/breadcrumb";
export default {
  name: "dynamicList",
  components: { breadcrumb },
  data() {
    return {
      breadcrumbName: [{ breadcrumbname: "户型信息", router: "" }],
      Data: [],
      tableData: [],
      pageSize: 5,
      alltablesize: [],
      previewVisible: false,
      addDynamicVisible: false,
      ruleFormSee: {
        contain: "",
        title: "",
        releasePeople: "",
        releaseDate: ""
      },
      ruleFormAdd: {
        contain: "",
        title: ""
      },
      upImgVisible:false,
      upImgVisibleUrl:"",
      imgUrl: "/static/img/generalpic.jpg"
    };
  },
  created() {
    this.getdynamicList();
  },
  methods: {
    getdynamicList() {
      for (let i = 1; i < 100; i++) {
        this.tableData.push({
          key: i,
          dynamicTitle: "活动通知",
          house: "三室两厅两卫",
          contain: "**********",
          releasePeople: "张三",
          releaseDate: "2017/10/10"
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
    }
  }
};
</script>
<style scoped>
.el-breadcrumb__inner {
  font-size: 18px !important;
}
.dynamicList-title {
  border-bottom: dashed 1px #b3c0d1;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.el-table {
  margin: 50px auto;
  width: 80%;
}
.Img-page {
  margin-left: 114px;
}
.textImgType {
  width: 80%;
  height: 25px;
}
.dialogImg img {
  width: 80px;
}
.dynamicForm {
  width: 80%;
  margin: 50px auto;
}
.el-dialog__body {
  padding: 0;
}
.dynamicTitle {
  margin-bottom: 30px;
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #b3c0d1;
}
.addTitle {
  margin-left: 20px;
}
</style>




