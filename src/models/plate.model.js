const PlateModel = (Sequelize, DataTypes) => {
  const Plate = Sequelize.define('Plate', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.STRING, allowNull: false },
    ingredients: { type: DataTypes.STRING, allowNull: false },
    favorited: { type: DataTypes.INTEGER, allowNull: false, default: 0 },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
    }
  }, { timestamps: false });

  return Plate;
};

module.exports = PlateModel;
