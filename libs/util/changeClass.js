const Class = require('../../models/Class');

(async function () {

//增操作


await Class.create({
   Clno: '0101',
   Speciality:'计算机与科学技术',
   Inyear:'2018',
   Number:60,
   Monitor:'36'   
}).then((data)=>{
   console.log(`加入${data.Clno}班级资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create发生的错误是:'+ e +"\n\n\n");
});

await Class.create({
   Clno: '0102',
   Speciality:'电子与计算机工程',
   Inyear:'2018',
   Number:60,
   Monitor:'27'   
}).then((data)=>{
   console.log(`加入${data.Clno}班级资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create1发生的错误是:'+ e +"\n\n\n")
});

await Class.create({
   Clno: '0103',
   Speciality:'计算机与科学技术',
   Inyear:'2018',
   Number:60,
   Monitor:'15'    
}).then((data)=>{
   console.log(`加入${data.Clno}班级资料`+JSON.stringify(data)+"\n\n");
}).catch((e)=>{
	console.log('create2发生的错误是:'+ e +"\n\n\n");
});



//查操作

await Class.findAll({
    where:{
	  Clno:'0101'
	}
}).then((data)=>{
   console.log('查找出的结果是：'+JSON.stringify(data)+"\n\n\n");
}).catch((e)=>{
	console.log('findAll'+ e +"\n\n\n");
});



//改操作

await Class.update({
    Number:50   
},{
    where:{Monitor:'15' }
}).then((data)=>{
    console.log(`更改第${data[0]+1}条记录`+"\n\n\n");
}).catch((e)=>{
	console.log('update发生的错误是：'+ e+"\n\n\n");
});                                          



//删操作

await Class.destroy({
	where:{}
}).then((data)=>{
   console.log(`已删除Class表中${data}条内容`);
}).catch((e)=>{
	console.log('destroy发生的错误是：'+ e +"\n\n\n");
})

})()
