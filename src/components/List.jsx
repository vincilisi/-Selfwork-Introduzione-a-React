// Compound Component per List
function List({ children }) {
    return (
        <ul className="list-container">
            {children}
        </ul>
    )
}

// Subcomponente Item
List.Item = function ListItem({ children }) {
    return (
        <li className="list-item">
            {children}
        </li>
    )
}

export default List
