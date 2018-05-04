<template>
<div id="choseCompany">
<el-form  :model="formInline" >
<el-row style="height:40px;padding-left:40px;background:#333333 ;">	
	<el-col :span="12">
		<span class="check-basetitle">选择公司</span>
	</el-col>
	<el-col :span="4" :push="8" >
		 <el-form-item>
    		<el-button size="small" type="primary" @click="onSubmit">确认</el-button>
    		<el-button size="small" @click="back" >取消</el-button>
  		</el-form-item>
	</el-col>
</el-row>
<el-row style="margin-top:30px;">
	<el-col :span="4">
		<el-form-item label="">
           <el-select v-model="formInline.region" placeholder="省">
            <el-option label="区域一" value="shanghai"></el-option>
           	<el-option label="区域二" value="beijing"></el-option>
         </el-select>
  	   </el-form-item>
	</el-col>
	<el-col :span="4">
		<el-form-item label="">
           <el-select v-model="formInline.region" placeholder="市">
            <el-option label="区域一" value="shanghai"></el-option>
           <el-option label="区域二" value="beijing"></el-option>
         </el-select>
  	   </el-form-item>
	</el-col>
	<el-col :span="4">
		<el-form-item label="">
           <el-select v-model="formInline.region" placeholder="区">
            <el-option label="区域一" value="shanghai"></el-option>
           <el-option label="区域二" value="beijing"></el-option>
         </el-select>
  	   </el-form-item>
	</el-col>
	<el-col :span="9">
		<el-form-item label="">
    		<el-input v-model="formInline.user" placeholder="输入公司名称或营业执照"></el-input>
  		</el-form-item>
	</el-col>
	<el-col :span="3">
		<el-form-item>
    		<el-button type="primary" @click="onSubmit">查询</el-button>
  		</el-form-item>
	</el-col>
</el-row>
</el-form>	


<div class="attachment m_top" >
		<el-row type="flex" justify="space-between" class="dynamicList-title m_bottom">
            <el-col :span="16"   :push="1" class="Commissio_title">
                <font style="font-size:16px;color:#666">查询结果</font>      
            </el-col>
            <el-col :span="5">
             
            </el-col>
        </el-row>
        <el-table :data="Data" border ref="multipleTable" tooltip-effect="dark" class="apart-table">
            <el-table-column type="selection" id="sele"   width="50">
            </el-table-column>
            <el-table-column prop="key" label="序号" width="60">
            </el-table-column>
            <el-table-column prop="companyName" label="公司名称" >
            </el-table-column>
            <el-table-column prop="customerName" label="地址"  >
            </el-table-column>
            <el-table-column prop="phone" label="营业执照" >
            </el-table-column>
            <el-table-column prop="planeTime" label="对接人" >
            </el-table-column> 
             <el-table-column prop="planeTime" label="联系方式" >
            </el-table-column>   
        </el-table>
        <el-pagination  background layout="prev, pager, next" :total="tableData.length" :pageSize="pageSize" @current-change="handleCurrentChange" class="Img-page ">
        </el-pagination>
    </div> 
</div>    
</template>

<script>
	 export default{
	 	name:'choseCompany',
	 	data(){
	 		return{
	 			formInline: {
          			user: '',
         			region: ''
        	    },
        	    Data: [],
     			tableData: [],
           		pageSize: 8,
            	alltablesize: []
	 		}
	 	},
	 	methods:{
	 		onSubmit(){
         	  this.$http.post("url",{
         	
       		  }).then(function(res){
        	
         	
            })},
     		back(){
      	 		this.$router.push({ path: "/index/CheckCompanyRule" });
     		},
     		getApartmentInfoImgList() {
      		 for (let i = 1; i < 28; i++) {
       		   this.tableData.push({
          		key: i,
          		recommendNum: "TJBH"+i,
         		customerName: "否",
         		phone: "固定金额",
          		state: "待审核",      		
          		type: "执行中",
          		companyName:"住宅、公寓",
          		planeTime:"人民币",
          		planeEndTime:"2017/01/08",
          		sureTime:"2017/01/08",
         		sureEndTime:"2017/01/08"   
             });
      	    }
             this.page();
            },
            page() {
              for (let i = 0;i < Math.ceil(this.tableData.length / this.pageSize); i++){
                 let arr = new Array();
       			 for (let j = 0; j < this.tableData.length; j++) {
         			if (j >= (i == 0 ? 0 : i * this.pageSize) &&j < (i + 1) * this.pageSize){
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
           check(){
      	     this.$router.push({ path:"/index/CommissioCheck"});
          },
          disableSelect(){
          	var sel=document.querySelector(".has-gutter tr td input");
          	console.log(sel);
          	//sel.disabled="true";
          }
        },
        created(){
 			this.getApartmentInfoImgList();	
 		},
 		mounted(){
 			this.disableSelect();
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
	
</style>