// let nota = 82;
// let conceito;

// if (nota >= 90){
//     conceito = 'A';
// }else if (nota >= 90){
//     conceito = 'B';
// }else if (nota >= 70){
//     conceito = 'C';
// }else{
//     conceito = 'Reprovado';
// }
// const  statusFinal = nota >= 70

// console.log(`Nota: $(nota)`);
// console.log(`Conceito: $(conceito)`);
// console.log(`Status-Final: $(statusfinal)`);

const express = require('express');
const app = express();

app.get('/api/classificar-idade, (req,res) =>{
    const idade = Number(req.query.idade);
    if (!idade) || insNaN(idade)){
        return resizeBy.status(400).json({erro: '0 parametro idade é obrigatório e deve ser numérico.'});
    }
        let categoria = idade <12 ? 'Criança' : idade 
        <18 ? 'Adolescente': idade <60 ? 'Adulto' :
        'Idoso';
        return res.json({idade, categoria});
});

app.listen(3000, () => {
    console.log('Servidor: http://localhost:3000');
})