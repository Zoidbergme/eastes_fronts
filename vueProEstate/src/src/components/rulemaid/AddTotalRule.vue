<template>

<el-form id="AddTotalRule" ref="form" :model="form"  label-width="200px">
<el-row style="height:40px;padding-left:40px;background:#545c64 ;">
	<el-col :span="12">
		<span class="check-basetitle">新增基本规则</span>
	</el-col>
	<el-col :span="8" :push="4" >
		 <el-form-item>
    		<el-button size="small" type="primary" @click="onSubmit">确认</el-button>
    		<el-button size="small" @click="back" >取消</el-button>
  		</el-form-item>
	</el-col>
</el-row>
<el-row >	
   	<el-col :span="12">
   	  <el-form-item  label="*开始执行时间">
         <el-date-picker type="date"required placeholder="选择日期" v-model="form.begin_time" style="width: 90%;"></el-date-picker>
      </el-form-item>
   	</el-col>
    <el-col :span="12">
    	 <el-form-item  label="*截止执行时间">
           <el-date-picker type="date" required placeholder="选择日期" v-model="form.end_time" style="width: 90%;"></el-date-picker> 
 	    </el-form-item>
 	</el-col>    
</el-row> 	    
    
<el-row>
    <el-col :span="12">
    	 <el-form-item label="到访确认保护期(分钟)：">
    			<el-input v-model="form.valid_visit_time" required placeholder="请输入失效时间" style="width: 90%;"></el-input>
  		</el-form-item>
    </el-col> 
</el-row>
<el-row>
    <el-col :span="12">
    	 <el-form-item label="有效来访保护期(天)：">
    			<el-input v-model="form.visit_confirm_time" placeholder="请输入失效时间"  style="width: 90%;"></el-input>
  		</el-form-item>
    </el-col> 
</el-row>
<el-row>
    <el-col :span="12">
    	 <el-form-item label="成交保护期(天)：">
    			<el-input v-model="form.make_bargain_time" required  placeholder="请输入失效时间"  style="width: 90%;"></el-input>
  		</el-form-item>
    </el-col> 
</el-row>
 <el-row>
 	<el-col :span="12">
 	  <el-form-item label="推荐佣金结款周期">
    		<el-select v-model="form.recommand" style="width: 90%;" placeholder="请选择结佣时间">
              <el-option label="一个工作日后" value="1"></el-option>
              <el-option label="两个工作日后" value="2"></el-option>
              <el-option label="七个工作日后" value="7"></el-option>
           </el-select>
     </el-form-item>
 	</el-col>
 </el-row>
  <el-row>
 	<el-col :span="12">
 	  <el-form-item label="到访佣金结款周期">
    		<el-select v-model="form.visit" style="width: 90%;" placeholder="请选择结佣时间">
              <el-option label="一个工作日后" value="1"></el-option>
              <el-option label="两个工作日后" value="2"></el-option>
              <el-option label="七个工作日后" value="7"></el-option>
           </el-select>
     </el-form-item>
 	</el-col>
 </el-row>
 <el-row>
 	<el-col :span="12">
 	  <el-form-item label="成交佣金结款周期">
    		<el-select v-model="form.deel" style="width: 90%;" placeholder="请选择结佣时间">
              <el-option label="一个工作日后" value="1"></el-option>
              <el-option label="两个工作日后" value="2"></el-option>
              <el-option label="七个工作日后" value="7"></el-option>
           </el-select>
     </el-form-item>
 	</el-col>
 	<el-col :span="12">
 	  <el-form-item label="成交结款条件">
    		<el-select v-model="form.region" style="width: 90%;" placeholder="请选择结佣条件">
              <el-option label="已签订单，且付定金" value="1"></el-option>
              <el-option label="签订购房合同，且付房款" value="2"></el-option>      
           </el-select>
     </el-form-item>
 	</el-col>
 </el-row>
 <el-row>
  <el-col :span="23" >
  	 <el-form-item label="备注：">
    	<el-input type="textarea" v-model="form.desc"></el-input>
 	 </el-form-item>
  </el-col>	 
</el-row> 
 
 
 
 
</el-form>

</template>

<script>
	export default{
	name:'AddTotalRule',
	data() {
     return {
      		form: {
         		 visit_confirm_time: '',
         		 valid_visit_time:'',
         		 make_bargain_time:'',
         		 comment:'1',		
         		 begin_time: '',
          		 end_time: ''
        		}
            }
    },
    methods: {
      onSubmit() {
      	 let url=this.Rooturl+"project/ruleBasic/create";
         this.$http.post(url,{
         	
         })
         .then(function(res){
         	
         });
         
      },
      back(){
      	 this.$router.push({ path: "/index/CommissioCheck" });
      } 
   	},
	created(){
		
	}
}
</script>
	
<style>
	#AddTotalRule el-date-picker {
 		 width: 275px !important;
	}
	#AddTotalRule .check-basetitle{
		height:40px;
		line-height:40px;
		color:#fff;
	}
</style>