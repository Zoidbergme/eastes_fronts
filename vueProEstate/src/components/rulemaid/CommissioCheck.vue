<template>
	<div id="CommissioCheck">
		<h4>推荐规则设定规则</h4>
		<div v-if="false"> 
			<span></span>
			<input v-model="input" placeholder="请输入内容"></input>
		</div>		
		<div class="attachment m_top" >
			<el-row type="flex" justify="space-between" class="dynamicList-title  m_bottom">
            <el-col :span="16"   :push="1" class="Commissio_title">
               <font style="font-size:16px;color:#666"> 判定规则</font>
            </el-col>
            <el-col :span="7" :push="2" >
                <el-button-group>
                    <el-button type="primary" @click="check" size="small">查看</el-button>
                    <el-button type="primary" @click="AddTotal" size="small">新增</el-button>
                    <el-button type="primary" @click="RecomposeTotal" size="small" >修改</el-button>
                    <el-button type="primary" @click="StopTotal" size="small" >终止</el-button>
                </el-button-group>
            </el-col>
        	</el-row>
			<el-table :data="ruleData" @selection-change="selsChange" border ref="multipleTable" tooltip-effect="dark" class="apart-table">
                <el-table-column type="selection" reserve-selection=""  width="50">
                </el-table-column>
                <el-table-column prop="rule_id" label="序号" width="60">
                </el-table-column>
                <el-table-column prop="begin_time" label="开始执行日期"  width="120">
                </el-table-column>
                <el-table-column prop="end_time" label="执行截止日期"  width="120">
                </el-table-column>
            	<el-table-column prop="sureEndTime" label="实际截止日期" width="120">
           		</el-table-column>
            	<el-table-column prop="visit_confirm_time" label="到访保护确认期(分钟)" width="100">
            	</el-table-column>
            	<el-table-column prop="valid_visit_time" label="有效来访保护期(天)" width="100">
            	</el-table-column>
            	<el-table-column prop="make_bargain_time" label="成交保护期(天)" width="100">
            	</el-table-column>
            	<el-table-column prop="payAffirTime" label="推荐佣金结佣周期(天)" width="100">
            	</el-table-column>
            	<el-table-column prop="payVisitTime" label="到访佣金结佣周期" width="100">
            	</el-table-column>
            	<el-table-column prop="payDellTime" label="成交佣金结佣周期" width="100">
            	</el-table-column>
            	<el-table-column prop="state"  label="执行状态" width="100">	
            		<template slot-scope="scope">
     					{{scope.row.state==0?'未执行':'执行中'}}
      			 	</template>
            	</el-table-column>
       		 </el-table>
		</div>
		<div class="attachment m_top " >
			<el-row type="flex" justify="space-between" class="dynamicList-title m_bottom">
            <el-col :span="16"   :push="1" class="Commissio_title">
                <font style="font-size:16px;color:#666">公司规则</font>
            </el-col>
            <el-col :span="7" :push="1">
                <el-button-group>
                	<el-button type="primary" size="small">审核</el-button>
                    <el-button type="primary" @click="CheckCompanyRule" size="small">查看</el-button>
                    <el-button type="primary" size="small">新增</el-button>
                    <el-button type="primary" size="small" >修改</el-button>
                    <el-button type="primary" size="small" >终止</el-button>
                </el-button-group>
            </el-col>
        	</el-row>
			<el-table :data="visitedData" border ref="multipleTable" tooltip-effect="dark" class="apart-table">
                <el-table-column type="selection" label="ALL" width="50">
                </el-table-column>
                <el-table-column prop="key" label="序号" width="60">
                </el-table-column>
                <el-table-column prop="fileName" label="企业名称"  width="140">
                </el-table-column>
                <el-table-column prop="atachment" label="负责人"  width="130">
                </el-table-column>
            	<el-table-column prop="updataPerson" label="联系方式" width="150">
           		</el-table-column>
            	<el-table-column prop="updataTime" label="计划开始日期" width="130">
            	</el-table-column>
            	<el-table-column prop="updataTime" label="计划截止日期" width="130">
            	</el-table-column>
            	<el-table-column prop="updataTime" label="实际开始日期" width="130">
            	</el-table-column>
            	<el-table-column prop="updataTime" label="实际截止日期" width="130">
            	</el-table-column>
            	<el-table-column prop="updataTime" label="申请状态" width="130">
            	</el-table-column>
            	<el-table-column prop="updataTime" label="执行状态" width="130">
            	</el-table-column>
       		 </el-table>
		</div>
		<div class="attachment m_top" >
			<el-row type="flex" justify="space-between" class="dynamicList-title m_bottom">
            <el-col :span="16"   :push="1" class="Commissio_title">
                <font style="font-size:16px;color:#666"> 个人规则</font>
            </el-col>
            <el-col :span="7" :push="1" >
                <el-button-group>
                    <el-button type="primary" size="small">审核</el-button>
                    <el-button type="primary" @click="CheckPersonRule" size="small">查看</el-button>
                    <el-button type="primary" size="small">新增</el-button>
                    <el-button type="primary" size="small" >修改</el-button>
                    <el-button type="primary" size="small" >终止</el-button>
                </el-button-group>
            </el-col>
        	</el-row>
			<el-table :data="introData" border ref="multipleTable" tooltip-effect="dark" class="apart-table">
                <el-table-column type="selection" label="ALL" width="50">
                </el-table-column>
                <el-table-column prop="key" label="序号" width="60">
                </el-table-column>
                <el-table-column prop="fileName" label="规则名称"  width="140">
                </el-table-column>
                <el-table-column prop="atachment" label="规则类型"  width="130">
                </el-table-column>
            	<el-table-column prop="updataPerson" label="计划开始日期" width="150">
           		</el-table-column>
            	<el-table-column prop="updataTime" label="计划截止日期" width="130">
            	</el-table-column>
            	<el-table-column prop="updataTime" label="实际开始时间" width="130">
            	</el-table-column>
            	<el-table-column prop="updataTime" label="状态" width="130">
            	</el-table-column>
            	<el-table-column prop="updataTime" label="筛选经济人" width="130">
            	</el-table-column>
       		 </el-table>
		</div>
		
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default{
		name:'CommissioCheck',
		data(){
			return{
				input:"",
				ruleData:[],
				introData:[],
				dellData:[],
				visitedData:[],
				checked:false,
				id:2,
				sels:[]
			}	
		},
		created(){
				this.getruleData();
				//this.getCompanyData();
		},
		mounted(){
			
		},
		methods:{
			AddTotal(){
				 this.$router.push({ path: "/index/AddTotalRule" });
			},
			StopTotal(){
				this.$router.push({ path: "/index/EndTotalRule" });
			},
			RecomposeTotal(){
				let sels=this.sels;
      			if(sels.length>1){
      				this.$message.error("查看只能单选")
      			}else if(sels.length==1){
      				this.CommissioCheck(sels[0].key);
      				this.$router.push({ path: "/index/RecomposeTotalRule" });
      			}else{
      				this.$message.error("请选择查看内容")
     			}		
			},
			CheckCompanyRule(){
				this.$router.push({ path: "/index/CheckCompanyRule" });	
			},
			CheckPersonRule(){
				this.$router.push({ path: "/index/CheckPersonRule" });	
			},
			getruleData(){
				let url=this.Rooturl+"project/ruleBasic/list";
				this.$http.get(url,{
					state:0,
					p:'0'
				})
				 .then((res)=>{
				 	this.ruleData=res.data.data.data;
				 	console.log(this.ruleData);
				 })
			},
			getCompanyData(){
				let url=this.Rooturl+"project/ruleCompany/list";
				this.$http.get(url)
				 .then((res)=>{
				 	this.ruleData=res.data.data.data;
				 	console.log(this.ruleData);
				 })
			},
			check(){
      			let sels=this.sels;
      			if(sels.length>1){
      				this.$message.error("查看只能单选")
      			}else if(sels.length==1){
      				this.CommissioCheck(sels[0].key);
      				this.$router.push({path: '/index/AddTotalRule'})
      			}else{
      				this.$message.error("请选择查看内容")
     			}
      
    		},
    		selsChange(sels) {  
    			if(sels){
    		   		this.sels=sels; 
    			}   
    		},
    		...mapMutations([
    			'CommissioCheck'
    		])
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
	h4{
		width:100%;
		text-align: left;
		color:#fff;
		background: #545c64;
		height:40px;
		line-height: 40px;
		font-weight:500;
		padding-left:20px;
		font-size: 16px;
		margin:0px;
	}
</style>