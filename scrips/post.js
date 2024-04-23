// document.getElementById('btnCadastrar').addEventListener('click', async (e) => {
//       e.preventDefault(); // Prevenir o envio do formulário
  
//       // URL do endpoint da aplicação web API
//       const url = "http://localhost:8001/usuarios";
  
//       // Valores que estão vindo do front-end
//       const nomeUsuario = document.getElementById('nomeUsuario').value;
//       const idade = document.getElementById('numIdade').value;
//       const endereco = document.getElementById('nomeEndereco').value;
//       const email = document.getElementById('email').value;
//       const telefone = document.getElementById('numTelefone').value;
  
//       const dadosEnviados = {
//           'nomeUsuario': nomeUsuario,
//           'idade': idade,
//           'endereco': endereco,
//           'email': email,
//           'telefone': telefone
//       };
  
//       try {
//           const response = await fetch(url, {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(dadosEnviados)
//           });
  
//           if (response.ok) {
//               alert("O usuário foi cadastrado com sucesso");
//               // Atualizar a tabela de usuários após o cadastro bem-sucedido (opcional)
//               getUsuarios();
//               // Limpar o formulário após o cadastro bem-sucedido
//               document.getElementById('formCadastro').reset();
//           } else {
//               alert("Erro ao cadastrar usuário. Tente novamente");
//           }
//       } catch (error) {
//           console.log(`O consumo do POST deu ruim: ${error}`);
//       }
//   });
  