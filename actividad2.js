const axios = require("axios");

async function getUsers() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data.slice(0, 3);
}

async function getPosts(userId) {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts", { params: { userId } });
  return res.data;
}

async function secuencial() {
  try {
    const usuarios = await getUsers();
    for (const u of usuarios) {
      const posts = await getPosts(u.id);
      console.log(`${u.name} tiene ${posts.length} publicaciones`);
    }
  } catch (err) {
    console.error("Error en ejecucion secuencial:", err.message);
  }
}

async function paralela() {
  try {
    const usuarios = await getUsers();
    const promesasPosts = usuarios.map(u => getPosts(u.id));
    const resultados = await Promise.all(promesasPosts);
    resultados.forEach((posts, i) => {
      console.log(`${usuarios[i].name} tiene ${posts.length} publicaciones`);
    });
  } catch (err) {
    console.error("Error en ejecucion paralela:", err.message);
  }
}

(async function main() {
  console.log("Secuencial");
  await secuencial();

  console.log("Paralela");
  await paralela();
})();