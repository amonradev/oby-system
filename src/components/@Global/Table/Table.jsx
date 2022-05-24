import './table.css';

export const Table = ({header, data}) => {
    return (
        <table>
            <thead>
                <tr>
                    {header.map(head => {
                        return <th>{head}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map(info => {
                    return <tr>
                            {info.map(line => {
                                return <td>{line}</td>
                            })}
                        </tr>
                })}
            </tbody>
        </table>
    )
}