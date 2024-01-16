import { Employee } from '../Employee/Employee'
import './Team.css'

export const Team = (props) => {

    const css = {backgroundColor: props.secondColor}

    return (
        (props.employees.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map( employee => {
                    return <Employee name={employee.name} role={employee.role} image={employee.image} />
                })}
            </div>
        </section>
        : '' // TODO - section vazia?
    )
}