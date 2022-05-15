//Definir variável de ambiente BASE_URL
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080/";
//process.env.REACT_APP padrão para o netlify - criar a variável no netlify BACKEND_URL
//http://localhost:8080/ acessar projeto local