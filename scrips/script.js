// Realizar o consumo da nossa api
// Get

// Colocando esta função pode colocar o script no head, pois precisa primeiro processar os elementos do html e depois o script
document.addEventListener("DOMContentLoaded", (e) => {
  const url = "http://localhost:8000/series";

  async function getSeries() {
    try {
      const response = await fetch(url);
      console.log(response);

      const dados = await response.json();
      console.log(dados);

      dados.forEach((series) => {
        const listaSeries = document.getElementById("listaSeries");
        const tr = document.createElement("tr");
        const div = document.createElement("div");

        // Criaçção das celulas da nossa tabela
        const nomeSerie = document.createElement("td");
        nomeSerie.textContent = series.nomeSerie;
        const numTemporada = document.createElement("td");
        numTemporada.textContent = series.numTemporada;

        const anoLancamento = document.createElement("td");
        anoLancamento.textContent = series.anoLancamento;
        const nomeEstudio = document.createElement("td");
        nomeEstudio.textContent = series.nomeEstudio;

        // criar os icones de editar e deletar direto no java script
        // Criar metodo PUT para atualizar o cadastro com icones do bootstrap
        const tdEdit = document.createElement("img");
        tdEdit.src = "./assets/icons/pencil-fill.svg";

        tdEdit.addEventListener("click", () => {
          const id = series.id;
          //   Para mostrar qualquer ID
          alert(id);

          // Modifica o titulo
          document.getElementById("title-form").textContent = "Atualizar Série";
          document.getElementById("btnCadastrar").textContent = "Atualizar";

          // Irá puxar o cadastro para depois atualizar
          document.getElementById("nomeSerie").value = series.nomeSerie;
          document.getElementById("numTemporada").value = series.numTemporada;
          document.getElementById("nomeEstudio").value = series.nomeEstudio;
          document.getElementById("anoLancamento").value = series.anoLancamento;

          //   Condiçao para confirmar atualização da serie

          if (window.confirm("Você deseja atualizar a série ?")) {
            document
              .getElementById("btnCadastrar")
              .removeEventListener("click");

            document.getElementById("btnCadastrar"),
              addEventListener("click", AtualizarSerie);

            async function AtualizarSerie() {
              try {
                const dadosEnviadosAtualizados = {
                  nomeSerie: document.getElementById("nomeSerie").value,
                  numTemporada: document.getElementById("numTemporada").value,
                  nomeEstudio: document.getElementById("nomeEstudio").value,
                  anoLancamento: document.getElementById("anoLancamento").value,
                };

                const retorno = await fetch(`${url}/${id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(dadosEnviadosAtualizados),
                });

                if (retorno.ok) {
                  alert("Sérié Atualizada com sucesso!");
                } else {
                  alert(`A Série não pode ser atualizada ${retorno.status}`);
                }

                window.location.reload();
              } catch (error) {
                console.log(error);
              }
            }
          }
        });

        // Fim do metodo PUT ATUALIZAR

        // CRIAR MÉTODO DELETE PARA EXCLUIR CADASTRO
        const tdDelete = document.createElement("img");
        tdDelete.src = "./assets/icons/trash-fill.svg";

        tdDelete.addEventListener("click", async () => {
          const id = series.id;
          //   Para mostrar QUAL ID SERÁ EXCLUIDA
          alert(`Removendo: ${series.nomeSerie}`);
          if (window.confirm("Você deseja excluir a série ?")) {

            try {
                const retorno = await fetch(`${url}/${id}`, {
                  method: "DELETE"
                });
  
                console.log(retorno);
  
                if (retorno.ok) {
                  alert("Sérié Excluida com sucesso!");
                } else {
                  alert(`A Série não pode ser Excluida ${retorno.status}`);
                }
  
                // window.location.reload();
              } catch (error) {
                console.log(error);
              }

         
          }
          
        });

         // Fim do metodo DELETE ATUALIZAR



         

        //  Criar uma classa para imagem LAPIS EDITAR no java script

        //  Criar uma classa para imagem LIXEIRA DELETAR no java script
        tdDelete.classList.add("delete");

        // O QUE IRÁ APARECER NA TABELA DO JAVA SCRIPT
        tr.appendChild(nomeSerie);
        tr.appendChild(numTemporada);
        tr.appendChild(anoLancamento);
        tr.appendChild(nomeEstudio);
        tr.appendChild(div);
        div.appendChild(tdEdit);
        div.appendChild(tdDelete);

        listaSeries.appendChild(tr);
      });
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  }

  getSeries();
});
