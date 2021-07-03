const Checkbox = ({ data, onClick, current}) => {
    const { value, label } = data

    return (
        <div className="checkbox">
            <input
                type="checkbox"
                id={value}
                name={value}
                onChange={onClick}
                checked={current.includes(value)}
            />
            <label htmlFor={value}>{label}</label>
        </div>
    )
}

export default Checkbox