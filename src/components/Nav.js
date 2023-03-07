import resources from '../resources.json';
import NavElement from './NavElement';

export default function Nav({ activeCategory, setActiveCategory }) {
    return (
        <nav>
            {resources.map((resource) => {
                return (
                    <NavElement
                        category={resource.category}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}></NavElement>
                );
            })}
        </nav>
    );
}
