import { useEffect, useState } from "react";
import { Todo } from "../../types/Todo";


const Todo = () => {

    // CSR
    const [todoList, setTodoList]  = useState<Todo[]>([]);
    const [loding, setLoding] = useState(false);

    useEffect(()=>{
        loadTodos();
    },[])

    const loadTodos = async () =>{
        setLoding(true);
        const res =  await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const list: Todo[] = await res.json();
       
        setTodoList(list);
        setLoding(false);
    }

    return (
        <div>
            <h1>Lista de tarefas!!!</h1>

            {loding && <div>Carregando...</div>}

            <ul>
             {todoList.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))};  
            </ul>
            
        </div>
    );
}

export default Todo;

