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
            <el-col :span="7">
                <el-button-group>
                    <el-button type="primary" size="small">查看</el-button>
                    <el-button type="primary" @click="AddTotal" size="small">新增</el-button>
                    <el-button type="primary" size="small" >修改</el-button>
                    <el-button type="primary" size="small" >终止</el-button>
                </el-button-group>
            </el-col>
        	</el-row>
			<el-table :data="ruleData" border ref="multipleTable" tooltip-effect="dark" class="apart-table">
                <el-table-column type="selection" label="ALL" width="50">
                </el-table-column>
                <el-table-column prop="key" label="序号" width="60">
                </el-table-column>
                <el-table-column prop="startTime" label="开始执行日期"  width="120">
                </el-table-column>
                <el-table-column prop="endTime" label="执行截止日期"  width="120">
                </el-table-column>
            	<el-table-column prop="sureEndTime" label="实际截止日期" width="120">
           		</el-table-column>
            	<el-table-column prop="affirmTime" label="到访保护确认期(分钟)" width="100">
            	</el-table-column>
            	<el-table-column prop="visitTime" label="有效来访保护期(天)" width="100">
            	</el-table-column>
            	<el-table-column prop="dellTime" label="成交保护期(天)" width="100">
            	</el-table-column>
            	<el-table-column prop="payAffirTime" label="推荐佣金结佣周期(天)" width="100">
            	</el-table-column>
            	<el-table-column prop="payVisitTime" label="到访佣金结佣周期" width="100">
            	</el-table-column>
            	<el-table-column prop="payDellTime" label="成交佣金结佣周期" width="100">
            	</el-table-column>
            	<el-table-column prop="state" label="执行状态" width="100">
            	</el-table-column>
       		 </el-table>
		</div>
		<div class="attachment m_top " >
			<el-row type="flex" justify="space-between" class="dynamicList-title m_bottom">
            <el-col :span="16"   :push="1" class="Commissio_title">
                <font style="font-size:16px;color:#666">公司规则</font>
            </el-col>
            <el-col :span="7">
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
            <el-col :span="7">
                <el-button-group>
                    <el-button type="primary" size="small">审核</el-button>
                    <el-button type="primary" size="small">查看</el-button>
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
	export default{
		name:'CommissioCheck',
		data(){
			return{
				input:"",
				ruleData:[{
					key:'1',
					startTime:"2018-11-11",
					endTime:'2018-12-11',
					sureEndTime:'李四',
					updataTime:'2018-12-11',
					affirmTime:'60',
					visitTime:'6',
					dellTime:'30',
					payAffirTime:'7',
					payVisitTime:'7',
					payDellTime:'7',
					state:'未执行'
				},
				{
					key:'2',
					startTime:"2018-11-11",
					endTime:'2018-12-11',
					sureEndTime:'李四',
					updataTime:'2018-12-11',
					affirmTime:'60',
					visitTime:'6',
					dellTime:'30',
					payAffirTime:'7',
					payVisitTime:'7',
					payDellTime:'7',
					state:'执行中'
				}
				],
				introData:[],
				dellData:[],
				visitedData:[]
				
			}
		},
		created(){
			console.log(this.attachmentData)
		},
		mounted(){
			
		},
		methods:{
			AddTotal(){
				 this.$router.push({ path: "/index/AddTotalRule" });
			},
			CheckTotal(){
				this.$router.push({ path: "/index/AddTotalRule" });
			},
			CheckCompanyRule(){
				this.$router.push({ path: "/index/CheckCompanyRule" });	
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
	h4{
		width:100%;
		text-align: left;
		color:#fff;
		background: #797979;
		height:40px;
		line-height: 40px;
		font-weight:500;
		padding-left:20px;
		font-size: 16px;
	}
</style>