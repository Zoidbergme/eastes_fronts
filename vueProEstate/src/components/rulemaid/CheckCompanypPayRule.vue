<template>
<div id="CheckCompanypPayRule">
<el-row style="height:40px;padding-left:40px;background:#545c64 ;" class="header" >	
	<el-col :span="12">
		<span class="check-basetitle">查看修改公司</span>
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
             		<el-checkbox label="住宅"  name="type"></el-checkbox>
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
          	 		<el-select @change="JumpChange" v-model="form.jump_point_id" placeholder="">
            			<el-option label="是" value="1"></el-option>
           				<el-option  label="否" value="0"></el-option>
         			</el-select>
  	   			</el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="*跳点提成积累：">
           			<el-select  v-model="form.is_include" placeholder="">
            			<el-option label="是" value="1"></el-option>
           				<el-option  label="否" value="0"></el-option>
        			</el-select>
  	   			</el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="*单位：">
           			<el-select v-model="form.resource" placeholder="人民币">
            			<el-option label="人民币" value="shanghai"></el-option>			
         			</el-select>
  	 			</el-form-item>
			</el-col>
  	   	</el-row>
  	   	<el-row>
  	   		<el-col :span="8">
  	   			<el-form-item label="*提成方式：">
           			<el-select @change="change" v-model="form.way" placeholder="提成方式：">
            			<el-option checked label="固定金额x套数" value="1"></el-option>
           				<el-option label="销售总价x比例" value="2"></el-option>
           				<el-option label="建筑面积x单价" value="3"></el-option>
         			</el-select>
  	 			</el-form-item>
  	   		</el-col>
  	   		<el-col :span="8">
  	   			<el-form-item prop="fixed_amount" v-if="fixed_amount" label="固定定额：">
           			<el-input v-model.number="form.fixed_amount"    :disabled="!fixed_amount"  placeholder="输入固定金额1000" ></el-input>
  	 			</el-form-item>
  	 			<el-form-item prop="percentage" v-if="percentage" label="比例：">
           			<el-input v-model.number="form.percentage"    :disabled="!percentage" placeholder="比例3%" ></el-input>
  	 			</el-form-item>
  	 			<el-form-item prop="unit_price" v-if="unit_price"  label="单价：">
           			<el-input  v-model.number="form.unit_price"   :disabled="!unit_price" placeholder="输入单价如" ></el-input>
  	 			</el-form-item>
  	   		</el-col>
  	   	</el-row>
</el-form>
 <div class="attachment m_top" v-show="JumpPointBox" >
		<el-row type="flex" justify="space-between" class="dynamicList-title m_bottom">
            <el-col :span="16"   :push="1" class="Commissio_title">
                <font style="font-size:16px;color:#666">跳点规则</font>
            </el-col>
            <el-col :span="5">
                <el-button-group>            
                    <el-button @click="CheckJumpRule" type="primary" size="small">查看</el-button>
                    <el-button @click="addJumpRule" type="primary" size="small">新增</el-button>
                    <el-button type="primary" size="small" >修改</el-button>
                    <el-button type="primary" size="small" >删除</el-button>
                </el-button-group>
            </el-col>
        </el-row>
        <el-table :data="tableData" border ref="multipleTable" tooltip-effect="dark" class="apart-table">
            <el-table-column type="selection" label="ALL" width="50">
            </el-table-column>
            <el-table-column prop="key" label="序号" width="60">
            </el-table-column>
            <el-table-column prop="companyName" label="起始数" >
            </el-table-column>
            <el-table-column prop="customerName" label="截止数"  >
            </el-table-column>
            <el-table-column prop="phone" label="提成公式" >
            </el-table-column>
            <el-table-column prop="phone" label="金额/比例/单价" >
            </el-table-column>
            <el-table-column prop="planeTime" label="是否累积" >
            </el-table-column> 
             <el-table-column prop="planeTime" label="奖励金额(元/套)" >
            </el-table-column>   
        </el-table>
    </div> 
</div>
</template>

<script>
	import qs from 'qs'
	export default{
		name:'CheckCompanypPayRule',
		data(){
			const checkNum=(rule,value,callback)=>{
  			 if(value != null && value != ""){
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
		return{
				form: {
         		  company_rule_id:'',
         		  name:'',
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
                  unit_price:'',
                  jump_point_id:'0',
                  is_include:'0'
         },
               fixed_amount:true,
               percentage:false,
               unit_price:false,
               JumpPointBox:false,
               tableData:[
               		{
               			key: 1,
          				recommendNum: "TJBH",
         				customerName: "否",
         				phone: "固定金额",
          				state: "待审核",      		
          				type: "执行中",
          				companyName:"住宅、公寓",
          				planeTime:"人民币",
          				planeEndTime:"2017/01/08",
          				sureTime:"2017/01/08",
         				sureEndTime:"2017/01/08"  
               		}
               ],
               rules:{
               	name:[
               		{required:true,message:"不能为空",trigger:'blur'}
               	],
               	ump_point_id:[
               		{required:true,message:"不能为空",trigger:'blur'}
               	],
               	is_include:[
               		{required:true,message:"不能为空",trigger:'blur'}
               	]
               }

			}
		},
		methods:{
			onSubmit(){
			   let url=this.Rooturl+"project/ruleCompany/getList";
         	   this.$http.post(url,qs.stringify({
         	  	 ...this.form
         	   })).then(function(res){
        			console.log(res.data);
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
     		},
     		CheckJumpRule(){
     			this.$router.push({ path: "/index/CheckJumpPointRule" });
     		},
     		addJumpRule(){
     			
     		},
     		JumpChange(value){
     			if(value==1){
     				this.JumpPointBox=true;
     			}else if(value==0){
     				this.JumpPointBox=false;
     			}
     		}
		}
	}
</script>

<style scoped  lang="scss">
#CheckCompanypPayRule{
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
.header{
	.el-button{
		margin-top:4px!important;
	}
}
}		
</style>