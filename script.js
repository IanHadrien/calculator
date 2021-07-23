function calculator() {
    const display = document.querySelector('.display');

    function displayValue(value) {
        display.value += value;
    }

    function doAccount () {
        let account = display.value;

        try {

            account = eval(account);
            if(account === undefined) {
                alert('Invalid account');
                return;
            }
            display.value = String(account);

        } catch (error) {
            alert('Invalid');
            display.value = '';
            return;
        }

    }

    function deleteOne () {
        display.value = display.value.slice(0, -1);
    }

    function reset() {
        display.value = '';
    }

    function clickBotton() {
        document.addEventListener('click', e => {
            const element = e.target;
            
            if(element.classList.contains('number')) {
                displayValue(element.innerText);
            }

            if(element.classList.contains('equal')) {
                doAccount();
            }

            if(element.classList.contains('DEL')) {
                deleteOne();
            }

            if(element.classList.contains('reset')) {
                reset();
            }

        });

        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                doAccount();
            }
        });
    }
    clickBotton();
}

function theme() {
    document.body.setAttribute('data-theme', 't-theme1');
    const theme1 = document.querySelector('.theme1');
    const theme2 = document.querySelector('.theme2');
    const theme3 = document.querySelector('.theme3');

    theme1.addEventListener('click', e => {
        document.body.setAttribute('data-theme', 't-theme1');
    });

    theme2.addEventListener('click', e => {
        document.body.setAttribute('data-theme', 't-theme2');
    });

    theme3.addEventListener('click', e => {
        document.body.setAttribute('data-theme', 't-theme3');
    });

}

calculator();
theme();