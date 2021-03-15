import React, { Component } from 'react'
import Table from './Table'
import Form from './Form';

class App extends Component {               // Класс-компонент - App
    state = {                               // Состояние компонента App: массив лиц
        characters: [],
    }

    removeCharacter = index => {            // Удаление текущей строки таблицы
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = character => {           // Добавление новой записи в таблицу
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {                              // Генерация компонента App
        const { characters } = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App
