import { category } from '../../data';
// import Category from './Category';
import Category from '../Category';
import './SelectGame.css';

const SelectGame = () => {



    return (
        <div className="selectGameWrapper">
            {
                category.map((item, i) => {
                    return <Category key={i} category={item} index={i} />
                })
            }
        </div>
    )
}

export default SelectGame;