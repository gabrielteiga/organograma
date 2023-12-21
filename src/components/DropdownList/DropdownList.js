import './DropdownList.css'

export const DropdownList = (props) => {
    
    return(
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select 
              onChange={event => props.alterating(event.target.value)} 
              required={props.isRequired} 
              value={props.value}
            >
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}