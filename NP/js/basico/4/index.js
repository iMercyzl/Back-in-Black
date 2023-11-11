const estilo = 'natalino';

if(estilo == 'normal'){
    document.querySelector('.inicial').classList.add('normal');
    document.querySelector('.inicial').classList.remove('inicial');	
}

if(estilo == 'natalino'){
    document.querySelector('.inicial').classList.add('natalino');
    document.querySelector('.inicial').classList.remove('inicial');
}

