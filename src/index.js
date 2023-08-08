const express = require('express');
const userRouter = require('./routes/user.routes');
const favoritesRoutes = require('./routes/favorites.routes');
const ingredientRouter = require('./routes/ingredients.routes');
const orderHistoryRouter = require('./routes/orderHistory.routes');
const plateRouter = require('./routes/plates.routes');
require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/", userRouter);
app.use("/", favoritesRoutes);
app.use("/", ingredientRouter);
app.use("/", orderHistoryRouter);
app.use("/", plateRouter);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));

module.exports = app;
