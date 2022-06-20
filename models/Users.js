module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      max: 30,
      min: 4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      max: 30,
      min: 4,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      max: 30,
      min: 4,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      max: 10,
      min: 9,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      max: 30,
      min: 8,
    },
    profileImage: {
      type: DataTypes.STRING,
      required: true,
    },
    coverImage: {
      type: DataTypes.STRING,
      required: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  });
  Users.findAll({
    attributes: {
      exclude: ["password"],
    },
  });
  return Users;
};
