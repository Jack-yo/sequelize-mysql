const Student = require('./models/Student');

async function create (Sno,Sname,Ssex,Sage,Clno) {

	//增操作
	
  try{

	let data = await Student.create({
	   Sno: Sno,
	   Sname: Sname,
	   Ssex: Ssex,
	   Sage:Sage,
	   Clno:Clno   
	});
	   console.log(`加入${data.Sname}学生资料`+JSON.stringify(data)+"\n\n");
	
    }catch(e){
	  console.log('create发生的错误是:'+ e +"\n\n\n");
  }
}


async function findByClno (Clno) {
	//查操作

   try{

	let data = await Student.findAll({
		where:{
		  Clno:Clno
		}
	});
	   console.log('查找出的结果是：'+JSON.stringify(data)+"\n\n\n");
	
    }catch(e){
	  console.log('create发生的错误是:'+ e +"\n\n\n");
  }
}

async function updateSnameBySno (Sname,Sno) {

	//改操作

  try{

	let data = await Student.update({
		Sname:Sname   
	},{
		where:{Sno:Sno}
	});		
	   console.log(`更改第${data[0]||+1}条记录`+"\n\n\n");
	                                          
    }catch(e){
	  console.log('create发生的错误是:'+ e +"\n\n\n");
  }
}

async function destroy() {

	//删操作

  try{
  
	let data = await Student.destroy({
		where:{}
	})
	   console.log(`已删除Student表中${data}条内容`+ "\n\n\n");
	
   }catch(e){
	  console.log('create发生的错误是:'+ e +"\n\n\n");
  }
}

(async () =>{
	
	await destroy();
	
	await create('1','Ben','m',19,'0101');
	await create('2','Mary','w',18,'0101');
	await create('3','Jack','m',19,'0102');
	
	await findByClno('0101');
	
	await updateSnameBySno('Lucy','2');
	
	await destroy();
})();
