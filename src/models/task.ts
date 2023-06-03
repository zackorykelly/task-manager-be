import { Model, Sequelize, DataType, Table } from 'sequelize-typescript';

@Table
export default class Task extends Model {
  public id?: number;
  public name!: string;
  public birthdate?: Date;
  public country?: string;
}
export const TaskInit = (sequelize: Sequelize) => {
  Task.init({
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataType.STRING(255)
    },
    birthdate: {
      type: DataType.DATE,
      allowNull: true
    },
    country: {
      type: DataType.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'task',
    tableName: 'task',
    timestamps: false
  });
  Task.sync();
}