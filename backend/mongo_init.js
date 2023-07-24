const MONGO_USER = process.env.DB_USER;
const MONGO_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

db.createUser({
    user: MONGO_USER,
    pwd: MONGO_PASSWORD,
    roles: [
        {
            role: "readWrite",
            db: DB_NAME,
        },
    ],
});
