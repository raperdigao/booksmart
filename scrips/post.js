document.getElementById('btnCadastrar').addEventListener('click', async (e) => {
      e.preventDefault(); // Previmir o envio do formulario
      
      //url do endpoint da aplicação web api
      const url = "http://localhost:8000/series"

      // valores que esta vindo do front end

      const dadosEnviados = {
            'id': Math.floor(Math.random() * 100),
            'nomeSerie': document.getElementById('nomeSerie').value,
            'numTemporada': document.getElementById('numTemporada').value,
            'nomeEstudio': document.getElementById('nomeEstudio').value,
            'anoLancamento': document.getElementById('anoLancamento').value
      }

      try {
            await fetch(url, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(dadosEnviados)
            })

            const response = await fetch(url)

            if (response.ok) {
                  alert("A Série foi cadastrado com sucesso")
            } else {
                  alert("Erro ao cadastrar série. Tente novamente")
            }

            window.location.reload()

            document.getElementById('btnCadastrar').removeEventListener('click', arguments.callee)

            
      } catch (error) {
            console.log(`O consumo do post deu ruim ${error}`);
      }
})