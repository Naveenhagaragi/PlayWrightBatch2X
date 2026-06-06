// if (statuscode >=200 && statuscode<= 300)
// This is a perfectly normal function

function validatestatuscode(status) {
    if (status >= 200 && status <= 300) {
        console.log('Request1 is Fine.!');
    }
}

validatestatuscode(200);

//This is Function as an Expression
const validatestatuscode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log('Request2 is Fine..!!')
    }
}

validatestatuscode_Exp(201);

//This is Arrow Function
const validatestatuscode_Arrow = status => {
    if (status >= 200 && status <= 300) {
        console.log('Request3 is Fine...!!!');
    }
}

validatestatuscode_Arrow(299);

