/* eslint-disable jsx-a11y/anchor-is-valid */
export default function NavElement({ category, activeCategory }) {
    if (category === activeCategory.activeCategory) {
        if(category === 'HTML') {
            return (
                <a id={category} className='active' href={'/'}>
                    {category}
                </a>
            );
        }

        return (
            <a id={category} className='active' href={'/' + category.toLowerCase()}>
                {category}
            </a>
        );
    }

    else if(category === 'HTML') {
        return (
            <a id={category} href={'/'}>
                {category}
            </a>
        );
    }

    return <a id={category} href={'/' + category.toLowerCase()}>{category}</a>;
}
