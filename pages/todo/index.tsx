import { Todo } from "../../types/Todo";


type Props = {
    todos: Todo[];
}

const Todo = ( { todos }: Props) => {
    return (
        <div>
            <h1>Lista de tarefas!!!</h1>
            <ul>
             {todos.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))};  
            </ul>
            
        </div>
    );
}


export default Todo;

// SEVER SIDE 

export const getServerSideProps = async () =>{
    const res =  await fetch(`https://jsonplaceholder.typicode.com/todos`);

    
    const todoList: Todo[] = await res.json();

    return {
        props: {
            todos: todoList
        }
    }

}