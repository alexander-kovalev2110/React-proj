import React, { Component } from 'react'

class Form extends Component {      // Генерация формы для ввода лица - имя и профессия
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState       // Состояние компонета Form

    handleChange = event => {       // Ввод и вывод на экран символа
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {            // Передача введенных данных для обработки на верхний уровень
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {                      // Генерация формы
        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;
