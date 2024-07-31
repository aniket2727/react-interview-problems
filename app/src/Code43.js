// Code is written by Aniket Kadam
// String has balanced parenthesis

const BalancedParenthesis = () => {

    const ff = () => {
        const arr = '{{{()[]}}}';
        const a = arr.split('');
        let flag = true;
        const stacka = [];

        for (let i = 0; i < a.length; i++) {
            if (a[i] === '(' || a[i] === '{' || a[i] === '[') {
                stacka.push(a[i]);
            } else {
                if (a[i] === ')') {
                    let b = stacka.pop();  
                    if (b !== '(') {
                        flag = false;
                        break;
                    }
                }
                if (a[i] === ']') {
                    let b = stacka.pop();
                    if (b !== '[') {
                        flag = false;
                        break;
                    }
                }
                if (a[i] === '}') {
                    let b = stacka.pop();
                    if (b !== '{') {
                        flag = false;
                        break;
                    }
                }
            }
        }

        // Check if stack is empty and flag is true
        return flag && stacka.length === 0;
    }

    const result = ff();
    console.log(result); // true or false

    return (
        <div>
            <h1>Balanced Parenthesis Check</h1>
            <p>{result ? "The string has balanced parentheses." : "The string does not have balanced parentheses."}</p>
        </div>
    )
};

export default BalancedParenthesis;
