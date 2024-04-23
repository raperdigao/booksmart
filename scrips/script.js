// document.addEventListener("DOMContentLoaded", (e) => {
//   const url = "http://localhost:8001/usuarios";

//   async function getUsuarios() {
//     try {
//       const response = await fetch(url);
//       console.log(response);

//       const dados = await response.json();
//       console.log(dados);

//       dados.forEach((usuario) => {
//         const listaUsuarios = document.getElementById("listaUsuarios");
//         const tr = document.createElement("tr");

//         // Criação das células da tabela
//         const nomeUsuario = document.createElement("td");
//         nomeUsuario.textContent = usuario.nomeUsuario;
//         const idade = document.createElement("td");
//         idade.textContent = usuario.idade;
//         const endereco = document.createElement("td");
//         endereco.textContent = usuario.endereco;
//         const email = document.createElement("td");
//         email.textContent = usuario.email;
//         const telefone = document.createElement("td");
//         telefone.textContent = usuario.telefone;

//         // Criação dos ícones de editar e deletar
//         const tdEdit = document.createElement("img");
//         tdEdit.src = "./assets/icons/pencil-fill.svg";

//         tdEdit.addEventListener("click", () => {
//           const id = usuario.id;
//           alert(id);

//           // Modifica o título
//           document.getElementById("title-form").textContent = "Atualizar Usuário";
//           document.getElementById("btnCadastrar").textContent = "Atualizar";

//           // Preenche os campos com os dados do usuário selecionado
//           document.getElementById("nomeUsuario").value = usuario.nomeUsuario;
//           document.getElementById("numIdade").value = usuario.idade;
//           document.getElementById("nomeEndereco").value = usuario.endereco;
//           document.getElementById("email").value = usuario.email;
//           document.getElementById("numTelefone").value = usuario.telefone;

//           // Condição para confirmar atualização do usuário
//           if (window.confirm("Você deseja atualizar o usuário ?")) {
//             document.getElementById("btnCadastrar").removeEventListener("click");
//             document.getElementById("btnCadastrar").addEventListener("click", () => {
//               // Lógica para atualizar o usuário
//             });
//           }
//         });

//         // Criação do ícone de deletar
//         const tdDelete = document.createElement("img");
//         tdDelete.src = "./assets/icons/trash-fill.svg";

//         tdDelete.addEventListener("click", async () => {
//           const id = usuario.id;
//           alert(`Removendo: ${usuario.nomeUsuario}`);
//           if (window.confirm("Você deseja excluir o usuário ?")) {
//             try {
//               const retorno = await fetch(`${url}/${id}`, {
//                 method: "DELETE"
//               });

//               if (retorno.ok) {
//                 alert("Usuário excluído com sucesso!");
//               } else {
//                 alert(`O usuário não pode ser excluído ${retorno.status}`);
//               }

//               // Atualiza a página após a exclusão (opcional)
//               // window.location.reload();
//             } catch (error) {
//               console.log(error);
//             }
//           }
//         });

//         // Adiciona classes aos ícones
//         tdEdit.classList.add("edit");
//         tdDelete.classList.add("delete");

//         // Adiciona as células à linha da tabela
//         tr.appendChild(nomeUsuario);
//         tr.appendChild(idade);
//         tr.appendChild(endereco);
//         tr.appendChild(email);
//         tr.appendChild(telefone);
//         tr.appendChild(tdEdit);
//         tr.appendChild(tdDelete);

//         // Adiciona a linha à lista de usuários
//         listaUsuarios.appendChild(tr);
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   getUsuarios();
// });
