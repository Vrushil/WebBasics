//alert("You arr set!")
var  ul = document.getElementById('list')
var li;
var addButton = document.getElementById('add')

addButton.addEventListener('click', addItem)


var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var removeallButton = document.getElementById('removeall')
removeallButton.addEventListener('click',removeallItems)



function addItem()
{
    var input= document.getElementById('input')
    inputtext= input.value;
    //console.log(inputtext)

    ul=document.getElementById('list')
    var textnode=document.createTextNode(inputtext)

    if(inputtext===''){
    console.log('Please insert data')
   // var inputbox=document.getElementById('input')
     //   errorElement= document.createElement('p')
       // errorElement.textContent='Please enter task name'
        //document.querySelector('#removeall').appendChild(errorElement)
      alert('Task name cannot be empty')
        return false}

    else
    {
        //create li
        li= document.createElement('li')
        // create checkbox
        var checkbox= document.createElement('input')
        checkbox.type='checkbox'
        checkbox.setAttribute('id','check')
        // create labell
        var label = document.createElement('label')
      //  label.createTextNode(inputtext)

        

      ul.appendChild(li)
      li.appendChild(checkbox)
      label.appendChild(textnode)
      li.appendChild(label)
      ul.insertBefore(li,ul.childNodes[0])

      setTimeout(()=>{li.className='visual'},2)
      
        console.log("Item added")
}
    }
    

function removeItem(){
    li=ul.children;
    for (let index = 0; index < li.length; index++) {
       
        while( li[index] &&  li[index].children[0].checked)

        { const element = li[index];
            console.log("Item removed")
            element.remove()}
        
    }}
    

    function removeallItems(){
        li=ul.children;
        len=li.length
     
        while(len>0)
        {
            console.log(li[len-1])
           li[len-1].remove()
            len--
        }

    }

