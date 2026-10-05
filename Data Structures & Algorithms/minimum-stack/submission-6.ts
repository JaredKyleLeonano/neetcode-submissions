class MinStack {
    private stack
    private stackMin

    constructor() {
        this.stack = []
        this.stackMin = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        
        const currentMin = this.stackMin[this.stackMin.length - 1] ?? Infinity
        if(val < currentMin){
            this.stackMin.push(val)
            return
        }
        this.stackMin.push(currentMin)

        // console.log('UPDATED STACK PUSH IS:', this.stack)
        // console.log('UPDATED STACK MIN PUSH IS:', this.stackMin)

    }

    /**
     * @return {void}
     */
    pop(): void {
        if(this.stack.length > 0){
            this.stack.pop()
        }

        if(this.stackMin.length > 0){
            this.stackMin.pop()
        }

        // console.log("UPDATED STACK POP IS:", this.stack)
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stackMin[this.stackMin.length - 1]
    }
}
