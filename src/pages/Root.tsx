import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

function Root() {
    const [firstName, setFirstName] = useState<string>("");

    const handleFirstNameChange = (e: ChangeEvent) => {
        console.clear();
        /* اینجا به مشکل برخوردیم */
        // console.log(e.currentTarget.value)
        // const target = (e.currentTarget as HTMLInputElement);
        // const target = e.currentTarget as HTMLInputElement;
        const target = e.currentTarget as HTMLInputElement;
        // (e.currentTarget as HTMLInputElement).value;
        // console.log(target.value);
        // setFirstName(target.value as string);
        setFirstName(target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    const handleFirstNameClick = (e: MouseEvent) => {
    };

    return (
        <section>
            {/* <section style={{backgroundColor: "cyan", padding: "10px 0"}} onClick={(e) => {
                    // console.log(e.target);
                    // console.log(e.currentTarget);
                }}>
                <button>
                    click me
                </button>
                <button>click me 2</button>
            </section> */}

            <section>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="first_name" onClick={handleFirstNameClick} onChange={handleFirstNameChange} />
                    <p>{firstName}</p>
                    <button type="submit">submit</button>
                </form>
            </section>
        </section>
    );
}

export default Root;