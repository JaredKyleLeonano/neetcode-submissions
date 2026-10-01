class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string) {
        const formattedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

        let i = 0
        let j = formattedString.length - 1

        while (i < j){
           if (formattedString[i] === formattedString[j]){
                i++
                j--
            } else {
                return false
            }
        }
        
        return true

    }
}
