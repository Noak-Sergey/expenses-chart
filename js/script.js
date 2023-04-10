window.addEventListener("DOMContentLoaded", () => {

    const gistogramColumns = document.querySelector('.gistogram__columns');

    const selectColumn = (item) => {
        console.log(item);
        const sum = item.querySelector('.columns__sum');
        sum.classList.toggle('hide')
    }

    const paintingMaxBar = () => {
        const columns = document.querySelectorAll('.columns__column');
        console.log(columns);
        let maxBar = columns[0].style.height;
        
        for( let i = 1; i < columns.length; i++) {
            if(columns[i-1].style.height > maxBar) {
                maxBar = columns[i].style.height
            }    
        }
        return console.log(maxBar);
    }

    const getData = async () => {
        const response = await fetch('data.json');
        const data = await response.json();
        return data;
    }

    getData()
        .then(data => {
            data.forEach( item => {
                const element = document.createElement('div');

                    element.classList.add('columns__item');

                    element.innerHTML = ` 
                        <div class="columns__sum hide">$${item.amount}</div>
                        <div class="columns__column" style=height:${item.amount * 2}px></div>
                        <div class="columns__dayName">${item.day}</div>  
                    `;
                gistogramColumns.append(element);   
            })
            document.querySelectorAll('.columns__item').forEach(item => {item.addEventListener('click', () => selectColumn(item))});
            paintingMaxBar()    
        })
     
})

