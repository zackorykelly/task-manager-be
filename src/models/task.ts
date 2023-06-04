import { Model, Sequelize, DataType, Table } from 'sequelize-typescript';

@Table
export default class Task extends Model {
  public id?: number;
  public title!: string;
  public description!: string;
  public completed?: boolean;
}
export const TaskInit = (sequelize: Sequelize) => {
  Task.init({
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataType.STRING(255)
    },
    description: {
      type: DataType.STRING(255)
    },
    completed: {
      type: DataType.BOOLEAN,
      defaultValue: false,
    }
  }, {
    sequelize,
    modelName: 'task',
    tableName: 'task',
    timestamps: false
  });
  Task.sync();
}