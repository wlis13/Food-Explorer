const RequestModel = (Sequelize, DataTypes) => {
  const Request = Sequelize.define('Request', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelele: 'CASCADE',
    },
    plateId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Plates',
        key: 'id'
      },
      onDelete: 'CASCADE',
    }
  }, { timestamps: false });

  Request.associate = (models) => {
    Request.belongsTo(models.User, { foreingKey: 'userId' })
    Request.belongsTo(models.Plate, { foreingKey: 'plateId' })
  }
  return Request;
};

module.exports = RequestModel;
