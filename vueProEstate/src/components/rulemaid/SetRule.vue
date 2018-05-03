<template>
<div id="SetRule">
	<el-row style="height:40px;padding-left:40px;background:#333333 ;">	
	<el-col :span="12">
		<span class="check-basetitle">选择</span>
	</el-col>
	<el-col :span="4" :push="8" >	
    		<el-button size="small" type="primary" @click="onSubmit">确认</el-button>
    		<el-button size="small" @click="back" >取消</el-button>
	</el-col>
</el-row>
<el-form ref="form" :model="form" style="margin-top:40px;" label-width="120px">
		<el-row style="height:40px;">
			<el-form-item label="物业类型：">
            	<el-checkbox-group v-model="form.type">
             		<el-checkbox label="住宅" name="type"></el-checkbox>
             		<el-checkbox label="公寓" name="type"></el-checkbox>
             		<el-checkbox label="别墅" name="type"></el-checkbox>
             		<el-checkbox label="商铺" name="type"></el-checkbox>
             		<el-checkbox label="写字楼" name="type"></el-checkbox>
            		 <el-checkbox label="车位" name="type"></el-checkbox>
         		 </el-checkbox-group>
  	   		 </el-form-item>
  	   	</el-row>  	
  	   	<el-row style="margin-top:40px">
  	   		<el-col :span="8">
				<el-form-item label="*跳点：">
          	 		<el-select v-model="form.desc" placeholder="省">
            			<el-option label="区域一" value="shanghai"></el-option>
           				<el-option label="区域二" value="beijing"></el-option>
         			</el-select>
  	   			</el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="*跳点提成积累">
           			<el-select v-model="form.desc" placeholder="市">
            			<el-option label="区域一" value="shanghai"></el-option>
           				<el-option label="区域二" value="beijing"></el-option>
        			</el-select>
  	   			</el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="*单位">
           			<el-select v-model="form.desc" placeholder="人民币">
            			<el-option label="区域一" value="shanghai"></el-option>
           				<el-option label="区域二" value="beijing"></el-option>
         			</el-select>
  	 			</el-form-item>
			</el-col>
  	   	</el-row>
  	   	<el-row>
  	   		<el-col :span="8">
  	   			<el-form-item label="*提成方式：">
           			<el-select @change="change" v-model="form.way" placeholder="提成方式">
            			<el-option checked label="固定金额x套数" value="1"></el-option>
           				<el-option label="销售总价x比例" value="2"></el-option>
           				<el-option label="建筑面积x单价" value="3"></el-option>
         			</el-select>
  	 			</el-form-item>
  	   		</el-col>
  	   		<el-col :span="8">
  	   			<el-form-item v-if="fixed_amount" label="固定定额">
           			<el-input v-model="form.fixed_amount"  type="number"  :disabled="!fixed_amount"  placeholder="输入固定金额1000" ></el-input>
  	 			</el-form-item>
  	 			<el-form-item v-if="percentage" label="比例">
           			<el-input v-model="form.percentage"  type="number"   :disabled="!percentage" placeholder="比例3%" ></el-input>
  	 			</el-form-item>
  	 			<el-form-item v-if="unit_price"  label="单价">
           			<el-input  v-model="form.unit_price" type="number"  :disabled="!unit_price" placeholder="输入单价如" ></el-input>
  	 			</el-form-item>
  	   		</el-col>
  	   	</el-row>
</el-form>
</div>
</template>

<script>
	export default{
		name:'SetRule',
		data(){
			return{
				form: {
         		  name: '',
                  region: '',
                  date1: '',
                  date2: '',
                  delivery: false,
                  type: [],
                  resource: '',
                  desc: '',
                  way:'1',
                  fixed_amount:'',
               	  percentage:'',
                  unit_price:''
               },
               fixed_amount:true,
               percentage:false,
               unit_price:false
			}
		},
		methods:{
			onSubmit(){
         	  this.$http.get("http://120.27.21.136:2798/project/ruleCompany/getList",{
         	
       		  }).then(function(res){
        			console.log(res);
             })},
     		back(){
      	 		this.$router.push({ path: "/index/CheckCompanyRule" });
     		},
     		change(){
     			 this.fixed_amount=false;
                 this.percentage=false;
                 this.unit_price=false;
     			if(this.form.way=="1"){
     				this.fixed_amount=true;
     			}else if(this.form.way=="2"){
     				 this.percentage=true;
     			}else if(this.form.way=="3"){
     				this.unit_price=true;
     				
     			}
     		}
		}
	}
</script>

<style>
	.m_bottom{
		margin-bottom:20px;
		border:1px solid #ddd;
	}
	.m_top{
		margin-top:50px;
	}
	.Commissio_title{
		line-height:32px;
	}
	.check-basetitle{
		height:40px;
		line-height:40px;
		color:#fff;
	}
	.el-button{
		margin-top:3px!important;
	}
</style>