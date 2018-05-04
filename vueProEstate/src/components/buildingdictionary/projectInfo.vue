<template>
  <div id="projectInfo">
    <el-row class="buildbaseinfo" type="flex" justify="space-between">
      <el-col :span="5">
        <span class="pro-basetitle">项目基础信息</span>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" round @click="submit()">保存</el-button>
      </el-col>
    </el-row>
    <el-col class="buildinfo">
      <span class="pro-title">项目信息</span>
    </el-col>
    <el-form :model="ruleForminfo" ref="form" label-width="100px" size="small" class="projectInfo-form">
      <el-col :span="12">
        <el-form-item label="公司名称:">
          <span>{{projectInfo.project_name}}</span>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="开发商:">
          <span>{{projectInfo.developer_name}}</span>
        </el-form-item>
      </el-col>
      <el-row>
        <el-col :span="12">
          <el-form-item label="项目地址:">
            <el-col :span="8">
              <el-select v-model="ruleForminfo.provalue" placeholder="请选择" @change="provinceChange($event)">
                <el-option v-for="item in firoptions" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <el-select v-model="ruleForminfo.cityvalue" placeholder="请选择" @change="cityChange($event)">
                <el-option v-for="item in secoptions" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <el-select v-model="ruleForminfo.disvalue" placeholder="请选择">
                <el-option v-for="item in thioptions" :key="item.code" :label="item.name" :value="item.code">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目状态:">
            <el-select v-model="ruleForminfo.statevalue" placeholder="请选择">
              <el-option v-for="item in staoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item>
            <!-- <el-input v-model="projectInfo.absolute_address"></el-input> -->
            <el-input v-model="ruleForminfo.add"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="云算地址:">
            <el-input v-model="projectInfo.href" @blur="testUrl"></el-input>  
          </el-form-item>
        </el-col>
      </el-row>
 <el-row>   
 	  <el-col :span="12">
      <el-form-item label="项目主图">
        <el-upload action="" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="proVisible">
          <img width="100%" :src="proImageUrl" alt="">
        </el-dialog>
      </el-form-item>  	
 	  </el-col>  
 	  <el-col :span="12">
 	  	 <el-form-item v-if="project_select" label="编辑的项目">
    		<el-select v-model="project_id" style="width: 100%;" placeholder="请选择想要编辑的项目">
              <el-option label="项目1" value="1"></el-option>
              <el-option label="项目2" value="2"></el-option>
              <el-option label="项目3" value="3"></el-option>
           </el-select>
    	 </el-form-item>
 	  </el-col>
 </el-row>       
    </el-form>
    <el-col class="buildinfo">
      <span class="pro-title">楼盘信息</span>
    </el-col>
    <el-form ref="form" :model="ruleFormbuild" label-width="100px" size="small" class="projectInfo-form">
      <el-form-item label="物业类型:">
        <el-checkbox-group v-model="ruleFormbuild.procheckList">
          <el-checkbox :label="59">住宅</el-checkbox>
          <el-checkbox :label="60">公寓</el-checkbox>
          <el-checkbox :label="61">别墅</el-checkbox>
          <el-checkbox :label="62">商铺</el-checkbox>
          <el-checkbox :label="63">写字楼</el-checkbox>
          <el-checkbox :label="64">车位</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-col :span="12">
        <el-form-item label="售楼处地址:">
          <el-input v-model="ruleFormbuild.sale_address"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="设计公司:">
          <el-input v-model="ruleFormbuild.decoration_company"></el-input>
        </el-form-item>
      </el-col>
      <el-form-item label="项目标签:">
        <el-col :span="12">
          <el-tag :key="tag" v-for="tag in projectTags" closable :disable-transitions="false" @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">输入项目标签</el-button>
        </el-col>
      </el-form-item>
      <el-form-item label="建筑类型:">
        <el-checkbox-group v-model="ruleFormbuild.buicheckList">
          <el-checkbox :label="65">钢混</el-checkbox>
          <el-checkbox :label="66">板楼</el-checkbox>
          <el-checkbox :label="67">砖混</el-checkbox>
          <el-checkbox :label="68">砖石</el-checkbox>
          <el-checkbox :label="69">钢结构</el-checkbox>
          <el-checkbox :label="70">其他</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="均价:">
            <el-input v-model="ruleFormbuild.average_price">
              <template slot="append">元/m
                <sup>2</sup>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="价格区间(万):">
            <el-col :span="11">
              <el-input v-model="ruleFormbuild.min_price"></el-input>
            </el-col>
            <el-col :span="2">
              &nbsp;&nbsp;
              <i class="el-icon-minus"></i>
            </el-col>
            <el-col :span="11">
              <el-input v-model="ruleFormbuild.max_price"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="建筑面积:">
            <el-input v-model="ruleFormbuild.floor_space">
              <template slot="append">m
                <sup>2</sup>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="占地面积:">
            <el-input v-model="ruleFormbuild.covered_area">
              <template slot="append">m
                <sup>2</sup>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="容积率:">
            <el-input v-model="ruleFormbuild.plot_retio">
              <template slot="append">%</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="规划户数:">
            <el-input v-model="ruleFormbuild.households_num">
              <template slot="append">户</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="绿化率:">
            <el-input v-model="ruleFormbuild.greening_rate">
              <template slot="append">%</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="规划车位:">
            <el-input v-model="ruleFormbuild.parking_num">
              <template slot="append">个</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="装修标准:">
            <el-input v-model="ruleFormbuild.decoration_standard"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-col class="buildinfo">
      <span class="pro-title">物业信息</span>
    </el-col>
    <el-form ref="form" :model="ruleFormpro" label-width="100px" size="small" class="projectInfo-form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="物业公司:">
            <el-input v-model="ruleFormpro.property_company_name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="物业费:">
            <el-input v-model="ruleFormpro.property_cost"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="供暖方式:">
            <el-input v-model="ruleFormpro.heat_supply"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="供电类型:">
            <el-input v-model="ruleFormpro.power_supply"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="供水类型:">
            <el-input v-model="ruleFormpro.water_supply"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "projectInfo",
  data() {
    return {
    	project_select:false,
      ruleForminfo: {
        add: "",
        provalue: "",
        cityvalue: "",
        disvalue: "",
        statevalue: ""
      },
      ruleFormbuild: {
        procheckList: [],
        buicheckList: [],
        sale_address: "",
        decoration_company: "",
        average_price: "",
        min_price: "",
        max_price: "",
        floor_space: "",
        covered_area: "",
        plot_retio: "",
        households_num: "",
        greening_rate: "",
        parking_num: "",
        decoration_standard: ""
      },
      ruleFormpro: {
        property_company_name: "",
        property_cost: "",
        heat_supply: "",
        power_supply: "",
        water_supply: ""
      },
      dialogVisible: false,
      firoptions: [],
      secoptions: [],
      thioptions: [],
      staoptions: [
        { value: 1, label: "待售" },
        { value: 2, label: "在售" },
        { value: 3, label: "售罄" }
      ],
      projectTags: [],
      inputVisible: false,
      inputValue: "",
      projectInfo: {},
      proVisible: false,
      proImageUrl: ""
    };
  },
  created() {
    // this.$http
    //   .get("/apo/ysservice.ashx?action=getyh")
    //   .then(res => {
    //     console.log(res);
    //   });
    this.getProvinceList();
    this.getProjectInfo();
    this.$http.get("http://120.27.21.136:2798/config").then(res => {
      console.log("++++++++++++++++++++++++++++++++++++++")
      console.log(res);
    });
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //查询项目信息
    getProjectInfo() {
      this.$http.get("http://120.27.21.136:2798/project/project/getProjectInfo").then(res => {
        console.log(res);
        this.projectInfo = res.data.data;
        this.ruleForminfo.provalue = this.projectInfo.province;
        this.provinceChange(this.ruleForminfo.provalue);
        this.ruleForminfo.cityvalue = this.projectInfo.city;
        this.cityChange(this.ruleForminfo.cityvalue);
        this.ruleForminfo.disvalue = this.projectInfo.district;
        this.proImageUrl = this.projectInfo.img_url;
        this.ruleForminfo.statevalue = this.projectInfo.sale_state;
        this.ruleFormbuild.average_price = this.projectInfo.average_price;
        this.ruleForminfo.add = this.projectInfo.absolute_address;
        this.ruleFormbuild.sale_address = this.projectInfo.sale_address;
        this.ruleFormbuild.min_price = this.projectInfo.min_price;
        this.ruleFormbuild.max_price = this.projectInfo.max_price;
        this.ruleFormbuild.households_num = this.projectInfo.households_num;
        this.ruleFormbuild.parking_num = this.projectInfo.parking_num;
        this.ruleFormbuild.greening_rate = this.projectInfo.greening_rate;
        this.ruleFormbuild.covered_area = this.projectInfo.covered_area;
        this.ruleFormbuild.decoration_standard = this.projectInfo.decoration_standard;
        this.ruleFormpro.power_supply = this.projectInfo.power_supply;
        this.ruleFormbuild.decoration_company = this.projectInfo.decoration_company;
        this.ruleFormbuild.floor_space = this.projectInfo.floor_space;
        this.ruleFormbuild.plot_retio = this.projectInfo.plot_retio;
        this.ruleFormpro.heat_supply = this.projectInfo.heat_supply;
        this.ruleFormpro.property_company_name = this.projectInfo.property_company_name;
        this.ruleFormpro.property_cost = this.projectInfo.property_cost;
        this.ruleFormpro.water_supply = this.projectInfo.water_supply;
        this.ruleFormbuild.buicheckList = [this.projectInfo.build_type];
        for (let i = 0; i < this.projectInfo.property_type.length; i++) {
          this.ruleFormbuild.procheckList.push(
            this.projectInfo.property_type[i].property_tag_id
          );
        }
        this.projectTags = this.projectInfo.project_tags.split("，");
      });
    },
    // 读取省列表
    getProvinceList() {
      let token = sessionStorage.getItem("userinfo");
      this.$http.get("http://120.27.21.136:2798/getProvinceList").then(res => {
      	console.log("1");
        console.log(res);
        this.firoptions = res.data;
      });
    },
    // 读取市区列表
    provinceChange(value) {
      this.$http.get("http://120.27.21.136:2798/getCityList?provinceCode=" + value).then(res => {
      	
        this.secoptions = res.data;
      });
    },
    // 读取区县列表
    cityChange(value) {
      this.$http.get("http://120.27.21.136:2798/getDistrictList?cityCode=" + value).then(res => {
        this.thioptions = res.data;
      });
    },
    // 修改项目信息
    submit() {
      var qs = require("qs");
      let data = {
        project_name: this.projectInfo.project_name,
        province: this.ruleForminfo.provalue,
        city: this.ruleForminfo.cityvalue,
        district: this.ruleForminfo.disvalue,
        absolute_address: this.ruleForminfo.add,
        property_type: JSON.stringify(this.ruleFormbuild.procheckList).substr(
          1,
          JSON.stringify(this.ruleFormbuild.procheckList).length - 2
        ),
        project_tags: JSON.stringify(this.projectTags).substr(
          1,
          JSON.stringify(this.projectTags).length - 2
        ),
        build_type: JSON.stringify(this.ruleFormbuild.buicheckList).substr(
          1,
          JSON.stringify(this.ruleFormbuild.buicheckList).length - 2
        ),
        sale_address: this.ruleFormbuild.sale_address,
        decoration_company: this.ruleFormbuild.decoration_company,
        build_type: this.ruleFormbuild.build_type,
        average_price: this.ruleFormbuild.average_price,
        min_price: this.ruleFormbuild.min_price,
        max_price: this.ruleFormbuild.max_price,
        covered_area: this.ruleFormbuild.covered_area,
        floor_space: this.ruleFormbuild.floor_space,
        plot_retio: this.ruleFormbuild.plot_retio,
        greening_rate: this.ruleFormbuild.greening_rate,
        households_num: this.ruleFormbuild.households_num,
        parking_num: this.ruleFormbuild.parking_num,
        decoration_standard: this.ruleFormbuild.decoration_standard,
        property_company_name: this.ruleFormpro.property_company_name,
        property_cost: this.ruleFormpro.property_cost,
        heat_supply: this.ruleFormpro.heat_supply,
        power_supply: this.ruleFormpro.power_supply,
        water_supply: this.ruleFormpro.water_supply
      };
      this.$http.post("/api/project/update", qs.stringify(data)).then(res => {
        console.log("++++++++++++++++++++++++++++");
        console.log(res);
      });
    },
    testUrl(){
    	var reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
    	if(reg.test(this.projectInfo.href)){
    		  this.$http.get(this.projectInfo.href).then(res => {
      		  console.log(res);
    			});
    	}else{
    		alert("输入不正确");
    	}
    }
  }
};
</script>
<style scoped>
.projectInfo-form {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 20px auto;
  width: 1000px;
  padding: 0px 35px 10px 35px;
}
.buildbaseinfo {
  height: 50px;
  line-height: 50px;
  margin-top: -20px;
  background-color: #545c64;
}
.buildinfo {
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  background-color: #dcdfe6;
}
.pro-basetitle {
  display: block;
  margin-left: 20px;
  color: #fff;
}
.pro-title {
  display: block;
  margin-left: 20px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
 

