import mysql from "mysql2";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url'

const config = fs.readFileSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'config.json'));

const db_config = config?.db || {};
const host = db_config?.host || 'localhost';
const user = db_config?.user || 'root';
const password = db_config?.password || '';
const database = db_config?.database || 'wcs_random_draw';

const db = mysql.createConnection({
    host,
    user,
    password,
    database
})

export default db;