import resources from '../resources.json';

export default function Main(activeCategory) {
    return (
        <main>
            {resources.map((resource) => {
                return (
                    <section
                        id={resource.category}
                        className={
                            resource.category === activeCategory.activeCategory
                                ? ''
                                : 'hidden'
                        }>
                        <p>{resource.text}</p>

                        <ul>
                            {resource.sources.map((source) => {
                                console.log(source);
                                return <li><a href={source.url} target='_blank'>{source.title}</a></li>
                            })}
                        </ul>
                    </section>
                );
            })}
        </main>
    );
}
