export const feedback = (type="error",title="There is an error",message="opps try again later") => {
    return (
        <div className="error-container">
            <p className={type}>{title}</p>
            <p>{message}</p>
        </div>
    )
}