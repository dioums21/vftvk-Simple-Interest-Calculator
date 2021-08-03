function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a positive number");
        fprincipal.focus();
        return false
    }
    return true;

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal * (rate/100) * years;

    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = 
    `<p>If you deposit <span class="highlight">${principal}</span>,</p>
    <p>at an interest rate of <span class="highlight">${rate}%</span>.</p>
    <p>You will receive an amount of <span class="highlight">${interest}</span>,</p>
    <p>in the year <span class="highlight">${year}</span>.</p>`;
    
}
function updateRate()
        {
            var rateval = document.getElementById("rate").value;
            document.getElementById("rate_val").innerText = `${rateval}%`;
        }
        