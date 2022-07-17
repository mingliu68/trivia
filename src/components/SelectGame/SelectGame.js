import { category } from '../../data';
import Category from './Category';
import './SelectGame.css';

const SelectGame = (props) => {
    const { setCategory, selectedCat, setGameMode, setQuestions, setCatDisplay } = props;

    const handleSelectCategory = (e, cat, catDisplay) => {
        // cat is the category id
        setCategory(cat);
        setCatDisplay(catDisplay)
    }

    async function handleSetGameMode(e) {
        if (selectedCat !== undefined) {
            const url = `https://opentdb.com/api.php?amount=10&category=${selectedCat}&type=multiple`
            const questions = await fetchQuestions(url);
            await setQuestions(questions);
            setGameMode(true);
        }
    }

    async function fetchQuestions(url) {
        const rawQuestions = await fetch(url);
        const jsonQuestions = await rawQuestions.json();
        console.log(jsonQuestions.results)
        return jsonQuestions.results;
    }

    return (
        <div className="selectGameWrapper">
            {
                category.map((item, i) => {
                    return (
                        <Category
                            key={i}
                            category={item}
                            index={i}
                            handleSelectCategory={handleSelectCategory}
                            selectedCat={selectedCat}
                        />
                    )
                })
            }
            <div
                style={{ cursor: "pointer", boxSizing: "border-box", padding: "10px 20px", display: "flex", color: "white", alignItems: "center", justifyContent: "center", fontweight: "700", fontSize: "30px", width: "200px", height: "150px", margin: "10px", borderRadius: "20px", background: "green" }}
                onClick={handleSetGameMode}
            >
                Let The Game Begin!
            </div>

        </div>
    )
}

export default SelectGame;