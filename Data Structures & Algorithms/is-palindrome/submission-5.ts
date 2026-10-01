class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string) {
        let i = 0
        let j = s.length - 1

        while (i < j){
            while(i < j && /[^a-zA-Z0-9]/.test(s[i])){
                i++
            }
            while(i < j && /[^a-zA-Z0-9]/.test(s[j])){
                j--
            }

           if (s[i].toLowerCase() === s[j].toLowerCase()){
                i++
                j--
            } else {
                return false
            }
        }

        return true

    }
}
