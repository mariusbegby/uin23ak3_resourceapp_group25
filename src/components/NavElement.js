/* eslint-disable jsx-a11y/anchor-is-valid */
export default function NavElement({
    category,
    activeCategory,
    setActiveCategory
}) {
    function changeCategory() {
        console.log("Changing active category to " + category)
        setActiveCategory(category);
    }

    if (category === activeCategory) {
        return (
            <a id={category} className='active' onClick={changeCategory}>
                {category}
            </a>
        );
    }

    return (
        <a id={category} onClick={changeCategory}>
            {category}
        </a>
    );
}
