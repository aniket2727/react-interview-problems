// Code is written by Aniket Kadam
// Check if 2 strings are anagrams

const Anagram = () => {
    const a = "abcef";
    const b = "cefab";

    const isAnagram = (str1, str2) => {
        return str1.split('').sort().join('') === str2.split('').sort().join('');
    };

    if (isAnagram(a, b)) {
        console.log("This is an anagram");
    } else {
        console.log("Not an anagram");
    }

    return (
        <div>
            <h1>Anagram or not</h1>
        </div>
    );
};

export default Anagram;
