let vars = ['a','b','c'], expresiones = ['! ( a || b || c )', '(!a && !b && !c)'];

document.getElementById('obtenerResultado').addEventListener('click', ()=>{
    let largo = vars.length,
    splitBy = Math.round(largo/2),
    trueSet,
    trues = [],
    falses = [],
    truthData = [];

    vars = document.getElementById('vars').value.split(',');
    expresiones = document.getElementById('expresiones').value.split(',');

    truthData.push(truth(vars, vars, true));
    for(var i=1; i <= splitBy; i++){
        trueSet = reduceToCombinations(permut(vars,i));

        trueSet.forEach((truthSrc) => {
            trues = truth(vars, truthSrc);
            truthData.push(trues);
        });
    }
    truthData.push(truth(vars,vars));

    writeTruthTable(truthData);
});

