function addSymbol(symbol) {
    const inputField = document.getElementById('expresiones');
    const cursorPosition = inputField.selectionStart; // Get current cursor position
    const currentValue = inputField.value;
    const newValue = currentValue.slice(0, cursorPosition) + symbol + currentValue.slice(cursorPosition);

    inputField.value = newValue;
    const newCursorPosition = cursorPosition + symbol.length;
    inputField.setSelectionRange(newCursorPosition, newCursorPosition); // Set cursor position after inserted character
    inputField.focus(); // Ensure the input field remains focused
}

document.getElementById('agregarNegacion').addEventListener('click', function() {
    addSymbol('¬');
});

document.getElementById('agregarConjuncion').addEventListener('click', function() {
    addSymbol('∧');
});

document.getElementById('agregarDisyuncion').addEventListener('click', function() {
    addSymbol('∨');
});

document.getElementById('agregarImplicacion').addEventListener('click', function() {
    addSymbol('⇒');
});

document.getElementById('agregarBicondicional').addEventListener('click', function() {
    addSymbol('⇔');
});


document.getElementById('obtenerResultado').addEventListener('click', () => {
    vars = document.getElementById('vars').value.split(',').map(v => v.trim());
    expresiones = document.getElementById('expresiones').value.split(',').map(e => e.trim());

    let truthData = generateTruthTable(vars);
    writeTruthTable(vars, expresiones, truthData);
});

function generateTruthTable(vars) {
    let truthData = [];
    let numRows = Math.pow(2, vars.length);

    for (let i = numRows - 1; i >= 0; i--) {
        let row = {};
        for (let j = 0; j < vars.length; j++) {
            row[vars[j]] = !!(i & (1 << (vars.length - j - 1)));
        }
        truthData.push(row);
    }

    return truthData;
}

function writeTruthTable(vars, expresiones, truthData) {
    let table = '<table cellpadding=0 cellspacing=0>';
    
    table += '<thead><tr>';
    vars.forEach(v => {
        table += '<th>' + v + '</th>';
    });
    expresiones.forEach(expr => {
        table += '<th>' + expr + '</th>';
    });
    table += '</tr></thead>';

    truthData.forEach(row => {
        table += '<tr>';
        vars.forEach(v => {
            table += '<td>' + (row[v] ? 'T' : 'F') + '</td>';
        });
        expresiones.forEach(expr => {
            try {
                let exprRes = evalExpression(expr, row);
                table += `<td class="${exprRes}">` + (exprRes ? 'T' : 'F') + '</td>';
            } catch (e) {
                table += `<td class="error">Error</td>`;
                console.error(`Error evaluating expression: ${expr}`, e);
            }
        });
        table += '</tr>';
    });

    table += '</table>';

    document.getElementById('resultado').innerHTML = table;
}

function translateSymbols(expr) {
    const symbolMap = {
        '¬': '!',
        '∧': '&&',
        '∨': '||',
        '⇒': 'implies',
        '⇔': '==='
    };

    for (let symbol in symbolMap) {
        let regex = new RegExp(`\\${symbol}`, 'g');
        expr = expr.replace(regex, symbolMap[symbol]);
    }

    if(expr.includes('implies')){
        expr = expr.replace(/implies/g, () => {
            return `||`;
        });

        return "!" + expr;
    } 
        return expr;
    
}

function evalExpression(expr, row) {
    expr = translateSymbols(expr);

    for (let key in row) {
        let value = row[key] ? 'true' : 'false';
        expr = expr.replace(new RegExp(`\\b${key}\\b`, 'g'), value);
    }

    console.log(`Evaluating expression: ${expr}`);
    return eval(expr);
}

// more info section
document.getElementById('info').addEventListener('click', displayMoreInfo);

function displayMoreInfo(){
    var moreInfo = document.getElementById('moreInfo');

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
      } else {
        moreInfo.style.display = "none";
      }
    
}

document.getElementById('cerrar').addEventListener('click', hideMoreInfo);

function hideMoreInfo(){
    var moreInfo = document.getElementById('moreInfo');

    moreInfo.style.display = "none";
    
}


// Funcion Limpiar
function limpiar() {
    document.getElementById('vars').value = '';
    document.getElementById('expresiones').value = '';
    document.getElementById('resultado').innerHTML = '';
}

document.getElementById('limpiar').addEventListener('click', limpiar);


// dark mode
document.getElementById('moon').addEventListener('click', myFunction);

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");


    var input1 = document.getElementById('vars')
    var input2 = document.getElementById('expresiones')

    input1.classList.toggle("input-dark");
    input2.classList.toggle("input-dark");

    var button1 = document.getElementById('agregarNegacion');
    var button2 = document.getElementById('agregarConjuncion');
    var button3 = document.getElementById('agregarDisyuncion');
    var button4 = document.getElementById('agregarImplicacion');
    var button5 = document.getElementById('agregarBicondicional');

    var btn_obtenerResultado = document.getElementById('obtenerResultado');
    var limpiar = document.getElementById('limpiar');

    button1.classList.toggle("button-dark");
    button2.classList.toggle("button-dark");
    button3.classList.toggle("button-dark");
    button4.classList.toggle("button-dark");
    button5.classList.toggle("button-dark");
    btn_obtenerResultado.classList.toggle("button-dark");
    limpiar.classList.toggle("button-dark");


    var moon = document.getElementById('moonIcon');
    var info = document.getElementById('infoIcon')
    var cerrar = document.getElementById('cerrar')


    moon.classList.toggle("moon-dark");
    info.classList.toggle("moon-dark");
    cerrar.classList.toggle("cerrar-dark");


    var moreInfo = document.getElementById('moreInfo');

    moreInfo.classList.toggle("moreInfo-dark");


}