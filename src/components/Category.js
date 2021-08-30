import { Option } from "./Option";

export function Category(props) {
    const {items} = props;
    return (
        <div className="category">
            <h2>{items.title}</h2>
            <div className="options dish">
                {items.options.map((option) => (<Option option={option} />))}
            </div>
        </div>
    );
}