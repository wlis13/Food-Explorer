const IngredientModel = (Sequelize, DataTypes) => {
  const Ingredient = Sequelize.define('Ingredient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
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
      onDelete: 'CASCADE',
    },
    plateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Plates',
        key: 'id'
      },
      onDelete: 'CASCADE'
    }
  }, { timestamps: false });

  Ingredient.associate = (models) => {
    Ingredient.belongsTo(models.User, { foreingKey: 'userId' })
    Ingredient.belongsTo(models.Plate, { foreingKey: 'plateId' })
  }
  return Ingredient;
};

module.exports = IngredientModel;
