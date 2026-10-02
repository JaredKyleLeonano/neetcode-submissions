class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let output = ''
        const currentChars = new Map()
        let currentLength = 0
        const requiredChars = new Map()
        const requiredLength = t.length

        for (let i = 0; i < requiredLength; i++){
            requiredChars.set(t[i], (requiredChars.get(t[i]) || 0) + 1)
        }

        // console.log("this is the requiredChars:", requiredChars, "length of:", requiredLength)

        let l = 0
        for (let r = 0; r < s.length; r++){

            if(requiredChars.has(s[r])){
                currentChars.set(s[r], (currentChars.get(s[r]) || 0) + 1)

                if(currentChars.get(s[r]) <= requiredChars.get(s[r])){
                    // console.log("currentChar:", s[r],currentChars.get(s[r]), "requiredChar:", requiredChars.get(s[r]))
                    currentLength++
                    // console.log("updated currentLength:", currentLength)
                }
                // console.log("updated currentChars:", currentChars)
            }
                 
            while(currentLength == requiredLength){
                if((r - l + 1) < (output.length || 100000)){
                    // console.log("condition 1:", (r-l+1), "condition 2:", output.length)
                    // console.log("previous output:", output)
                    output = s.slice(l, r + 1)
                    // console.log("Updated output is:", output)
                }

                if(currentChars.has(s[l])){
                    // console.log("delete occured, removed:", s[l])
                    currentChars.set(s[l], currentChars.get(s[l]) - 1)
                    if(currentChars.get(s[l]) < requiredChars.get(s[l])){
                        currentLength--
                    }
                } 

                l++
            }
            
            // console.log("Iteration is:", r, "current window is:", s.slice(l, r+1))
        }

        return output
    }
}
