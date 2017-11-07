'use strict';


//jquery click event on button of form
$('#apiBtn').click(function () {
    console.log("clicked")
    let drug = $('#searchApi').val();
    console.log(drug);

    //ajax call to the api
    $.ajax({
        url: `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${drug}`
    })
        .done(executeAfterAJAX)
        .fail(executeIfFailed);//to check for failure

    //ajax helper functions
    function executeAfterAJAX(data) {
        let drugArray = data.drugGroup.conceptGroup;
        // ajax call gives an array of objects- search through each until you find the one that has objects with the property of conceptGroup
        let result = findDrugObj(drugArray);
        console.log("result", result[0].conceptProperties);//this gives the array of drug objects we can then loop over for autocomplete?
        let newDrugArray = result[0].conceptProperties;
        newDrugArray.forEach((drug) => {
            $('#target').append(`<input class="col-xs-12 col-sm-12 col-md-12 col-lg-12" type="radio" name="medication" value="${drug.name}"> <label class="col-xs-12 col-sm-12 col-md-12 col-lg-12" for="medication">${drug.name}</label> <br>`);
        })
    }

    function executeIfFailed(error) {
        console.log(error.statusText);
    }
})

//helper function
function findDrugObj(array) {//loop through array and return the object that has property of conceptGroup
    let filteredDrugs = array.filter(item => item.conceptProperties);
    filteredDrugs = filteredDrugs.slice(0,20);// limit filtered drugs to the first 20 results
    return filteredDrugs;

}


