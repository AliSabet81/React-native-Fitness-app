import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase | null = null;

export const dbName = "AliWorkoutTracker.db";

const createWorkoutsTableQuery = `
  CREATE TABLE IF NOT EXISTS workouts (
    id TEXT PRIMARY KEY, 
    created_at TEXT, 
    finished_at TEXT
  );`;

export const getDB = async () => {
  if (db) {
    return db;
  }

  db = await SQLite.openDatabaseAsync(dbName);

  await db.execAsync(createWorkoutsTableQuery);

  return db;
};
