import { Actions } from './Actions';
import './table.css';

export const TableClients = ({data}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome/Idade</th>
                    <th>Problema</th>
                    <th>Satisfação</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map(info => {
                    return (<tr key={info.id}>
                                <td>{info.name || ' - '}</td>
                                <td>{info.problem || ' - '}</td>
                                <td>{info.satisfy || ' - '}</td>
                                <td><Actions id={info.id} type="clients" /></td>
                            </tr>)
                })}
            </tbody>
        </table>
    )
}