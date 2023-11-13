function clicouNatalino(){
    document.querySelector('.cor').classList.add('natalino');
    document.querySelector('.cor').classList.remove('normal');
    document.querySelector('.cor').classList.remove('inicial');
}
function clicouNormal(){
    document.querySelector('.cor').classList.add('normal')
    document.querySelector('.cor').classList.remove('natalino');
    document.querySelector('.cor').classList.remove('inicial');
}

