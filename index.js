window.onload = function () {
    var tabelaQ1 = document.getElementById("tabela-q1");
    var tabelaCorteQ1 = document.getElementById("tabela-corte-q1");
    var tabelaQ2 = document.getElementById("tabela-q2");
    var tabelaCorteQ2 = document.getElementById("tabela-corte-q2");
    var tabelaQ3 = document.getElementById("tabela-q3");
    var tabelaGP = document.getElementById("tabela-gp");

    dados_q1.forEach(function (linha) {
        var novaLinhaQ1 = tabelaQ1.insertRow();
        novaLinhaQ1.insertCell().innerHTML = linha.pos;
        novaLinhaQ1.insertCell().innerHTML = linha.piloto + ` (${linha.equipe})`;
        novaLinhaQ1.insertCell().innerHTML = linha.tempo;
        novaLinhaQ1.insertCell().innerHTML = linha.diferenca;
        novaLinhaQ1.insertCell().innerHTML = linha.voltas;
    });

    dados_corte_q1.forEach(function (link) {
        var novaLinhaCorteQ1 = tabelaCorteQ1.insertRow();
        novaLinhaCorteQ1.insertCell().innerHTML = link.pos;
        novaLinhaCorteQ1.insertCell().innerHTML = link.piloto + ` (${link.equipe})`;
        novaLinhaCorteQ1.insertCell().innerHTML = link.tempo;
        novaLinhaCorteQ1.insertCell().innerHTML = link.diferenca;
        novaLinhaCorteQ1.insertCell().innerHTML = link.voltas;
    });

    dados_q2.forEach(function (link) {
        var novaLinhaQ2 = tabelaQ2.insertRow();
        novaLinhaQ2.insertCell().innerHTML = link.pos;
        novaLinhaQ2.insertCell().innerHTML = link.piloto + ` (${link.equipe})`;
        novaLinhaQ2.insertCell().innerHTML = link.tempo;
        novaLinhaQ2.insertCell().innerHTML = link.diferenca;
        novaLinhaQ2.insertCell().innerHTML = link.voltas;
    });

    dados_corte_q2.forEach(function (link) {
        var novaLinhaCorteQ2 = tabelaCorteQ2.insertRow();
        novaLinhaCorteQ2.insertCell().innerHTML = link.pos;
        novaLinhaCorteQ2.insertCell().innerHTML = link.piloto + ` (${link.equipe})`;
        novaLinhaCorteQ2.insertCell().innerHTML = link.tempo;
        novaLinhaCorteQ2.insertCell().innerHTML = link.diferenca;
        novaLinhaCorteQ2.insertCell().innerHTML = link.voltas;
    });

    dados_q3.forEach(function (link) {
        var novaLinhaQ3 = tabelaQ3.insertRow();
        novaLinhaQ3.insertCell().innerHTML = link.pos;
        novaLinhaQ3.insertCell().innerHTML = link.piloto + ` (${link.equipe})`;
        novaLinhaQ3.insertCell().innerHTML = link.tempo;
        novaLinhaQ3.insertCell().innerHTML = link.diferenca;
        novaLinhaQ3.insertCell().innerHTML = link.voltas;
    });

    dados_gp.forEach(function (link) {
        var novaLinhaGP = tabelaGP.insertRow();
        novaLinhaGP.insertCell().innerHTML = link.pos;
        novaLinhaGP.insertCell().innerHTML = link.piloto + ` (${link.equipe})`;
        novaLinhaGP.insertCell().innerHTML = link.tempo;
        novaLinhaGP.insertCell().innerHTML = link.diferenca;
        novaLinhaGP.insertCell().innerHTML = link.voltas;
    });
}
