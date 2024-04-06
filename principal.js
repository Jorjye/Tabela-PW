
document.addEventListener('DOMContentLoaded', function() {
    const escuro = document.getElementById('escuro');
    const vidro = document.getElementById('vidro');
    const ametal = document.getElementsByClassName('ametal');
    const alcalino = document.getElementsByClassName('alcalino');
    const terroso = document.getElementsByClassName('terroso');
    const transição = document.getElementsByClassName('transição');
    const nobre = document.getElementsByClassName('nobre');
    const halo = document.getElementsByClassName('halo');
    const semi = document.getElementsByClassName('semi');
    const outros = document.getElementsByClassName('outros');
    const lanta = document.getElementsByClassName('lanta');
    const act = document.getElementsByClassName('act');

    function Cor() {
        if (escuro.checked && vidro.checked) {

            for (let x = 0; x < ametal.length; x++) {
                ametal[x].classList.add('vidro');
            }
            for (let x = 0; x < alcalino.length; x++) {
                alcalino[x].classList.add('vidro');
            }
            for (let x = 0; x < terroso.length; x++) {
                terroso[x].classList.add('vidro');
            }
            for (let x = 0; x < transição.length; x++) {
                transição[x].classList.add('vidro');
            }
            for (let x = 0; x < nobre.length; x++) {
                nobre[x].classList.add('vidro');
            }
            for (let x = 0; x < halo.length; x++) {
                halo[x].classList.add('vidro');
            }
            for (let x = 0; x < semi.length; x++) {
                semi[x].classList.add('vidro');
            }
            for (let x = 0; x < outros.length; x++) {
                outros[x].classList.add('vidro');
            }
            for (let x = 0; x < lanta.length; x++) {
                lanta[x].classList.add('vidro');
            }
            for (let x = 0; x < act.length; x++) {
                act[x].classList.add('vidro');
            }
            
        } else {

            for (let x = 0; x < ametal.length; x++) {
                ametal[x].classList.remove('vidro');
            }
            for (let x = 0; x < alcalino.length; x++) {
                alcalino[x].classList.remove('vidro');
            }
            for (let x = 0; x < terroso.length; x++) {
                terroso[x].classList.remove('vidro');
            }
            for (let x = 0; x < transição.length; x++) {
                transição[x].classList.remove('vidro');
            }
            for (let x = 0; x < nobre.length; x++) {
                nobre[x].classList.remove('vidro');
            }
            for (let x = 0; x < halo.length; x++) {
                halo[x].classList.remove('vidro');
            }
            for (let x = 0; x < semi.length; x++) {
                semi[x].classList.remove('vidro');
            }
            for (let x = 0; x < outros.length; x++) {
                outros[x].classList.remove('vidro');
            }
            for (let x = 0; x < lanta.length; x++) {
                lanta[x].classList.remove('vidro');
            }
            for (let x = 0; x < act.length; x++) {
                act[x].classList.remove('vidro');
            }
            
        }
    }

    escuro.addEventListener('change', Cor);
    vidro.addEventListener('change', Cor);
});