const Ingredient = (props) => {

    const i = props.ingredient;

    return (
        <>
            <u>{i.label}</u>
            {i.options.map(option => <li>{option}</li>)};
            <br />
        </>
    );
}

export default Ingredient;