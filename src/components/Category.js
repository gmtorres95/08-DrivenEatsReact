import { Option } from "./Option";

export function Category(props) {
    const {
        options,
        title
    } = props;

    return (
        <div className="category">
            <h2>{title}</h2>
            <div className="options dish">
                {options.map((option) => (<Option option={option}/>))}
            </div>
        </div>
    );
}