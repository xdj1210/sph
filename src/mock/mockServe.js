import Mock from 'mockjs';
//引入轮播、楼层的数据
import banner from './banner';
import floor from './floor';

//首页的轮播接口
//第一个参数:接口的请求地址
//第二个参数:接口返回的数据
//GET接口
Mock.mock("/mock/banner",{code:200,data:banner,message:'成功'});
Mock.mock('/mock/floor',{code:200,data:floor,message:'成功'});
