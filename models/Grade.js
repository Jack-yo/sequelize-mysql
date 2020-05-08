const Sequelize = require('sequelize');
const sequelize = require('./dbConnect.js');

const Grade = sequelize.define('Grade',{
     Sno:{
	       type: Sequelize.CHAR(7),
           primaryKey: true,
           allowNull: false
	 },
	 
	 Cno:{
	       type:Sequelize.CHAR(1),
		   allowNull:false
	 },
	 
	 Gmark:{
	        type:Sequelize.NUMERIC(4,1),
			allowNull:true
	 }
},{
	    //使用自定义表名
        freezeTableName: true,
        //去掉默认的添加时间和更新时间
        timestamps: false
	 }
);

module.exports = Grade;