const chart = document.querySelector(".card-balance_block");


fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);

    const maxAmount = Math.max(...data.map(item => item.amount));
    const maxBarHeight = 150;
    const scale = maxBarHeight / maxAmount;
    
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = days[new Date().getDay()];


    data.forEach((item) => {
        const barItem = document.createElement("div");
        const bar = document.createElement("div");
        const day = document.createElement("div");
        const amount = document.createElement("div");

        amount.classList.add("bar-amount");
        amount.textContent = `$${item.amount}`;

        barItem.classList.add("bar-item");
        bar.classList.add("bar");
        bar.setAttribute("tabindex", "0");
        bar.setAttribute("aria-label", `${item.day}: $${item.amount}`);
        day.classList.add("bar-day");

        day.textContent = item.day;
        barItem.append(amount);
        barItem.append(bar);
        barItem.append(day);

        chart.append(barItem);

        bar.style.height = `${item.amount * scale}px`;

        if (item.day === today) {
            bar.classList.add("bar-today");
        }


        
    })



});


