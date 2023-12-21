import './TextField.css';

const TextField = (props) => {

    const placeholderModificada = `${props.placeholder}...`;

    const onTyping = (event) => {
        props.alterating(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.text} onChange={onTyping} required={props.isRequired} placeholder={placeholderModificada} type="text" />
        </div>
    )
}

export default TextField;