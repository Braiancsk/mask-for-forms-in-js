         function maskNumber(){
    document.getElementById('telefone').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,0})(\d{0,2})(\d{0,1})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '+' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '') + (x[4] ? '-' + x[4] : '');
      });
  }

  function maskCpf(){
        document.getElementById('cpf').addEventListener('input', function (e) {
            var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            e.target.value = !x[2] ? x[1] : '' + x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '') + (x[4] ? '-' + x[4] : '');
          });
      }

  function maskCep(){
    document.getElementById('cep').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : '' + x[1] + x[2] + (x[3] ? '-' + x[3] : '');
      });
  }
  function maskCNPJ(){
    document.getElementById('cnpj').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : '' + x[1] + '.' + x[2] + (x[3] ? '.' + x[3] : '') + (x[4] ? '/' + x[4] : '') + (x[5] ? '.' + x[5] : '');
      });
  }  
  function initApps(){
      maskNumber();
      maskCpf();
      maskCep();
      maskCNPJ();
  }

  initApps();
