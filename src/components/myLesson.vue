<template>
    <div class="myLesson bgmain mianScroll">
        <top></top>
        <searchTop></searchTop>
        <div class="lessonList">
            <ul>
                <li v-for="(course,index) in courseList" :key="index">
                        <em v-if="course.shareState == true" class="shareState have">
                            已校共享
                        </em>
                        <div class="lessonImg"><img v-bind:src="course.imgUrl"></div>
                        <div class="lessonContent">
                            <h4>{{course.title}}</h4>
                            <p class="synopsis"><span><i class="icon bpMobile bpMobile-wode2"></i>{{course.formPeo}}</span><span><i class="icon bpMobile bpMobile-hs_h_Clock_h-naozhong"></i>{{course.time}}</span>   
                            </p>
                            <div class="operate">
                                <a v-if="course.haveReflect == false" @click="tcshow1 =! tcshow1"><i class="el-icon-edit"></i>添加反思</a>
                                <a v-else @click="tcshow2 =! tcshow2"><i class="el-icon-view"></i>查看反思</a>
                                <a @click="tcshow =! tcshow"><i class="el-icon-location-outline"></i>课程定位</a>
                            </div>
                        </div>
                        <div class="clear"></div>
                </li>
             </ul>
        </div>
    </div>
</template>

<script>
import top from '@/components/top'
import searchTop from '@/components/searchTop'
import axios  from 'axios'
export default {
    name:'myLesson',
    components:{top,searchTop},
    data(){
        return{
            courseList:[
                        {
                            imgUrl:require('./../assets/images/runtu.jpg'),
                            title:'少年闰土——鲁迅1',
                            formPeo:'王艳丽',
                            time:'2018-10-22',
                            shareState:true,
                            haveReflect:true
                        },
                        {
                            imgUrl:require('./../assets/images/runtu.jpg'),
                            title:'少年闰土——鲁迅2',
                            formPeo:'张洋',
                            time:'2018-10-22',
                            shareState:false,
                            haveReflect:false
                        },
                        {
                            imgUrl:require('./../assets/images/runtu.jpg'),
                            title:'少年闰土——鲁迅3',
                            formPeo:'王帅',
                            time:'2018-10-22',
                            shareState:false,
                            haveReflect:true
                        },
                        {
                            imgUrl:require('./../assets/images/runtu.jpg'),
                            title:'少年闰土——鲁迅4',
                            formPeo:'李炜',
                            time:'2018-10-22',
                            shareState:true,
                            haveReflect:false
                        }
                    ],
                newList1:[],
                newList2:[],
                t: 2,
                page:1,
                rows:10,
                schoolStateList:[],
                schoolStateDetail:{}
        }
    },
    mounted(){
        this.loadList();
        // this.loadList1();
    },
    methods:{
        loadList:function(){
           var url = "/cao/api/Plan/GetTermList";
           var _this = this;
           _this.$ajax.post(url).then(res=>{
                console.log(res.data);
           }).catch(error=>{
                console.log(error);
           })
        },
        loadList1:function(){
           this.$ajax.get('/cao/api/Plan/GetTermList').then(res=>{
               console.log(res);
           }).catch(error=>{
               console.log(error);
           })

        }
    }
}
</script>

<style>

</style>
