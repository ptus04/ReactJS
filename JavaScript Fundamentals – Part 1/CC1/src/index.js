// DATA 1
(() => {
    var markMass = 78;
    var markHeight = 1.69;
    
    var johnMass = 92;
    var johnHeight = 1.95;
    
    var markBMI = markMass / (markHeight * markHeight);
    var johnBMI = johnMass / (johnHeight * johnHeight);
    
    var markHigherBMI = markBMI > johnBMI;

    console.log('markBMI: ', markBMI,'johnBMI: ', johnBMI, 'markHigherBMI:', markHigherBMI);
})();

// DATA 2
(() => {
    var markMass = 95;
    var markHeight = 1.88;
    
    var johnMass = 85;
    var johnHeight = 1.76
    
    var markBMI = markMass / (markHeight * markHeight);
    var johnBMI = johnMass / (johnHeight * johnHeight);
    
    var markHigherBMI = markBMI > johnBMI;

    console.log('markBMI: ', markBMI,'johnBMI: ', johnBMI, 'markHigherBMI:', markHigherBMI);

})();


