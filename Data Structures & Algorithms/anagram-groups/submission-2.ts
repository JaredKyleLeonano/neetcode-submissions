class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]) {
        const map = new Map<string, Array<string>>()
        
        for (const word of strs){
            const key = word.split("").sort().join("")

            if(map.has(key)){
                map.get(key).push(word)
            } else {
                map.set(key, [word])
            }
        }

        return Array.from(map.values())

        // for (let i = 0; i < strs.length; i++){
        //     const alphabet = new Array(26).fill(0)
        //     for (let j = 0; j < strs[i].length; j++){
        //         alphabet[(strs[i].charCodeAt(j) - 'a'.charCodeAt(0))]++
        //     }

        //     const key = alphabet.toString()

        //     if(map.has(key)){
        //         map.get(key).push(strs[i])
        //     } else {
        //         map.set(key, [strs[i]])
        //     }
        // }

        // const output = Array.from(map.values())
        // return output
    }
}
