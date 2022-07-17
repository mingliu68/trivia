import { gradients } from '../../data';

const Category = (props) => {
    const { category, index } = props;
    const img = `url(${category.img})`;
    const gradient = `linear-gradient(to right top, ${gradients[index][0]}, ${gradients[index][1]}, ${gradients[index][2]})`
    return (
        <div className="cardWrapper" key={index}>
            <div className="cardInner" >
                <div className="cardImage" style={{ background: gradient }}>
                    <div className="cardDesc">
                        {category.cat}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Category;