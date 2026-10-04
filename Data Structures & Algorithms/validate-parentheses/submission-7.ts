class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []
        const closeMap = {
            '}': '{', 
            ')': '(', 
            ']': '['
            }

        for(const c of s){
            if(c == '{' || c == '(' || c == '['){
                stack.push(c)
            } else if(closeMap[c] == stack[stack.length - 1]){
                stack.pop()
            } else {
                return false
            } 
        }

        if(stack.length > 0){
            return false
        }
        return true
    }
}
