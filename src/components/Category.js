import { Option } from "./Option";

export function Category(props) {
    const {itens} = props;
    return (
        <div className="category">
            <h2>{itens.title}</h2>
            <div className="options dish">
                {itens.options.map((option) => (<Option option={option} />))}
            </div>
        </div>
    );
}