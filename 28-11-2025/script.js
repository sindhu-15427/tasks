
const cryptoData = [
    { name: "Bitcoin", price: "$55,206.01", d24: "+0.92%", d7: "+15.58%", cap: "$1,046,899,935,348", vol: "$1,046,899,935,348" },
    { name: "Ethereum", price: "$3,206.01", d24: "-0.32%", d7: "+1.58%", cap: "$500,899,935,348", vol: "$243,899,935,348" },
    { name: "Cardano", price: "$2.10", d24: "-0.52%", d7: "-1.58%", cap: "$95,899,935,348", vol: "$12,899,935,348" },
    { name: "Tether", price: "$1.00", d24: "+0.02%", d7: "+0.10%", cap: "$75,899,935,348", vol: "$20,899,935,348" },
    { name: "Avalanche", price: "$35.20", d24: "-0.12%", d7: "-15.18%", cap: "$10,899,935,348", vol: "$9,899,935,348" }
];

let table = document.getElementById("cryptoTable");

cryptoData.forEach((c, i) => {
    let row = `
        <tr>
            <td>${i+1}</td>
            <td>${c.name}</td>
            <td>${c.price}</td>
            <td>${c.d24}</td>
            <td>${c.d7}</td>
            <td>${c.cap}</td>
            <td>${c.vol}</td>
            <td><img src="graph.png" width="80"></td>
        </tr>
    `;
    table.innerHTML += row;
});