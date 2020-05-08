const Grade = require('../../models/Grade');

(async function () {

//增操作


await Grade.create({
   Sno:'0',
   Cno:'0',
   Gmark:150.2   
}).then((data)=>{
   console.log(`加入${data.Sno}号同学成绩资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create发生的错误是:'+ e +"\n\n\n");
});

await Grade.create({
   Sno:'1',
   Cno:'1',
   Gmark:163.2   
}).then((data)=>{
   console.log(`加入${data.Sno}号同学成绩资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create1发生的错误是:'+ e +"\n\n\n")
});

await Grade.create({
   Sno:'2',
   Cno:'2',
   Gmark:132.2   
}).then((data)=>{
   console.log(`加入${data.Sno}号同学成绩资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create2发生的错误是:'+ e +"\n\n\n");
});



//查操作

await Grade.findAll({
    where:{
	  Cno:'1'
	}
}).then((data)=>{
   console.log('查找出的结果是：'+JSON.stringify(data)+"\n\n\n");
}).catch((e)=>{
	console.log('findAll'+ e +"\n\n\n");
});



//改操作

await Grade.update({
    Gmark:110.2   
},{
    where:{Cno:'1' }
}).then((data)=>{
    console.log(`更改第${data[0]+1}条记录`+"\n\n\n");
}).catch((e)=>{
	console.log('update发生的错误是：'+ e+"\n\n\n");
});                                          



//删操作

await Grade.destroy({
	where:{}
}).then((data)=>{
   console.log(`已删除Grade表中${data}条内容`);
}).catch((e)=>{
	console.log('destroy发生的错误是：'+ e +"\n\n\n");
})

})()
