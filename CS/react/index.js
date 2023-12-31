const { Component } = React;

class TarefaApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            tarefas: [],
            item: ""
        };
    }

    handleChange = (event) => {
        this.setState({item: event.target.value});
    }

        add = () => {
            const { tarefas, item } = this.state;
            if(item.length === 0){
                alert("Digite uma tarefa");
            } else {
                this.setState({
                    tarefas: tarefas.concat(item), item: ""
                });
            }
        }

        check = (e) =>{
            e.target.parentElement.querySelector('.certo').style.color="green";
            e.target.parentElement.querySelector('span').style.textDecoration="line-through";
        }

        del = (id) =>{
            const { tarefas } = this.state;
            tarefas.splice(id, 1);
            this.setState({ tarefas: tarefas });
        }

        render = () => {
            const { tarefas, item } = this.state;
            return(
                <div>
                    <header className="header">
                        <h1>Lista de tarefas</h1>
                        <input onChange={ this.handleChange } value={ item } type="text" placeholder="Digite a sua tarefa..." />
                        <span onClick={this.add}><i className="fas fa-plus-circle acrescentar" ></i></span>
                    </header>
                    <ul>
                        {tarefas.map((item, index) => (
                            <li key={index}>
                                <i onClick={this.check.bind(this)} className="fas fa-check-circle check certo"></i>
                                <span>{ item }</span>
                                <i onClick={this.del.bind(this, index)} className="fa-solid fa-trash-can close lixo"></i>
                            </li>
                        ))}
                        
                    </ul>
                </div>
        )
    }
        
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TarefaApp />);
