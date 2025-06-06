window.onload = function () {
    var tabelaQ1 = document.getElementById("tabela-q1");
    var tabelaQ2 = document.getElementById("tabela-q2");
    var tabelaQ3 = document.getElementById("tabela-q3");
    var tabelaGrid = document.getElementById("tabela-grid");
    var tabelaGP = document.getElementById("tabela-gp");

    dados_q1.forEach(function (linha) {
        var novaLinhaQ1 = tabelaQ1.insertRow();
        novaLinhaQ1.insertCell().innerHTML = linha.pos;
        novaLinhaQ1.insertCell().innerHTML = linha.piloto;
        novaLinhaQ1.insertCell().innerHTML = linha.tempo;
        novaLinhaQ1.insertCell().innerHTML = linha.diferenca;
        novaLinhaQ1.insertCell().innerHTML = linha.voltas;
    });

    dados_q2.forEach(function (link) {
        var novaLinhaQ2 = tabelaQ2.insertRow();
        novaLinhaQ2.insertCell().innerHTML = link.pos;
        novaLinhaQ2.insertCell().innerHTML = link.piloto;
        novaLinhaQ2.insertCell().innerHTML = link.tempo;
        novaLinhaQ2.insertCell().innerHTML = link.diferenca;
        novaLinhaQ2.insertCell().innerHTML = link.voltas;
    });

    dados_q3.forEach(function (link) {
        var novaLinhaQ3 = tabelaQ3.insertRow();
        novaLinhaQ3.insertCell().innerHTML = link.pos;
        novaLinhaQ3.insertCell().innerHTML = link.piloto;
        novaLinhaQ3.insertCell().innerHTML = link.tempo;
        novaLinhaQ3.insertCell().innerHTML = link.diferenca;
        novaLinhaQ3.insertCell().innerHTML = link.voltas;
    });

    dados_grid.forEach(function (link) {
        var novaLinhaGrid = tabelaGrid.insertRow();
        novaLinhaGrid.insertCell().innerHTML = link.pos;
        novaLinhaGrid.insertCell().innerHTML = link.piloto;
        novaLinhaGrid.insertCell().innerHTML = link.tempo;
        novaLinhaGrid.insertCell().innerHTML = link.diferenca;
        novaLinhaGrid.insertCell().innerHTML = link.voltas;
    });

    dados_gp.forEach(function (link) {
        var novaLinhaGP = tabelaGP.insertRow();
        novaLinhaGP.insertCell().innerHTML = link.pos;
        novaLinhaGP.insertCell().innerHTML = link.piloto;
        novaLinhaGP.insertCell().innerHTML = link.tempo;
        novaLinhaGP.insertCell().innerHTML = link.diferenca;
        novaLinhaGP.insertCell().innerHTML = link.voltas;
    });
}
