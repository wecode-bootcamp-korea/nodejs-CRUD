import server from './server';

const PORT = 8000;

const handleListening = () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
};

server.listen(PORT, handleListening);
