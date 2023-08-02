const FavoriteModel = (Sequelize, DataTypes) => {
  const Favorite = Sequelize.define('Favorite', {
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
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE'
    },
    plateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Plates',
        key: 'id',
      },
      onDelete: 'CASCADE',
    }
  }, { timestamps: false });

  Favorite.associate = (models) => {
    Favorite.belongsTo(models.Plate, { foreignKey: 'plateId' })
    Favorite.belongsTo(models.User, { foreignKey: 'userId' })
  }
  return Favorite;
};

module.exports = FavoriteModel;
