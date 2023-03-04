// import pg from "pg";
import { Sequelize } from "sequelize";

// const connect = async () => {
//   if (global.connection) {
//     return global.connection.connect();
//   }

//   const pool = new pg.Pool({
//     connectionString:
//       "postgres://oodshszh:C8x6k2Fg-53285EJuHoF1kEViHRi5Cwx@drona.db.elephantsql.com/oodshszh",
//   });
//   global.connection = pool;

//   return pool.connect();
// };

const sequelize = new Sequelize(
  "postgres://oodshszh:C8x6k2Fg-53285EJuHoF1kEViHRi5Cwx@drona.db.elephantsql.com/oodshszh",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;

// {
//   // connect,
// };
