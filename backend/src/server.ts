import app from './app';
import env from './config/env';
import { testConnection, syncDatabase } from './db/connection';
import './models';

const port = normalizePort(env.port);
app.set('port', port);

async function startServer() {
  try {
    await testConnection();
    await syncDatabase();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('No se pudo conectar a MySQL:', message);
    console.error('Verifica las variables DB_* en tu archivo .env');
    process.exit(1);
  }

  const server = app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });

  server.on('error', onError);
}

function normalizePort(value: string | number): string | number | false {
  const parsedPort = Number.parseInt(String(value), 10);

  if (Number.isNaN(parsedPort)) {
    return value;
  }

  if (parsedPort >= 0) {
    return parsedPort;
  }

  return false;
}

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requiere privilegios elevados`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} ya esta en uso`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

startServer();
