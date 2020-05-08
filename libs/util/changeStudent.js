const Student = require('../../models/Student');

(async function () {

//增操作


await Student.create({
   Sno: '1',
   Sname: 'Ben',
   Ssex: 'm',
   Sage:19,
   Clno: '0101'   
}).then((data)=>{
   console.log(`加入${data.Sname}学生资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create发生的错误是:'+ e +"\n\n\n");
});

await Student.create({
   Sno: '2',
   Sname: 'Lucy',
   Ssex: 'w',
   Sage:20,
   Clno: '0101'   
}).then((data)=>{
   console.log(`加入${data.Sname}学生资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create1发生的错误是:'+ e +"\n\n\n")
});

await Student.create({
   Sno: '3',
   Sname: 'Jack',
   Ssex: 'm',
   Sage:19,
   Clno:'0201'   
}).then((data)=>{
   console.log(`加入${data.Sname}学生资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create2发生的错误是:'+ e +"\n\n\n");
});



//查操作

await Student.findAll({
    where:{
	  Clno:'0101'
	}
}).then((data)=>{
   console.log('查找出的结果是：'+JSON.stringify(data)+"\n\n\n");
}).catch((e)=>{
	console.log('findAll'+ e +"\n\n\n");
});



//改操作

await Student.update({
    Sname:'Mary'   
},{
    where:{Sno:'2'}
}).then((data)=>{
    console.log(`更改第${data[0]+1}条记录`+"\n\n\n");
}).catch((e)=>{
	console.log('update发生的错误是：'+ e +"\n\n\n");
});                                          



//删操作

await Student.destroy({
	where:{}
}).then((data)=>{
   console.log(`已删除Student表中${data}条内容`);
}).catch((e)=>{
	console.log('destroy发生的错误是：'+ e +"\n\n\n");
})

})()
