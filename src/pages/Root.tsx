import { useEffect, useState } from "react";

function Root() {
    const [count, setCount] = useState(0);
    const [reRender, setReRender] = useState(true);
    
    useEffect(() => {
        console.log('useEffect function executed !');
    }, []);

    return (
        <section>
            <section onClick={() => {
                setCount(count + 1);
            }}>root page count is : {count}
            </section>
            <button onClick={() => setReRender(!reRender)}>change</button>
        </section>
    );
}

export default Root;