import { useState } from "react";

function Root() {
    const [count, setCount] = useState(0);
    
    return (
        <section>
            <section onClick={() => {
                setCount(count + 1);
            }}>root page count is : {count}
            </section>
            <span onClick={() => console.log(count)}>log</span>
        </section>
    );
}

export default Root;