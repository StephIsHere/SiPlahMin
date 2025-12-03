import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("User", {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        },
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nomor_identitas:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "users",
    timestamps: false,
});

export default User;