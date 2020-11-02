$(document).ready(function ()
{

    $("#buttonBAC").click(BAC);
    function BAC()
    {
        let beerNum = parseFloat($("#beerNumInput").val());
        let wineNum = parseFloat($("#wineNumInput").val());
        let shotNum = parseFloat($("#shotNumInput").val());
        let weightNum = parseFloat($("#weightInput").val());
        let hoursNum = parseFloat($("#hoursInput").val());

        let beerBMI = beerNum * 0.54;
        let wineBMI = wineNum * 0.6;
        let shotBMI = shotNum * 0.6;

        let totalBMI = beerBMI + wineBMI + shotBMI;
        let averageAbsorptionRate = totalBMI * 7.5;
        let BAC = averageAbsorptionRate / weightNum;
        BAC = BAC - (hoursNum * 0.015);

        let finalBAC = BAC.toFixed(3);

        if (isNaN(BAC))
        {
            $("#outputBAC").append(`Please fill out all the inputs.\n`);
            $(".output").show();
        }
        else
        {
            $("#outputBAC").append(`Your BAC is ${finalBAC}%.\n`);
            $(".output").show();
        }
    }
});