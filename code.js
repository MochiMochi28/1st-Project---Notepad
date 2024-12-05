const container = document.querySelector('#container')

let dataList = [
    {
        id: 1,
        data: 'Sample', 
        title: 'Sample'
    },

]

const handleAdd = () => {
    const title = document.getElementById('title')
    const data = document.getElementById('data')

    const newData = {
        id: dataList.length + 1,
        title: title.value,
        data: data.value
    }

    dataList = [newData, ...dataList]

    container.innerHTML=''
    dataList.map(item => {
        return(
            container.innerHTML += `
            <div id=${item.id} class="notes" >
                <div class="notesContent">
                    <h1>${item.title}</h1>
                    <p>
                        ${item.data}
                    </p>
                </div>
                <div class="button">
                    <button class="notesButton" onclick='handleEdit(${item.id})'> Edit </button>
                    <button  class="notesButton" onclick='handleRemove(${item.id})'> Remove </button>
                </div>
            </div>`
        )
    })

}



function clearForm() {
    document.getElementById('title').value=" ";
    document.getElementById('data').value=" ";
}

const btnAdd = document.getElementById('btnAdd')
btnAdd.addEventListener('click', handleAdd )
btnAdd.addEventListener('click', clearForm )

btnAdd.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById(`${item.title}`).value;
    const data = document.getElementById(`${item.data}`).value;

    const itemList = document.getElementById('container');
    const newItem = createCard(title, data);
    itemList.appendChild(newItem);
   
});


function handleEdit(id){
    console.log(id)

    container.innerHTML = ``
    dataList.forEach((item,e) => {
        if(item.id == id)
        {
            return(
                container.innerHTML += 
                `<div class="editForm">
                    
                        <textarea type="text"  id="editTitle-${item.id}" class="editTitle"> ${item.title}</textarea>
                        <textarea type="url" id="editData-${item.id}" class="editData"> ${item.data} </textarea>
                                    
                    <div id="editFormButton">
                        <button class="editFormButton" onclick=handleUpdate(${item.id}) id="saveBtn${item.id}" >Save</button>
                        <button class="editFormButton" onclick=handleCancel(${item.id}) id="cancelBtn-${item.id}">Cancel</button>
                    </div>
                    
                </div>`
    
            )
        }
    })
}

function handleUpdate(id){

    const newTitle= document.getElementById(`editTitle-${id}`).value;
    const newDescription= document.getElementById(`editData-${id}`).value;

    container.innerHTML=''

    dataList.forEach((item) => {
       
        if(item.id == id)
        {
            item.title = newTitle;
            item.data = newDescription;
        }
       
        return(
            container.innerHTML += `
            <div id=${item.id} class="notes" >
                <div class="notesContent">
                    <h1>${item.title}</h1>
                    <p>
                        ${item.data}
                    </p>
                </div>
                <div class="button">
                    <button class="notesButton" onclick='handleEdit(${item.id})'> Edit </button>
                    <button  class="notesButton" onclick='handleRemove(${item.id})'> Remove </button>
                </div>
            </div>`
        )
    });

}

function handleCancel(){
    container.innerHTML=''
    dataList.map(item => {
        return(
            container.innerHTML += `
            <div id=${item.id} class="notes" >
                <div class="notesContent">
                    <h1>${item.title}</h1>
                    <p>
                        ${item.data}
                    </p>
                </div>
                <div class="button">
                    <button class="notesButton" onclick='handleEdit(${item.id})'> Edit </button>
                    <button  class="notesButton" onclick='handleRemove(${item.id})'> Remove </button>
                </div>
            </div>`
        )
    })
}


const handleRemove = (id) => {
    const filteredItems = dataList.filter(item => item.id !== id)
    dataList = filteredItems
    container.innerHTML=''
    dataList.map(item => {
        return(
            container.innerHTML += `
            <div id=${item.id} class="notes" >
                <div class="notesContent">
                    <h1>${item.title}</h1>
                    <p>
                        ${item.data}
                    </p>
                </div>
                <div class="button">
                    <button class="notesButton" onclick='handleEdit(${item.id})'> Edit </button>
                    <button  class="notesButton" onclick='handleRemove(${item.id})'> Remove </button>
                </div>
            </div>`
        )
    })
}

dataList.map(item => {
    return(
        container.innerHTML += `
        <div id=${item.id} class="notes" >
            <div class="notesContent">
                <h1>${item.title}</h1>
                <p>
                    ${item.data}
                </p>
            </div>
            <div class="button">
                <button class="notesButton" onclick='handleEdit(${item.id})'> Edit </button>
                <button  class="notesButton" onclick='handleRemove(${item.id})'> Remove </button>
            </div>
        </div>`
    )
})
 



