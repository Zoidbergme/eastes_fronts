<template>
<div id="BuildingDetail"> 
	<el-row style="height:40px;padding-left:40px;background:#545c64 ;">	
		<el-col :span="12">
			<span class="check-basetitle">楼栋详情</span>
		</el-col>
		<el-col :span="4" :push="8" >	
    		<el-button size="small" type="primary" @click="onSubmit">确认</el-button>
    		<el-button size="small" @click="back" >取消</el-button>
		</el-col>
	</el-row>
	<el-row style="padding:10px;">
		<el-form ref="form" :model="form" label-width="80px">
			<el-col :span="4">
				 <b  style="text-align:center;line-height:40px;height:40px;width:190px;font-size:16px;display: inline-block;" ref="LDID" :id="form.LDID">{{form.LDMC}}</b>
			</el-col>
			<el-col :span="20">
				 <el-select v-model="value" @change="selechange" placeholder="请选择活动区域">
     			 	<el-option v-for="(item,idx) in form.DYLIST" :key="idx"  :label="item.DYMC" :value="item.DYID"></el-option>
   				 </el-select>
			</el-col>
		</el-form>
	</el-row>
	<el-row style="padding:10px;margin-left:10px">
		<el-button size="small" style="color:#fff" class="fontinfo" >已定</el-button>
		<el-button size="small" style="color:#fff" class="fontdanger" >已售</el-button>
		<el-button size="small" style="color:#fff" class="fontsuccess">未售</el-button>
	</el-row>
	<el-row v-if="tableData">
		<div class="row" v-for="item in tableData">
			<div class="asider "><font>{{item.FLOORNUM}}L</font></div>
			<div v-for="it in item.LIST" class="right_content">
				<font v-if="it.FJZT<2" class="fontsuccess">{{it.FJMC}}</font>
				<font v-else-if="it.FJZT==4" class="fontdanger">{{it.FJMC}}</font>
				<font v-else class="fontinfo">{{it.FJMC}}</font>
			</div>
		</div>
	</el-row>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default{
		name:'BuildingDetail',
		data(){
			return{
				value:"一单元",
				unit_id:'',
				build_id:'',
				form:{
					LDID:'27',
					DYLIST:[]
				},
				tableData:[]
			}
		},
		computed:{
			...mapState({
				buildId:state=>state.generalLayout.build_id
			})
		},
		methods:{
			back(){
      	 		this.$router.push({ path: "/index/generalLayout" });
     		},
     		onSubmit(){
			  let url=this.Rooturl+"project/ruleCompany/getList";
         	  this.$http.get(url,{
         	
       		  }).then(function(res){
        			console.log(res);
            })},
            getProData(){
            	let url=this.Rooturl+"user/yunsuan/project";
            	this.$http.get(url,{
            		params:{
            			project_id:1
            		}
            	}).then(res=>{})
            },
            getBuilData(){
            	let url=this.Rooturl+"user/yunsuan/build";
            	this.$http.get(url,{
            		params:{
            			project_id:1
            		}
            	}).then(res=>{     
            		console.log(res.data.data)
            		let todata=res.data.data;
            		for(var i=0;i<todata.length;i++){
            			if(todata[i].LDID==this.buildId){
            				this.form=todata[i];
            			}
            		}
            		this.unit_id=this.form.DYLIST[0].DYID;
            		this.build_id=this.form.LDID;
            		this.getUnitData();
            	})
            },
            getUnitData(){
            	let url=this.Rooturl+"user/yunsuan/unit";
            	this.$http.get(url,{
            		params:{
            			project_id:2,
            			build_id:this.build_id,
            			unit_id:this.unit_id
            		}
            	}).then(res=>{this.tableData=res.data.data;})
            	  .catch(err=>{console.log(err)})
            },
            selechange(){
            	this.unit_id=this.value;
            	this.getUnitData();
            }
		},
		created(){
			this.getProData()
			this.getBuilData()
			
		}
}
</script>

<style>
	#BuildingDetail{
		
	}
	#BuildingDetail .m_bottom{
		margin-bottom:20px;
		border:1px solid #ddd;
	}
	 #BuildingDetail .m_top{
		margin-top:50px;
	}
	#BuildingDetail .Commissio_title{
		line-height:32px;
	}
	#BuildingDetail  .check-basetitle{
		height:40px;
		line-height:40px;
		color:#fff;
	}
	#BuildingDetail .el-button{
		margin-top:3px!important;
	}
	#BuildingDetail .el-form{
		margin-top:40px;
	}
	#BuildingDetail .row{
		width:100%;
		height:40px;
		float:left;
		margin-left:20px;
	}
	#BuildingDetail  .asider{
		height:40px;
		width:140px;
		border: 1px solid #666;
		float:left;
		padding:5px;
		box-sizing: border-box!important;
	}
	#BuildingDetail  .asider font{
		text-align:center;
		line-height: 28px;
		height:28px;
		width:128px;
		float:left;
		border: 1px solid #999;
		box-sizing: border-box!important;
	}
	#BuildingDetail  .right_content,{
		height:40px;
		width:160px;
		float:left;
		text-align:center;
		line-height: 40px;
	}
	#BuildingDetail  .right_content font{
		float:left;
		text-align:center;
		line-height: 40px;
		height:40px;
		width:160px;
		border: 1px solid #fff;
	}
	#BuildingDetail .fontinfo{
		background: #FBD997!important;
	
	}
	#BuildingDetail .fontdanger{
		background: #F47564!important;

	}
	#BuildingDetail .fontsuccess{
		background: #ddd!important;

	}
</style>