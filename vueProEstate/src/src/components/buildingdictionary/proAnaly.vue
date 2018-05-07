<template>
    <div id="proAnaly">
        <el-row class="proAnalyinfo" type="flex" justify="space-between">
            <el-col :span="4">
                <span class="proAnaly-title">查看</span>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" size="small" >预览</el-button>
                <el-button  size="small" >保存</el-button>
            </el-col>
        </el-row>
        <el-form  :model="proAnalyForm" label-width="80px" class="analyForm">
            <el-form-item label="项目优势:">
                <el-input type="textarea" autosize v-model="proAnalyForm.advange"></el-input>
            </el-form-item>
             <el-form-item label="周边分析:">
                <el-input type="textarea" autosize v-model="proAnalyForm.analy"></el-input>
            </el-form-item>
             <el-form-item label="升值空间:">
                <el-input type="textarea" autosize v-model="proAnalyForm.space"></el-input>
            </el-form-item>
             <el-form-item label="适合人群:">
                <el-input type="textarea" autosize v-model="proAnalyForm.people"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  name: "proAnaly",
  data() {
    return {
        proAnalyForm: {
            advange:"房子二梯三户边套，南北通透户型，产证面积89平实用95平，可谈朝南带阳台，厨房朝北带很大生活阳台，一个卧室朝南，二个朝南。非常方正，没有一点浪费空间。",
            analy:"位于高新区繁华地段临学校，步行街三十米，大型超市菜市场，今年刚刚精装家具，家电刚刚买有车位拎包入住。带车位停车方便",
            space:"位于高新区繁华地段临学校，步行街三十米，大型超市菜市场，今年刚刚精装家具，家电刚刚买有车位拎包入住。带车位停车方便",
            people:"此房子适合得到文人雅士的推崇，如教授学者，小资情调白领人员等，特别是英式田园赢得很多女性的喜爱。"
        }
    };
  }
};
</script>
<style scoped>
.proAnalyinfo {
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;

  background-color: #545c64;
  color:#fff;
 
}
.proAnaly-title {
  display: block;
  margin-left: 20px;
  font-size: 16px;
}
.analyForm {
    width: 750px;
    margin: 50px auto;
}
</style>


