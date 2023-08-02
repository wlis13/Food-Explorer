const OrderHistoryModel = (Sequelize, DataTypes) => {
  const OrderHistory = Sequelize.define('OrderHistory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.STRING,
      default: 'pendente'
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      inTable: 'Users'
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  });

  OrderHistory.associate = (models) => {
    OrderHistory.belongsTo(models.User, { foreingKey: 'userId' })
  }
  return OrderHistory;
};

module.exports = OrderHistoryModel;
