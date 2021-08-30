export function FinishOrder(props) {
    const {
        classStyle,
        text
    } = props.state;
    return (
        <div className="bottom-bar">
            <div className={classStyle}>{text}</div>
        </div>
    );
}