function compute()
{
    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var compute = principal * (rate/100) * years;

    document.getElementById("result").innerHTML = 
    `<p>If you depodit ${principal},</p>
    <p>at an interest rate of ${rate}%.</p>
    <p>You will receive an amount of ${compute}</p>,
    <p>in the year ${2020 + years}</p>`;
    
}
        