class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string) {
        const formattedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()


        let j = formattedString.length - 1
        for(let i = 0; i < formattedString.length; i++){
            if (formattedString[i] === formattedString[j]){
                j -= 1
            } else {
                return false
            }
        }

        return true

    }
}
