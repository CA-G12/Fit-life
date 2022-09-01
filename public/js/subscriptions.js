window.onbeforeunload = getUserSubscriptions();

function rendrData(data) {
    const table = document.querySelector(".table");
    const tbody = document.createElement('tbody');
    data.forEach((record, index) => {
        const tr = document.createElement('tr');
        for (var prop in record) {
            const td = document.createElement('td');
            const recordValue = record[prop]
            if (prop === 'id') td.textContent = (index + 1)
            else if (prop === 'date') td.textContent = recordValue.split('T')[0]
            else if (prop === 'status') {
                const btn = document.createElement('button');
                btn.textContent = recordValue == 0 ? 'Dis Active' : 'Active'
                btn.setAttribute('class', 'btn btn-primary')
                btn.addEventListener('click', () => { changeSubsicriptionStatus(recordValue, record['id']) })
                td.appendChild(btn)
                tr.appendChild(td)
            }
            else td.textContent = recordValue
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    })
    table.lastElementChild.remove()
    table.appendChild(tbody)
}