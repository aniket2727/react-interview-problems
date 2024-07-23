// code is written by Aniket Kadam
// higher order component
const HigherOrderComponent = (WrappedComponent) => {
    return (props) => {
        return (
            <div style={{ backgroundColor: "red" }}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

const ChildComponent = () => {
    return (
        <div>
            <button>Submit</button>
        </div>
    );
};

const EnhancedComponent = HigherOrderComponent(ChildComponent);

const Code10 = () => {
    return (
        <div>
            <EnhancedComponent />
        </div>
    );
};

export default Code10;