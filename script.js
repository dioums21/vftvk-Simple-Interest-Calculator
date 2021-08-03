function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").innerHTML = "";
        document.getElementById("principal").focus();
        return false
    }

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal * (rate/100) * years;

    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = 
    `<p>If you deposit <mark>${principal}</mark>,</p>
    <p>at an interest rate of <mark>${rate}%</mark>.</p>
    <p>You will receive an amount of <mark>${interest}</mark,</p>
    <p>in the year <mark>${year}</mark>.</p>`;
    
}
function updateRate()
        {
            var rateval = document.getElementById("rate").value;
            document.getElementById("rate_val").innerText = `${rateval}%`;
        }
        