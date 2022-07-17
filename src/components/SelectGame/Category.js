import { gradients } from '../../data';
import './Category.css';

const Category = (props) => {
    const { category, index, handleSelectCategory, selectedCat } = props;

    const gradient = selectedCat !== category.id ?
        `linear-gradient(to right top, ${gradients[index][0]}, ${gradients[index][1]}, ${gradients[index][2]})`
        :
        "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
    return (
        <div className="cardWrapper" key={index} onClick={(e) => { handleSelectCategory(e, category.id, category.cat, index) }}>
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