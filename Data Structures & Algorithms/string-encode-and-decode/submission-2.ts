class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = ""
        for (const word of strs){
            console.log('word to encode', word)
            encoded += '#' + word.length + '#' + word
        }
        console.log('encode ooutput', encoded)
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoded = []
        
        console.log("TESTING", str)
        for(let i = 0; i < str.length; i++){
            // console.log('THIS IS THE STR', str[i] + str[i+1], 'count is', i)
            const match = str.slice(i).match(/^#([0-9]+)#/)
            if(match){
                const stringLength: number = parseInt(match[1], 10)
                // console.log('STRING LENGTH AT:', i, "ITERATION IS:", stringLength)
                // console.log("THIS IS MATCH:", match[0].length)
                // console.log("TO SLICE IS:", str.slice(i+ match[0].length, i+ stringLength + match[0].length))
                decoded.push(str.slice(i+ match[0].length, i + stringLength + match[0].length))
                i += stringLength + 1
            }
        }

        return decoded
    }
}
