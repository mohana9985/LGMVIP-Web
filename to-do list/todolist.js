function addtodo()
        {
            const todoinput =document.getElementById("todo-input");
            const todolist=document.getElementById('todo-list');
            const todotext=todoinput.value.trim();
            if(todotext !=='')
            {
                const todoitem = createtodoitem(todotext);
                todolist.appendChild(todoitem);
                todoinput.value='';
            }
        }
        function createtodoitem(todotext)
        {
            const todoitem = document.createElement('div');
            todoitem.className = 'todo-item';

            const check =document.createElement('input');
            check.className="check";
            check.type='checkbox';

            const label =document.createElement('label');
            label.classList="label";
            label.textContent=todotext;

            const removebutton=document.createElement('button');
            removebutton.className='remove';
            removebutton.textContent="Remove";
            removebutton.addEventListener('click',function()
            {
                todoitem.remove();
            });
            check.addEventListener('change', e => {
                if (e.target.checked === true) {
                    label.innerHTML = '<s>' + label.textContent + '</s>';
                }
                else {
                    label.innerHTML = label.textContent;
                }
            });
            todoitem.appendChild(check);
            todoitem.appendChild(label);
            todoitem.appendChild(removebutton);
            return todoitem;
        }