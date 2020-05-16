const Sequelize = require('sequelize');
const sequelize = require('../dbConnect.js');

const Course = sequelize.define('Course',{
     Cno:{
	      type: Sequelize.CHAR(1),
	      primaryKey: true,
          allowNull: false,
          unique: true	      
	 },
	 
	 Cname:{
	        type:Sequelize.STRING(20),
			allowNull:false
	 },
	 
	 Creadit:{
	          type:Sequelize.SMALLINT,
			  allowNull:true
	 }
},{
	 
	    //使用自定义表名
        freezeTableName: true,
        //去掉默认的添加时间和更新时间
        timestamps: false
	}
);

module.exports = Course;