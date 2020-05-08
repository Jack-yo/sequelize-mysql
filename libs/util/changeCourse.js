const Course = require('../../models/Course');

(async function () {

//增操作


await Course.create({
   Cno:'0',
   Cname:'计算机网络与技术',
   Creadit:4   
}).then((data)=>{
   console.log(`加入${data.Cname}课程资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create发生的错误是:'+ e +"\n\n\n");
});

await Course.create({
   Cno:'1',
   Cname:'电子与计算机工程',
   Creadit:4    
}).then((data)=>{
   console.log(`加入${data.Cname}课程资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create1发生的错误是:'+ e +"\n\n\n")
});

await Course.create({
   Cno:'2',
   Cname:'计算机网络与技术',
   Creadit:4     
}).then((data)=>{
   console.log(`加入${data.Cname}课程资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create2发生的错误是:'+ e +"\n\n\n");
});



//查操作

await Course.findAll({
    where:{
	  Cno:'1'
	}
}).then((data)=>{
   console.log('查找出的结果是：'+JSON.stringify(data)+"\n\n\n");
}).catch((e)=>{
	console.log('findAll'+ e +"\n\n\n");
});



//改操作

await Course.update({
    Creadit:2   
},{
    where:{Cno:'1' }
}).then((data)=>{
    console.log(`更改第${data[0]+1}条记录`+"\n\n\n");
}).catch((e)=>{
	console.log('update发生的错误是：'+ e+"\n\n\n");
});                                          



//删操作

await Course.destroy({
	where:{}
}).then((data)=>{
   console.log(`已删除Course表中${data}条内容`);
}).catch((e)=>{
	console.log('destroy发生的错误是：'+ e +"\n\n\n");
})

})()
