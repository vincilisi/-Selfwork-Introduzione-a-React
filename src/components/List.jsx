function List({ nomi }) {
    return (
        <ul className="list-container">
            {nomi.map((nome, index) => (
                <li key={index} className="list-item">
                    {nome}
                </li>
            ))}
        </ul>
    )
}

export default List
