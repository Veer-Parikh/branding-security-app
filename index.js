const express = require('express');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require("./utils/logger")

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.use(
    cors({
        origin:'*'
    })
)

app.use(express.json());
app.use(bodyParser.json());

app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});

const userRoutes = require('./modules/user/userRoutes')
app.use('/api/user',userRoutes)