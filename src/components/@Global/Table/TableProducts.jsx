import { Actions } from './Actions';
import './table.css';
import { formatBrl } from '../../../utils/formaters/formatBrl';

export const TableProducts = ({data}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Solicitações</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map(info => {
                    return (<tr key={info.id}>
                                <td>{info.name || ' - '}</td>
                                <td>{info.quantity || ' - '}</td>
                                <td>{formatBrl(info.price)}</td>
                                <td>{info.requests || ' - '}</td>
                                <td><Actions id={info.id} type="products" /></td>
                            </tr>)
                })}
            </tbody>
        </table>
    )
}