class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = ""
        for (const word of strs){
            encoded += word.length + '#' + word
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoded = []
        let startIndex = 0

        for(let i = 0; i < str.length; i++){
            if(str[i] === "#"){
                startIndex = Number(str.slice(startIndex, i)) + i + 1
                decoded.push(str.slice(i + 1, startIndex))
                i = startIndex - 1
            }
        }

        return decoded
    }
}
