import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URL
const dbName = process.env.DB_NAME || 'standout_website'

if (!uri) {
  console.warn('MONGO_URL is not set — database features (blog, etc.) will fail until it is configured in .env')
}

let clientPromise

function createClientPromise() {
  const client = new MongoClient(uri)
  return client.connect()
}

if (process.env.NODE_ENV === 'development') {
  // Reuse the connection across hot-reloads in dev so we don't open a new
  // connection pool on every file change.
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = createClientPromise()
  }
  clientPromise = global._mongoClientPromise
} else {
  clientPromise = createClientPromise()
}

export async function getDb() {
  const client = await clientPromise
  return client.db(dbName)
}
