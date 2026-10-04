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

        console.log(s)
        for(const c of s){
            if(c == '{' || c == '(' || c == '['){
                stack.push(c)
                console.log("THIS RAN")
            } else if(closeMap[c] == stack[stack.length - 1]){
                console.log('this')
                console.log(closeMap[c], '==', stack[stack.length - 1], 'actual:', c)
                console.log('pooped', stack.pop())
            } else {
                console.log('mismatch, opening is:', stack[stack.length - 1], 'closing is:', c)
                return false
            } 

        }

        console.log('pushed contents:', stack)
        if(stack.length > 0){
            return false
        }
        return true
    }
}
