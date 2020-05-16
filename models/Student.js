const Sequelize = require('sequelize');
const sequelize = require('../dbConnect.js')

const Student = sequelize.define('Student',{
	  Sno: {
	         type: Sequelize.CHAR(7),
			 primaryKey: true,
			 allowNull: false,
			 unique: true,
	  },
	  
	  Sname:{
	        type: Sequelize.STRING(20),
			allowNull:false
	  },
	  
	  Ssex:{
	       type: Sequelize.CHAR(2),
		   allowNull:false
	  },
	  
	  Sage:{
	        type:Sequelize.SMALLINT,
			allowNull:true
	  },
	  
	  Clno:{
	        type:Sequelize.CHAR(5),
			allowNull:false
      }
},{
	     //使用自定义表名
         freezeTableName: true,
        //去掉默认的添加时间和更新时间
         timestamps: false,		 
	});

module.exports = Student;