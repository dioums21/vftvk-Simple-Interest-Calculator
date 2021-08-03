function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number");
        principal.focus();
        return false
    }
    return true;

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal * (rate/100) * years;

    var year = new Date().getFullYear() + parseInt(years);

    function updateRate()
        {
            var rateval = document.getElementById("rate").value;
            document.getElementById("rate_val").innerText = rateval;
        }

    document.getElementById("result").innerHTML = 
    `<p>If you depodit ${principal},</p>
    <p>at an interest rate of ${rate}%.</p>
    <p>You will receive an amount of ${interest},</p>
    <p>in the year ${year}.</p>`;
    
}
        