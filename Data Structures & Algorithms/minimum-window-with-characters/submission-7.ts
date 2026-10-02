class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length === 0 || s.length < t.length) return ''

        let output = ''

        const currentChars = new Map()
        let currentLength = 0

        const requiredChars = new Map()
        const requiredLength = t.length

        for (let i = 0; i < requiredLength; i++){
            requiredChars.set(t[i], (requiredChars.get(t[i]) || 0) + 1)
        }

        let l = 0
        for (let r = 0; r < s.length; r++){
            const currentR = s[r]
            if(requiredChars.has(currentR)){
                currentChars.set(currentR, (currentChars.get(currentR) || 0) + 1)

                if(currentChars.get(currentR) <= requiredChars.get(currentR)){
                    currentLength++
                }
            }
                 
            while(currentLength == requiredLength){
                if((r - l + 1) < (output.length || 100000)){
                    output = s.slice(l, r + 1)
                }

                const currentL = s[l]
                if(currentChars.has(currentL)){
                    currentChars.set(currentL, currentChars.get(currentL) - 1)
                    if(currentChars.get(currentL) < requiredChars.get(currentL)){
                        currentLength--
                    }
                } 
                l++
            }
            
        }

        return output
    }
}
