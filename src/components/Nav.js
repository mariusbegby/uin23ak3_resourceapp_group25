import resources from '../resources.json';
import NavElement from './NavElement';

export default function Nav({ activeCategory }) {
    return (
        <nav>
            {resources.map((resource) => {
                return (
                    <NavElement
                        category={resource.category}
                        activeCategory={activeCategory}></NavElement>
                );
            })}
        </nav>
    );
}
