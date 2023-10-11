
interface mahdi {
    style: string;
    text: string;
    position?: 1 | 2 | 3 | 4;
    sayHello: (...args: any) => string;
}


function Root() {
    // var myVar: number | string | boolean | Object | undefined | null | any;
    // const handleChange: () => (void | string | null | undefined) 
    // const handleChange: (arg1?: string | null, arg2?: boolean, arg3?: number | undefined) => void 
    // const handleChange: (...args: any) => any = () => {};
    // const handleChange: (arg1: Object) => void = () => {};
    const handleChange: (arg1: mahdi) => void = () => {};
    handleChange({
        style: "mahdi",
        text: "some text",
        position: 1,
        sayHello: () => {return ""}
    });

    return (
        <section>
            
        </section>
    );
}

export default Root;