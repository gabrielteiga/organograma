import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Forms.css'

export const Forms = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onEmployeeCadastration({name, role, image, team})
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='forms'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    isRequired={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    text={name}
                    alterating={nameValue => setName(nameValue)}
                />
                <TextField 
                    isRequired={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    text={role}
                    alterating={nameRole => setRole(nameRole)}
                />
                <TextField 
                    isRequired={true} 
                    label='Imagem' 
                    placeholder='Digite o endereco da sua imagem'
                    text={image}
                    alterating={uriImage => setImage(uriImage)}
                />
                <DropdownList 
                    isRequired={true} 
                    label='Teams' 
                    items={props.teams}
                    value={team}
                    alterating={teamName => setTeam(teamName)}
                />
                <Button >
                    Criar Card
                </Button>
            </form>
        </section>
    )
}