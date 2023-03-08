import resources from '../resources.json';
import Header from './Header';
import Nav from './Nav';

export default function Resources(activeCategory) {
    return (
        <div className='container'>
            <Header></Header>

            <Nav activeCategory={activeCategory}></Nav>

            <main>
                {resources.map((resource) => {
                    return (
                        <section
                            id={resource.category}
                            className={
                                resource.category ===
                                activeCategory.activeCategory
                                    ? ''
                                    : 'hidden'
                            }>
                            <p>{resource.text}</p>

                            <ul>
                                {resource.sources.map((source) => {
                                    return (
                                        <li>
                                            <a
                                                href={source.url}
                                                target='_blank'>
                                                {source.title}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    );
                })}
            </main>
        </div>
    );
}
