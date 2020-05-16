const Sequelize = require('sequelize');
const sequelize = require('../dbConnect.js');

const Class = sequelize.define('Class',{
     Clno: {
	        type: Sequelize.CHAR(5),
			primaryKey: true,
            allowNull: false,
            unique: true,
	 },
	 
	 Speciality:{
	        type:Sequelize.STRING(20),
			allowNull:false
	 },
	 
	 Inyear:{
	         type:Sequelize.CHAR(4),
			 allowNull:false
	 },
	 
	 Number:{
	         type:Sequelize.INTEGER,
			 allowNull:true
	 },
	 
	 Monitor:{
	          type:Sequelize.CHAR(7),
              allowNull:true			  
    }
},{
		 //使用自定义表名
         freezeTableName: true,
         //去掉默认的添加时间和更新时间
         timestamps: false
	 }	 
);

module.exports = Class;