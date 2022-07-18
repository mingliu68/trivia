import { useEffect } from 'react';
import { category } from '../../data';
import Category from './Category';
import './SelectGame.css';

const SelectGame = (props) => {
    const { setCategory, selectedCat, setGameMode, setQuestions, setCatDisplay, setCatIndex, loading, setLoading, setSelectionMode } = props;

    const handleSelectCategory = (e, cat, catDisplay, catIndex) => {
        // cat is the category id
        setCategory(cat);
        setCatDisplay(catDisplay)
        setCatIndex(catIndex)
    }

    async function handleSetGameMode(e) {
        if (selectedCat !== undefined) {
            const url = `https://opentdb.com/api.php?amount=10&category=${selectedCat}&type=multiple`
            const questions = await fetchQuestions(url);
            await setQuestions(questions);
            setGameMode(true);
            setSelectionMode(false)
        }
    }

    async function fetchQuestions(url) {
        const rawQuestions = await fetch(url);
        const jsonQuestions = await rawQuestions.json();
        return jsonQuestions.results;
    }

    useEffect(() => {
        setCategory(undefined);
        setCatDisplay(undefined)
        setCatIndex(undefined)
    }, [])


    return (
        <div className="selectGameWrapper">
            <div className="selectGameWrapperInner">
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
            </div>
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