import pg from 'pg';

const connect = async () => {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString: "postgres://oodshszh:C8x6k2Fg-53285EJuHoF1kEViHRi5Cwx@drona.db.elephantsql.com/oodshszh",
  });
  global.connection = pool;

  return pool.connect();
}

export default {
  connect
}
