

// code is written by aniket kadam
//  power of closures 

// Closures allow functions to retain access to variables from their containing (or outer) scope even after that scope has finished executing. 
// In this case, the memoClosures function returns an inner function that retains access to the count variable,
//  allowing it to maintain state between calls.


const PowerClosures = () => {

    const memoClosures = () => {
        var count = 0;
        return (command) => {
            if (command === 'inc') {
                count = count + 1
                return count;
            }
            if (command === 'dec') {
                if (count === 0) {
                    return 'value is already zero'
                }
                else {
                    count = count - 1;
                    return count;
                }
            }

            return "not valid options"

        }

    }

    const buidlover = memoClosures();
    const firstuse = buidlover('inc');
    const seconduse = buidlover('inc');
    const thirduse = buidlover('inc');

    const firstused = buidlover('dec');
    const secondused = buidlover('dec');
    const thirdused = buidlover('dec');

    console.log('First use (increment):', firstuse);  // 1
    console.log('Second use (increment):', seconduse); // 2
    console.log('Third use (increment):', thirduse);   // 3

    console.log('First use (decrement):', firstused);  // 2
    console.log('Second use (decrement):', secondused); // 1
    console.log('Third use (decrement):', thirdused);  // "value is already zero"

    return (
        <div>
            <h1>power of closures</h1>
        </div>
    )
};


export default PowerClosures;