import StormDB from 'stormdb';

export default function getDB(){
  const engine = new StormDB.localFileEngine("./database/db.stormdb");
  const db = new StormDB(engine);

  db.default({newsletter: [], comments: []});

  return db;
}