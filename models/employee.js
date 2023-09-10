const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Employee extends Model {
  // Function will compare employee's hashed password.
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Employee.init(
  {
    id: {
      // Employee Table ID
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      // Employee First Name
      type: DataTypes.STRING(35),
      allowNull: false,
    },
    last_name: {
      // Employee Last Name
      type: DataTypes.STRING(35),
      allowNull: false,
    },
    username: {
      // Employee Username
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Username must be unique. There cannot be more than one.
    },
    password: {
      // Employee Password
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10], // Password must be at least 10 characters
      },
    },
    company_id: {
      // Links employee to the company.
      type: DataTypes.INTEGER,
      references: {
        model: "company",
        key: "id",
      },
    },
  },
  {
    hooks: {
      // Encrypts employee's password.
      beforeCreate: async (newEmployeeData) => {
        newEmployeeData.password = await bcrypt.hash(
          newEmployeeData.password,
          10
        );
        return newEmployeeData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "employee",
  }
);

module.exports = Employee;
